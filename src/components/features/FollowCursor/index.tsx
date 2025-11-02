"use client";

import React, { useEffect } from "react";
import styles from "./FollowCursor.module.css";

interface FollowCursorProps {
  color?: string;
}

const FollowCursor: React.FC<FollowCursorProps> = ({ color = "#3232322b" }) => {
  useEffect(() => {
    let canvas: HTMLCanvasElement | null = null;
    let context: CanvasRenderingContext2D | null = null;
    let animationFrame: number | null = null;
    let width = window.innerWidth;
    let height = window.innerHeight;
    const cursor = { x: width / 2, y: height / 2 };
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    // Farbe, die von CSS-Variable überschrieben werden kann
    let drawColor = color;
    let dot: Dot | null = null;

    // Werte, die außerhalb von init() gebraucht werden
    let cursorOffset = { x: 0, y: 0 };
    let parsedLag = 8;

    class Dot {
      position: { x: number; y: number };
      width: number;
      lag: number;

      constructor(x: number, y: number, width: number, lag: number) {
        this.position = { x, y };
        this.width = width;
        this.lag = lag;
      }

      moveTowards(x: number, y: number, context: CanvasRenderingContext2D) {
        this.position.x += (x - this.position.x) / this.lag;
        this.position.y += (y - this.position.y) / this.lag;
        context.fillStyle = drawColor;
        context.beginPath();
        context.arc(
          this.position.x,
          this.position.y,
          this.width,
          0,
          2 * Math.PI
        );
        context.fill();
        context.closePath();
      }
    }

    const onMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const updateDot = () => {
      if (context && dot) {
        context.clearRect(0, 0, width, height);
        // Zielpunkt inkl. Offset, damit Punkt an Cursor-Spitze sitzt
        const targetX = cursor.x + (cursorOffset?.x || 0);
        const targetY = cursor.y + (cursorOffset?.y || 0);
        dot.moveTowards(targetX, targetY, context);
      }
    };

    const loop = () => {
      updateDot();
      animationFrame = requestAnimationFrame(loop);
    };

    const init = () => {
      if (prefersReducedMotion.matches) {
        console.log("Reduced motion enabled, cursor effect skipped.");
        return;
      }

      canvas = document.createElement("canvas");
      canvas.className = styles["follow-cursor"];
      context = canvas.getContext("2d");
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      document.body.appendChild(canvas);

      // CSS-Variablen vom angehängten Canvas lesen
      const computed = getComputedStyle(canvas);
      const dotSizeRaw = (
        computed.getPropertyValue("--dot-size") || "12px"
      ).trim();
      const parsedDotSize = parseFloat(dotSizeRaw) || 12;
      const cssDotColor = computed.getPropertyValue("--dot-color")?.trim();
      if (cssDotColor) drawColor = cssDotColor;

      // Offset lesen (px) — sorgt dafür, dass der Punkt an der Cursor-Spitze sitzt
      const offsetXRaw = (
        computed.getPropertyValue("--dot-offset-x") || "0px"
      ).trim();
      const offsetYRaw = (
        computed.getPropertyValue("--dot-offset-y") || "0px"
      ).trim();
      cursorOffset = {
        x: parseFloat(offsetXRaw) || 0,
        y: parseFloat(offsetYRaw) || 0,
      };

      // Lag (wie träge der Punkt folgt). Kleiner = näher an Cursor
      const lagRaw = (computed.getPropertyValue("--dot-lag") || "6").trim();
      parsedLag = Math.max(1, parseFloat(lagRaw) || 6);

      // Dot jetzt erstellen (lag kann fest oder abhängig von Größe sein)
      dot = new Dot(width / 2, height / 2, parsedDotSize, parsedLag);

      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("resize", onWindowResize);
      loop();
    };

    const destroy = () => {
      if (canvas) canvas.remove();
      if (animationFrame !== null) cancelAnimationFrame(animationFrame);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onWindowResize);
      animationFrame = null;
      dot = null;
      context = null;
      canvas = null;
    };

    if ("onchange" in prefersReducedMotion) {
      prefersReducedMotion.onchange = () => {
        if (prefersReducedMotion.matches) {
          destroy();
        } else {
          init();
        }
      };
    }

    init();

    return () => {
      destroy();
    };
  }, [color]);

  return null; // This component doesn't render any visible JSX
};

export default FollowCursor;
