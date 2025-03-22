"use client";

import React, { useEffect, useRef } from "react";

// Define cursor colors
const CURSOR_COLORS = [
  "#FF6B6B", // 🔴 Soft Red
  "#FFD93D", // 🟡 Bright Yellow
  "#6BCB77", // 🟢 Fresh Green
  "#4D96FF", // 🔵 Vibrant Blue
  "#FF6BA3", // 🌸 Pinkish Magenta
  "#8e24aa", // 🟣 Deep Purple
];

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -100, y: -100 }); // Start off-screen
  const particlesRef = useRef<Particle[]>([]); // Store particles persistently

  class Particle {
    x: number;
    y: number;
    radius: number;
    color: string;
    targetX: number;
    targetY: number;
    speed: number;

    constructor(canvas: HTMLCanvasElement) {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.radius = Math.random() * 10 + 10;
      this.color = CURSOR_COLORS[Math.floor(Math.random() * CURSOR_COLORS.length)];
      this.targetX = this.x;
      this.targetY = this.y;
      this.speed = Math.random() * 0.1 + 0.05;
    }

    draw(c: CanvasRenderingContext2D) {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      c.fillStyle = this.color;
      c.strokeStyle = "black";
      c.lineWidth = 3;
      c.stroke();
      c.shadowBlur = 15;
      c.shadowColor = this.color;
      c.fill();
    }

    update(mouseRef: React.RefObject<{ x: number; y: number }>, c: CanvasRenderingContext2D) {
      this.targetX = mouseRef.current.x + Math.random() * 30 - 15;
      this.targetY = mouseRef.current.y + Math.random() * 30 - 15;

      // Smooth movement towards cursor
      this.x += (this.targetX - this.x) * this.speed;
      this.y += (this.targetY - this.y) * this.speed;

      this.draw(c);
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const c = canvas.getContext("2d");
    if (!c) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize particles only once
    if (particlesRef.current.length === 0) {
      particlesRef.current = Array.from({ length: 7 }, () => new Particle(canvas));
    }

    const animate = () => {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((particle) => particle.update(mouseRef, c));
    };

    // Update mouse position
    const updateMousePosition = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("resize", handleResize);

    animate();

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-2" />;
};

export default CustomCursor;
