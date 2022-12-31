import { useCallback, useEffect, useRef } from "preact/hooks";
import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
// import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FlyControls } from "three/addons/controls/FlyControls.js";

const MAX_SIZE = 500;

export default function ParticleCanvas() {
  const state = useRef<any>({
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
    text: undefined,
    objects: [],
  });

  const clock = new THREE.Clock();

  const containerRef = useCallback(async (node: HTMLElement | null) => {
    if (node !== null) {
      // setup threejs
      state.current.width = window.innerWidth;
      state.current.height = Math.floor(window.innerHeight * 0.66);

      // camera
      state.current.camera = new THREE.PerspectiveCamera(
        75,
        state.current.width / state.current.height,
        0.1,
        10000
      );
      state.current.camera.position.set(90, 70, 100);
      state.current.camera.lookAt(0, 0, 0);

      // renderer
      state.current.renderer = new THREE.WebGLRenderer();
      state.current.renderer.setPixelRatio(window.devicePixelRatio);
      state.current.renderer.setSize(state.current.width, state.current.height);
      state.current.renderer.autoClear = false;
      node.appendChild(state.current.renderer.domElement);

      // grid
      const size = 50;
      const divisions = 50;
      const gridHelper = new THREE.GridHelper(size, divisions);
      state.current.scene.add(gridHelper);

      // axes
      const axesHelper = new THREE.AxesHelper(50);
      state.current.scene.add(axesHelper);

      // orbit control
      state.current.controls = new FlyControls(
        state.current.camera,
        state.current.renderer.domElement
      );
      state.current.controls.movementSpeed = 100;
      state.current.controls.domElement = state.current.renderer.domElement;
      state.current.controls.rollSpeed = Math.PI / 3;
      state.current.controls.autoForward = false;
      state.current.controls.dragToLook = true;

      // light
      const light = new THREE.AmbientLight(0x404040, 1); // soft white light
      state.current.scene.add(light);

      // font
      const loader = new FontLoader();
      loader.load(
        "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
        (font: any) => {
          const textGeo = new TextGeometry("ORSI", {
            font: font,
            size: 40,
            height: 1,
          });
          textGeo.computeBoundingBox();
          const textMaterial = new THREE.MeshBasicMaterial();
          const mesh = (state.current.text = new THREE.Mesh(
            textGeo,
            textMaterial
          ));
          mesh.geometry.center();
          state.current.scene.add(mesh);
          state.current.text = mesh;
        }
      );

      // spheres and stuff
      for (let i = 0; i < 500; i++) {
        const x = Math.random() * MAX_SIZE - MAX_SIZE / 2;
        const y = Math.random() * MAX_SIZE - MAX_SIZE / 2;
        const z = Math.random() * MAX_SIZE - MAX_SIZE / 2;
        const randomShape = Math.random();
        let geometry;
        if (randomShape < 0.33) {
          geometry = new THREE.WireframeGeometry(
            new THREE.BoxGeometry(1, 1, 1)
          );
        } else if (randomShape < 0.66) {
          geometry = new THREE.WireframeGeometry(
            new THREE.SphereGeometry(1, 5, 5)
          );
        } else {
          const shape = new THREE.Shape();
          const x = 0;
          const y = 0;

          shape.moveTo(x - 2, x - 2);
          shape.lineTo(2, -2);
          shape.lineTo(0, 2);
          geometry = new THREE.ShapeGeometry(shape);
        }

        const randomColor = Math.random();
        const color =
          randomColor < 0.33
            ? 0x00ffa0
            : randomColor < 0.66
            ? 0xff00a0
            : 0x00a0ff;

        const randomObject = Math.random();
        const object =
          randomObject < 0.5
            ? new THREE.Mesh(
                geometry,
                new THREE.MeshBasicMaterial({ color, side: THREE.DoubleSide })
              )
            : new THREE.Line(geometry, new THREE.LineBasicMaterial({ color }));
        object.position.set(x, y, z);
        state.current.scene.add(object);
        state.current.objects.push(object);
      }

      // dat gui
      const dat = await import("https://esm.sh/dat.gui@0.7.9");
      const gui = new dat.GUI();
      const cameraFolder = gui.addFolder("Camera");
      cameraFolder.add(state.current.camera.position, "x", -500, 500);
      cameraFolder.add(state.current.camera.position, "y", -500, 500);
      cameraFolder.add(state.current.camera.position, "z", -500, 500);
      cameraFolder.open();

      // update
      animate();
    }
  }, []);

  const animate = () => {
    const delta = clock.getDelta();

    // update positions
    for (let i = 0; i < state.current.objects.length; i++) {
      const randomPositionX = Math.random() * 2 - 1;
      const randomPositionY = Math.random() * 2 - 1;
      const randomPositionZ = Math.random() * 2 - 1;
      const object = state.current.objects[i];
      object.position.x += randomPositionX;
      object.position.y += randomPositionY;
      object.position.z += randomPositionZ;
    }

    if (state.current.text) {
      state.current.text.rotation.y += 0.01;
      state.current.text.rotation.x += 0.01;
      state.current.text.rotation.z += 0.01;
    }

    state.current.controls.update(delta);
    state.current.renderer.render(state.current.scene, state.current.camera);

    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const onWindowResize = () => {
      state.current.width = window.innerWidth;
      state.current.height = Math.floor(window.innerHeight * 0.66);
      state.current.camera.aspect = state.current.width / state.current.height;
      state.current.renderer.setSize(state.current.width, state.current.height);
    };

    addEventListener("resize", onWindowResize);
    return () => {
      removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <section ref={containerRef}></section>;
}
