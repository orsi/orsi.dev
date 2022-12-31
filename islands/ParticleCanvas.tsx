import { useCallback, useEffect, useRef } from "preact/hooks";
import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { FlyControls } from "three/addons/controls/FlyControls.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { GlitchPass } from "three/addons/postprocessing/GlitchPass.js";

export default function ParticleCanvas() {
  const state = useRef<any>({
    renderFrameMs: 1000 / 60,
    updateFrameMs: 1000 / 30,
    lastRenderUpdate: Date.now(),
    lastLogicUpdate: Date.now(),
    height: 0,
    width: 0,
    camera: undefined,
    composer: undefined,
    glitchPass: undefined,
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
      state.current.camera.position.set(0, 25, 50);
      state.current.camera.lookAt(0, 0, 0);

      // renderer
      state.current.renderer = new THREE.WebGLRenderer();
      state.current.renderer.setPixelRatio(window.devicePixelRatio);
      state.current.renderer.setSize(state.current.width, state.current.height);
      state.current.renderer.autoClear = false;
      node.appendChild(state.current.renderer.domElement);

      // // grid
      // const size = 50;
      // const divisions = 50;
      // const gridHelper = new THREE.GridHelper(size, divisions);
      // state.current.scene.add(gridHelper);

      // // axes
      // const axesHelper = new THREE.AxesHelper(50);
      // state.current.scene.add(axesHelper);

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
      let geometry = new THREE.BoxGeometry(1, 1, 1);
      let material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true,
      });
      let object = new THREE.Mesh(geometry, material);
      object.position.set(-10, 20, 40);
      state.current.scene.add(object);
      state.current.objects.push(object);

      geometry = new THREE.SphereGeometry(1, 5, 5);
      material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true,
      });
      object = new THREE.Mesh(geometry, material);
      object.position.set(0, 20, 40);
      state.current.scene.add(object);
      state.current.objects.push(object);

      geometry = new THREE.ConeGeometry(1, 1, 3);
      material = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true,
      });
      object = new THREE.Mesh(geometry, material);
      object.position.set(10, 20, 40);
      state.current.scene.add(object);
      state.current.objects.push(object);

      // dat gui
      const dat = await import("https://esm.sh/dat.gui@0.7.9");
      const gui = new dat.GUI();

      // postprocessing

      state.current.composer = new EffectComposer(state.current.renderer);
      state.current.composer.addPass(
        new RenderPass(state.current.scene, state.current.camera)
      );

      state.current.glitchPass = new GlitchPass();
      state.current.composer.addPass(state.current.glitchPass);

      // update
      animate();
    }
  }, []);

  const animate = () => {
    const delta = clock.getDelta();

    // rotate objects
    for (let i = 0; i < state.current.objects.length; i++) {
      const object = state.current.objects[i];
      object.rotation.x += 0.01;
      object.rotation.y += 0.01;
    }

    state.current.controls.update(delta);
    state.current.composer.render();

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
