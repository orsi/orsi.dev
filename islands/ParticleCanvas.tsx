import { useCallback, useEffect, useRef } from "preact/hooks";
import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

interface IColour {
  red: number;
  green: number;
  blue: number;
  alpha: number;
}

interface IParticle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  colour: IColour;
}

interface IState {
  renderFrameMs: number;
  updateFrameMs: number;
  lastRenderUpdate: number;
  lastLogicUpdate: number;
  height: number;
  width: number;
  camera: THREE.PerspectiveCamera | undefined;
  renderer: THREE.WebGLRenderer | undefined;
  scene: THREE.Scene;
  geometry: THREE.BufferGeometry;
  controls: OrbitControls | undefined;
  particles: IParticle[];
  groups: IParticle[][];
}

const MAX_SIZE = 500;
const MAX_SIZE_OFFSET = MAX_SIZE - MAX_SIZE / 2;

export default function ParticleCanvas() {
  const threeState = useRef<IState>({
    renderFrameMs: 1000 / 60,
    updateFrameMs: 1000 / 30,
    lastRenderUpdate: Date.now(),
    lastLogicUpdate: Date.now(),
    height: 0,
    width: 0,
    camera: undefined,
    renderer: undefined,
    scene: new THREE.Scene(),
    geometry: new THREE.BufferGeometry(),
    controls: undefined,
    particles: [],
    groups: [],
  });

  const containerRef = useCallback((node: HTMLElement) => {
    if (node !== null) {
      init(node);
      render();
    }
  }, []);

  useEffect(() => {
    addEventListener("resize", onWindowResize);

    return () => {
      removeEventListener("resize", onWindowResize);
    };
  }, []);

  const createGroup = (total: number, colour: IColour) => {
    const group: IParticle[] = [];
    for (let i = 0; i < total; i++) {
      // create random particle positions
      const particle = {
        x: Math.random() * MAX_SIZE - MAX_SIZE_OFFSET,
        y: Math.random() * MAX_SIZE - MAX_SIZE_OFFSET,
        z: 0,
        vx: 0,
        vy: 0,
        colour,
      };
      group.push(particle);
      threeState.current.particles.push(group[i]);
    }
    threeState.current.groups.push(group);
  };

  const applyRule = (
    particles1: IParticle[],
    particles2: IParticle[],
    gravity: number
  ) => {
    for (let i = 0; i < particles1.length; i++) {
      let fx = 0;
      let fy = 0;
      const a = particles1[i];

      for (let j = 0; j < particles2.length; j++) {
        const b = particles2[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d > 0 && d < 80) {
          const F = (gravity * 1) / d;
          fx += F * dx;
          fy += F * dy;
        }
      }

      a.vx = (a.vx + fx) * 0.5;
      a.vy = (a.vy + fy) * 0.5;
      a.x += a.vx;
      a.y += a.vy;
      if (a.x <= -MAX_SIZE_OFFSET || a.x >= MAX_SIZE_OFFSET) {
        a.vx *= -1;
      }
      if (a.y <= -MAX_SIZE_OFFSET || a.y >= MAX_SIZE_OFFSET) {
        a.vy *= -1;
      }
      if (a.x <= -MAX_SIZE_OFFSET) {
        a.x = -MAX_SIZE_OFFSET;
      }
      if (a.y <= -MAX_SIZE_OFFSET) {
        a.y = -MAX_SIZE_OFFSET;
      }
      if (a.x >= MAX_SIZE_OFFSET) {
        a.x = MAX_SIZE_OFFSET;
      }
      if (a.y >= MAX_SIZE_OFFSET) {
        a.y = MAX_SIZE_OFFSET;
      }
    }
  };

  function init(container: HTMLElement) {
    threeState.current.width = window.innerWidth;
    threeState.current.height = Math.floor(window.innerHeight * 0.66);

    // camera
    threeState.current.camera = new THREE.PerspectiveCamera(
      75,
      threeState.current.width / threeState.current.height,
      0.1,
      10000
    );
    threeState.current.camera.lookAt(0, 0, 0);
    threeState.current.camera.position.set(0, 0, 500);

    // renderer
    threeState.current.renderer = new THREE.WebGLRenderer();
    threeState.current.renderer.setPixelRatio(window.devicePixelRatio);
    threeState.current.renderer.setSize(
      threeState.current.width,
      threeState.current.height
    );
    // threeState.current.renderer.autoClear = false;
    container.appendChild(threeState.current.renderer.domElement);

    //grid helper
    const size = 10;
    const divisions = 10;
    const gridHelper = new THREE.GridHelper(size, divisions);
    threeState.current.scene.add(gridHelper);

    const axesHelper = new THREE.AxesHelper(5);
    threeState.current.scene.add(axesHelper);

    // orbit control
    threeState.current.controls = new OrbitControls(
      threeState.current.camera,
      container
    );

    // font
    const loader = new FontLoader();
    loader.load(
      "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
      (font: any) => {
        const textGeo = new TextGeometry("ORSI", {
          font: font,
          size: 50,
          height: 1,
        });
        textGeo.computeBoundingBox();
        const textMaterial = new THREE.MeshBasicMaterial();
        const mesh = new THREE.Mesh(textGeo, textMaterial);
        mesh.geometry.center();
        threeState.current.scene.add(mesh);
      }
    );

    // data
    createGroup(400, {
      red: 1,
      green: 0,
      blue: 0,
      alpha: 1.0,
    });
    createGroup(300, {
      red: 0.2,
      green: 0.7,
      blue: 0.2,
      alpha: 1.0,
    });
    createGroup(200, {
      red: 0,
      green: 0,
      blue: 1,
      alpha: 0.5,
    });

    // create initial particle state
    const positions = [];
    const color = new THREE.Color();
    const colors: number[] = [];
    for (let i = 0; i < threeState.current.particles.length; i++) {
      const currentParticle = threeState.current.particles[i];
      positions.push(currentParticle.x, currentParticle.y, currentParticle.z);
      color.setRGB(
        currentParticle.colour.red,
        currentParticle.colour.green,
        currentParticle.colour.blue
      );
      colors.push(color.r, color.g, color.b);
    }
    threeState.current.geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    threeState.current.geometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );
    const material = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
    });
    const points = new THREE.Points(threeState.current.geometry, material);
    threeState.current.scene.add(points);

    // update
    update();
  }

  const update = () => {
    const now = Date.now();

    const logicDelta = now - threeState.current.lastLogicUpdate;
    if (logicDelta > threeState.current.updateFrameMs) {
      applyRule(threeState.current.groups[0], threeState.current.groups[0], -0.12);
      applyRule(threeState.current.groups[0], threeState.current.groups[1], 0.51);
      applyRule(threeState.current.groups[0], threeState.current.groups[2], -0.34);
      applyRule(threeState.current.groups[1], threeState.current.groups[1], 0.1);
      applyRule(threeState.current.groups[1], threeState.current.groups[2], -0.34);
      applyRule(threeState.current.groups[2], threeState.current.groups[2], -0.32);
      threeState.current.lastLogicUpdate = now;
    }

    const renderDelta = now - threeState.current.lastRenderUpdate;
    if (renderDelta > threeState.current.renderFrameMs) {
      render();
      threeState.current.lastRenderUpdate = now;
    }

    requestAnimationFrame(update);
  };

  function render() {
    if (!threeState.current.renderer) {
      return;
    }

    const positions =
      threeState.current.geometry.getAttribute("position").array;
    for (let i = 0; i < threeState.current.particles.length; i++) {
      const positionIndex = i * 3;
      positions[positionIndex] = threeState.current.particles[i].x;
      positions[positionIndex + 1] = threeState.current.particles[i].y;
      positions[positionIndex + 2] = 0;
    }
    threeState.current.geometry.attributes.position.needsUpdate = true;

    threeState.current.controls.update();

    threeState.current.renderer.render(
      threeState.current.scene,
      threeState.current.camera
    );
  }

  function onWindowResize() {
    if (!threeState.current.camera || !threeState.current.renderer) {
      return;
    }

    threeState.current.width = window.innerWidth;
    threeState.current.height = Math.floor(window.innerHeight * 0.66);

    threeState.current.camera.aspect =
      threeState.current.width / threeState.current.height;
    threeState.current.renderer.setSize(
      threeState.current.width,
      threeState.current.height
    );
  }

  return <section ref={containerRef}></section>;
}
