import { useCallback, useEffect, useRef } from "preact/hooks";
import * as THREE from "three";
import Stats from "three/addons/libs/stats.module.js";

export default function Canvas() {
  let stats: typeof Stats;
  let camera: THREE.PerspectiveCamera,
    scene: THREE.Scene,
    renderer: THREE.WebGLRenderer,
    clock: THREE.Clock;

  const containerRef = useCallback((node: HTMLElement) => {
    if (node !== null) {
      init(node);
      animate();
    }
  }, []);

  function init(container: HTMLElement) {
    camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      10
    );
    clock = new THREE.Clock();
    scene = new THREE.Scene();

    camera.position.set(0, 0, 1);

    const colorArray = [
      new THREE.Color(0xff0080),
      new THREE.Color(0xffffff),
      new THREE.Color(0x8000ff),
    ];
    const positions = [];
    const colors = [];

    for (let i = 0; i < 100; i++) {
      positions.push(
        Math.random() - 0.5,
        Math.random() - 0.5,
        Math.random() - 0.5
      );

      const clr = colorArray[Math.floor(Math.random() * colorArray.length)];

      colors.push(clr.r, clr.g, clr.b);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positions, 3)
    );
    geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 4,
      vertexColors: true,
      depthTest: false,
      sizeAttenuation: false,
    });

    const mesh = new THREE.Points(geometry, material);
    scene.add(mesh);

    renderer = new THREE.WebGLRenderer({ preserveDrawingBuffer: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.autoClearColor = false;
    container.appendChild(renderer.domElement);

    stats = new Stats();
    container.appendChild(stats.dom);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
    stats.update();
  }

  function render() {
    const elapsedTime = clock.getElapsedTime();
    scene.rotation.y = elapsedTime * 0.5;
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
