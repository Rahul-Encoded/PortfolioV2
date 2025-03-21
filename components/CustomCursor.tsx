"use client";

import React, { useEffect, useRef } from "react";

// Define cursor colors
const CURSOR_COLORS = [
  "#FF6B6B", // 🔴 Soft Red (Energetic, Alert, Passionate)
  "#FFD93D", // 🟡 Bright Yellow (Warm, Attention-Grabbing, Optimistic)
  "#6BCB77", // 🟢 Fresh Green (Natural, Growth-Oriented, Calming)
  "#4D96FF", // 🔵 Vibrant Blue (Trustworthy, Cool, Professional)
  "#FF6BA3", // 🌸 Pinkish Magenta (Playful, Creative, Youthful)
  "#8e24aa", // 🟣 Deep Purple (Royal, Mysterious, Luxurious)
];

const CustomCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -100, y: -100 }); // Start off-screen
  class Particle {
    x: number;
    y: number;
    radius: number;
    color: string;
    targetX: number;
    targetY: number;
    speed: number;

    constructor(canvas: HTMLCanvasElement, c: CanvasRenderingContext2D | null) {
      this.x = Math.random() * (canvas?.width || 0);
      this.y = Math.random() * (canvas?.height || 0);
      this.radius = Math.random() * 10 + 10;
      this.color = CURSOR_COLORS[Math.floor(Math.random() * CURSOR_COLORS.length)];
      this.targetX = this.x;
      this.targetY = this.y;
      this.speed = Math.random() * 0.1 + 0.05; // Smooth transition speed
    }

    draw(c: CanvasRenderingContext2D | null) {
      if (!c) return;
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

    update(mouseRef: React.RefObject<{ x: number; y: number }>, c: CanvasRenderingContext2D | null) {
      this.targetX = mouseRef.current.x + Math.random() * 30 - 15;
      this.targetY = mouseRef.current.y + Math.random() * 30 - 15;

      // Smooth movement towards cursor
      this.x += (this.targetX - this.x) * this.speed;
      this.y += (this.targetY - this.y) * this.speed;

      this.draw(c);
    }
  }

  let particles: Particle[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const c = canvas.getContext("2d");
    if (!c) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize only a few particles (3-5)
    particles = Array.from({ length: 7 }, () => new Particle(canvas, c));

    const animate = () => {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => particle.update(mouseRef, c));
    };

    // Update mouse position
    window.addEventListener("mousemove", (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    });

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    animate();
  }, []);

  // Ensure particles and animation logic are handled in the first useEffect

  return <canvas ref={canvasRef} className="fixed inset-0 w-full h-full pointer-events-none z-2" />;
};

export default CustomCursor;
