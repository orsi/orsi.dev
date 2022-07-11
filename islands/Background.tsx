/** @jsx h */
import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
export default function Background() {
  // rendering is all drawn into the html canvas, so there
  // is no need for useState to rerender the html. all drawing
  // takes place inside the canvas context with requestAnimationFrame
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>();
  const animationFrameRef = useRef(0);
  const previousTimeRef = useRef(0);

  const setupCanvas = (canvas: HTMLCanvasElement) => {
    const dpi = window.devicePixelRatio;
    canvas.setAttribute("width", `${window.innerWidth}`);
    canvas.setAttribute("height", `${window.innerHeight}`);
    canvas.style.position = "fixed";
    canvas.style.zIndex = "0";

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    contextRef.current = ctx;
  };

  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      if ((deltaTime > 1000 / 60) && contextRef.current) {
        contextRef.current.fillStyle = `rgba(${
          Math.floor(Math.random() * 256)
        },${Math.floor(Math.random() * 256)},${
          Math.floor(Math.random() * 256)
        },${Math.random()})`;
        contextRef.current.fillRect(
          Math.random() * contextRef.current?.canvas.width,
          Math.random() * contextRef.current?.canvas.height,
          Math.floor(Math.random() * 5) + 1,
          Math.floor(Math.random() * 5) + 1,
        );
        previousTimeRef.current = time;
      }
    }
    animationFrameRef.current = requestAnimationFrame(animate);
  };

  // start animation frames
  useEffect(() => {
    animationFrameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameRef.current);
  }, []);

  // when html canvas is ready
  useEffect(() => {
    if (canvasRef.current) {
      setupCanvas(canvasRef.current);
    }
  }, [canvasRef]);

  return (
    <canvas
      ref={canvasRef}
      height="0"
      width="0"
    />
  );
}
