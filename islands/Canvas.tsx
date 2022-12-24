import { useCallback, useEffect } from "preact/hooks";
import * as THREE from "three";

const MAX_SIZE = 500;

interface IParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  color: string;
}

export default function Canvas() {
  const frameDuration = 1000 / 30;
  let lastUpdate = Date.now();
  let camera: THREE.PerspectiveCamera,
    scene: THREE.Scene,
    renderer: THREE.WebGLRenderer;
  const geometry = new THREE.BufferGeometry();

  const particles: IParticle[] = [];
  const groups: IParticle[][] = [];
  let yellow: IParticle[], red: IParticle[], green: IParticle[];

  const containerRef = useCallback((node: HTMLElement) => {
    if (node !== null) {
      init(node);
      render();
    }
  }, []);

  const createGroup = (total: number, color: string) => {
    const group = [];
    for (let i = 0; i < total; i++) {
      // create random particle positions
      const particle = {
        x: Math.random() * MAX_SIZE,
        y: Math.random() * MAX_SIZE,
        vx: 0,
        vy: 0,
        color,
      };
      group.push(particle);
      particles.push(group[i]);
    }
    return group;
  };

  const rule = (
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
      if (a.x <= 0 || a.x >= MAX_SIZE) {
        a.vx *= -1;
      }
      if (a.y <= 0 || a.y >= MAX_SIZE) {
        a.vy *= -1;
      }
      if (a.x <= 0) {
        a.x = 0;
      }
      if (a.y <= 0) {
        a.y = 0;
      }
      if (a.x >= MAX_SIZE) {
        a.x = MAX_SIZE;
      }
      if (a.y >= MAX_SIZE) {
        a.y = MAX_SIZE;
      }
    }
  };

  const update = () => {
    const now = Date.now();
    const delta = now - lastUpdate;

    if (delta > frameDuration) {
      rule(groups[2], groups[2], -0.32);
      rule(groups[2], groups[1], -0.17);
      rule(groups[2], groups[0], 0.34);
      rule(groups[1], groups[1], -0.1);
      rule(groups[1], groups[2], -0.34);
      rule(groups[0], groups[0], 0.15);
      rule(groups[0], groups[2], -0.2);

      render();
      lastUpdate = now;
    }
    requestAnimationFrame(update);
  };

  function init(container: HTMLElement) {
    // data
    groups[0] = createGroup(500, "yellow");
    groups[1] = createGroup(400, "red");
    groups[2] = createGroup(500, "green");

    // threejs
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.position.z = 499;
    camera.position.x = MAX_SIZE / 2;
    camera.position.y = MAX_SIZE / 2;

    renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClearColor = false;
    container.appendChild(renderer.domElement);

    // create initial particle state
    const positions = [];
    const colors = [];
    const color = new THREE.Color();
    for (let i = 0; i < particles.length; i++) {
      positions.push(particles[i].x, particles[i].y, 0);
      switch (particles[i].color) {
        case "red": {
          color.setRGB(255, 0, 0);
          colors.push(color.r, color.g, color.b);
          break;
        }
        case "green": {
          color.setRGB(0, 255, 0);
          colors.push(color.r, color.g, color.b);
          break;
        }
        case "yellow": {
          color.setRGB(255, 255, 0);
          colors.push(color.r, color.g, color.b);
          break;
        }
      }
    }
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
    });
    const points = new THREE.Points(geometry, material);

    scene.add(points);

    update();
  }

  function render() {
    const positions = geometry.getAttribute("position").array;
    for (let i = 0; i < particles.length; i++) {
      const positionIndex = i * 3;
      positions[positionIndex] = particles[i].x;
      positions[positionIndex + 1] = particles[i].y;
      positions[positionIndex + 2] = 0;
    }
    geometry.attributes.position.needsUpdate = true;
    renderer.render(scene, camera);
  }

  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  useEffect(() => {
    addEventListener("resize", onWindowResize);

    return () => {
      removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <section ref={containerRef}></section>;
}
