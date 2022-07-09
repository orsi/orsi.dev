/** @jsx h */
import { h } from "preact";
import { useCallback, useEffect, useRef, useState } from "preact/hooks";
export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contextRef = useRef<CanvasRenderingContext2D>();
  const canvasState = useRef({
    x: 0,
    y: 0,
  });

  const setupCanvas = (canvas: HTMLCanvasElement) => {
    const dpi = window.devicePixelRatio;
    canvas.setAttribute("width", window.innerWidth * dpi);
    canvas.setAttribute("height", window.innerHeight * dpi);

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      return;
    }
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    contextRef.current = ctx;
  };

  useEffect(() => {
    if (canvasRef.current) {
      setupCanvas(canvasRef.current);
    }
  }, [canvasRef]);

  const animationRef = useRef(0);
  const previousTimeRef = useRef(0);
  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;
      if (deltaTime > 20 && contextRef.current) {
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
    animationRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    animationRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        zIndex: "0",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        minHeight: "100vh",
      }}
    />
  );
}
