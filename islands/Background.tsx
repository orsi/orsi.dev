/** @jsx h */
import { h } from "preact";
import { useEffect, useRef } from "preact/hooks";
export default function Background() {
  // rendering is all drawn into the html canvas, so there
  // is no need for useState to rerender the html. all drawing
  // takes place inside the canvas context with requestAnimationFrame
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>();
  const canvasState = useRef({
    x: 0,
    y: 0,
  });
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
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    contextRef.current = ctx;
  };

  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      if ((deltaTime > 1000 / 10) && contextRef.current) {
        console.log('update', deltaTime);
        contextRef.current.clearRect(
          0,
          0,
          contextRef.current.canvas.width,
          contextRef.current.canvas.height,
        );
        contextRef.current.fillStyle = "grey";
        contextRef.current.fillRect(
          Math.random() * contextRef.current?.canvas.width,
          Math.random() * contextRef.current?.canvas.height,
          10,
          10,
        );
        canvasState.current.x += 10;
        canvasState.current.y += 10;
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
