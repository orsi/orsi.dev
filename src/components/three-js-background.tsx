import { useCallback, useEffect } from "react";
import { tw } from "../twind/twind.ts";
import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPixelatedPass } from "three/addons/postprocessing/RenderPixelatedPass.js";
import { FlyControls } from "three/addons/controls/FlyControls.js";

export default function ThreeJsBackground() {
  let width, height;
  let camera: THREE.PerspectiveCamera | null = null;
  let renderer: THREE.WebGLRenderer | null = null;
  let controls: FlyControls | null = null;
  let composer: EffectComposer | null = null;
  const scene = new THREE.Scene();
  const objects: THREE.Mesh[] = [];

  const containerRef = useCallback((node: HTMLElement | null) => {
    if (node !== null) {
      // setup threejs
      width = window.innerWidth;
      height = window.innerHeight;

      // camera
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 10000);
      camera.position.set(0, 25, 60);
      camera.lookAt(0, 0, 0);

      // renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.autoClear = true;
      node.appendChild(renderer.domElement);

      // postprocessing
      composer = new EffectComposer(renderer);
      const renderPixelatedPass = new RenderPixelatedPass(3, scene, camera);
      composer.addPass(renderPixelatedPass);

      // helpers
      // controls = new FlyControls(camera, renderer.domElement);
      // controls.movementSpeed = 5;
      // controls.domElement = renderer.domElement;
      // controls.rollSpeed = Math.PI / 12;
      // controls.autoForward = false;
      // controls.dragToLook = true;
      // const axesHelper = new THREE.AxesHelper(10);
      // scene.add(axesHelper);
      // const size = 10;
      // const divisions = 10;
      // const gridHelper = new THREE.GridHelper(size, divisions);
      // scene.add(gridHelper);

      // spheres and stuff
      createObject();
      createObject();
      createObject();
      createObject();

      // update
      animate();
    }
  }, []);

  const createObject = () => {
    let geometry, object;
    const randomRed = Math.floor(Math.random() * 10 + 60);
    const randomGreen = Math.floor(Math.random() * 20 + 120);
    const randomBlue = Math.floor(Math.random() * 10 + 40);
    const color = new THREE.Color(
      `rgb(${randomRed},${randomGreen},${randomBlue})`
    );
    const material = new THREE.MeshBasicMaterial({
      color,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });
    const randomShape = Math.random();
    if (randomShape < 0.33) {
      geometry = new THREE.BoxGeometry(1, 1, 1);
      object = new THREE.Mesh(geometry, material);
    } else if (randomShape < 0.66) {
      geometry = new THREE.ConeGeometry(1, 1, 3);
      object = new THREE.Mesh(geometry, material);
    } else {
      geometry = new THREE.SphereGeometry(1, 5, 5);
      object = new THREE.Mesh(geometry, material);
    }

    const x = Math.random() * -2 - 8;
    const y = Math.random() * 40;
    const z = Math.random() * 5 + 45;
    object.name = crypto.getRandomValues(new Uint32Array(2)).toString();
    object.vPosition = Math.random() * 0.02 + 0.01;
    object.vRotation = Math.random() * 0.05 + 0.01;
    object.position.set(x, y, z);
    scene.add(object);
    objects.push(object);
  };

  const updateObjects = () => {
    // rotate objects
    for (let i = 0; i < objects.length; i++) {
      const object = objects[i];
      object.position.x += object.vPosition;
      object.position.y -= object.vPosition;
      object.position.z -= object.vPosition;
      object.rotation.x += object.vRotation;
      object.rotation.y -= object.vRotation;

      // check if object has exited out of right side of screen
      const frustum = new THREE.Frustum();
      const matrix = new THREE.Matrix4().multiplyMatrices(
        camera.projectionMatrix,
        camera.matrixWorldInverse
      );
      frustum.setFromProjectionMatrix(matrix);
      if (!frustum.containsPoint(object.position) && object.position.x > 0) {
        const selectedObject = scene.getObjectByName(object.name);
        scene.remove(selectedObject);
        objects.splice(i, 1);
        createObject();
      }
    }
  };

  let lastUpdate = Date.now();
  const animate = () => {
    const now = Date.now();
    const delta = now - lastUpdate;

    if (delta > 2000 + Math.random() * 3000) {
      createObject();
      lastUpdate = now;
    }

    updateObjects();
    if (controls) {
      controls.update(0.1);
    }
    if (composer) {
      composer.render();
    }
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      camera.lookAt(scene.position);

      renderer.setSize(width, height);
      if (composer) {
        composer.setSize(width, height);
      }
    };

    addEventListener("resize", onWindowResize);
    return () => {
      removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div className={tw(`fixed h-full w-full`)} ref={containerRef}></div>;
}
