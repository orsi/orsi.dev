import { useCallback, useEffect } from "preact/hooks";
import * as THREE from "three";
import { FontLoader } from "three/addons/loaders/FontLoader.js";
import { TextGeometry } from "three/addons/geometries/TextGeometry.js";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { GlitchPass } from "three/addons/postprocessing/GlitchPass.js";

const HEIGHT_RATIO = 0.4;
export default function ThreeOrsiGlitch() {
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
      height = boundingRects.width * HEIGHT_RATIO;

      // camera
      camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 10000);
      camera.position.set(0, 25, 50);
      camera.lookAt(0, 0, 0);

      // renderer
      renderer = new THREE.WebGLRenderer();
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(width, height);
      renderer.autoClear = false;
      node.appendChild(renderer.domElement);

      // postprocessing
      composer = new EffectComposer(renderer);
      const renderPass = new RenderPass(scene, camera);
      renderPass.clear = false;
      composer.addPass(renderPass);
      glitchPass = new GlitchPass();
      composer.addPass(glitchPass);

      // font
      const loader = new FontLoader();
      loader.load(
        "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
        (font: any) => {
          const textGeo = new TextGeometry("ORSI", {
            font: font,
            size: 30,
            height: 1,
          });
          textGeo.computeBoundingBox();
          const textMaterial = new THREE.MeshBasicMaterial();
          text = new THREE.Mesh(textGeo, textMaterial);
          text.geometry.center();
          scene.add(text);
        }
      );

      // update
      animate();
    }
  }, []);

  const animate = () => {
    if (composer) {
      composer.render();
    }
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    const onWindowResize = () => {
      if (container && composer) {
        const boundingRects = container.getBoundingClientRect();
        width = boundingRects.width;
        height = boundingRects.width * HEIGHT_RATIO;
        camera.aspect = width / height;
        renderer.setSize(width, height);
        composer.setSize(width, height);
      }
    };

    addEventListener("resize", onWindowResize);
    return () => {
      removeEventListener("resize", onWindowResize);
    };
  }, []);

  return <div ref={containerRef}></div>;
}
