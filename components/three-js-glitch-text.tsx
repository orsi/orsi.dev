import { useCallback, useEffect } from "react";
import * as THREE from "three";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { GlitchPass } from "three/examples/jsm/postprocessing/GlitchPass.js";

export default function ThreeJsGlitchText() {
  let width, height;
  let camera: THREE.PerspectiveCamera | null = null;
  let composer: EffectComposer | null = null;
  let glitchPass = null;
  let renderer: THREE.WebGLRenderer | null = null;
  const scene = new THREE.Scene();
  let text = null;
  let container: HTMLDivElement | null = null;

  const containerRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      container = node;

      // setup threejs
      const boundingRects = node.getBoundingClientRect();
      width = boundingRects.width;
      height = boundingRects.height;

      // camera
      camera = new THREE.PerspectiveCamera(80, width / height, 0.1, 10000);
      camera.position.set(0, 10, 50);
      camera.lookAt(0, 0, 0);

      // renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.autoClear = true;
      node.appendChild(renderer.domElement);

      // light
      const dirLight = new THREE.DirectionalLight(0xffffff, 2);
      dirLight.position.set(0, 100, 50).normalize();
      scene.add(dirLight);

      // postprocessing
      composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      renderPass.clear = false;
      composer.addPass(renderPass);
      glitchPass = new GlitchPass();
      glitchPass.clear = false;
      composer.addPass(glitchPass);

      // font
      const loader = new FontLoader();
      loader.load("/fonts/pixel-pirate.json", (font: any) => {
        const geometry = new TextGeometry("ORSI", {
          font: font,
          size: 28,
          height: 5,
        });
        geometry.computeBoundingBox();
        const material = new THREE.MeshPhongMaterial({
          color: 0xffffff,
        });
        text = new THREE.Mesh(geometry, material);
        text.geometry.center();
        text.position.set(0, 0, 0);
        scene.add(text);
      });

      // update
      animate();
    }
  }, []);

  const animate = () => {
    if (!composer) {
      return;
    }

    composer.render();
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const onWindowResize = () => {
      if (!camera || !renderer || !container || !composer) {
        return;
      }

      const boundingRects = container.getBoundingClientRect();
      width = boundingRects.width;
      height = boundingRects.height;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      composer.setSize(width, height);
    };

    addEventListener("resize", onWindowResize);
    return () => {
      removeEventListener("resize", onWindowResize);
    };
  }, []);

  return (
    <div className={`mx-auto h-[40vw] max-h-[280px]`} ref={containerRef}></div>
  );
}
