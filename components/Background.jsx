"use client"; // Ensure it runs only on the client side

import {
  animate,
  useMotionTemplate,
  useMotionValue,
  motion,
  useScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";

const COLORS = [
  "#FF6B6B", // 🔴 Soft Red (Energetic, Alert, Passionate)
  "#FFD93D", // 🟡 Bright Yellow (Warm, Attention-Grabbing, Optimistic)
  "#6BCB77", // 🟢 Fresh Green (Natural, Growth-Oriented, Calming)
  "#4D96FF", // 🔵 Vibrant Blue (Trustworthy, Cool, Professional)
  "#FF6BA3", // 🌸 Pinkish Magenta (Playful, Creative, Youthful)
  "#8e24aa", // 🟣 Deep Purple (Royal, Mysterious, Luxurious)
];

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const color = useMotionValue(COLORS[0]);

  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 12, // Increased animation time for smooth transitions
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 0%, transparent 50%, ${color})`;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const c = canvas.getContext("2d");

    const MAX_VELOCITY = 2;
    const MIN_RADIUS = 10;
    const MAX_RADIUS = 20;
    const MIN_SEPARATION = 1;
    const DAMPING = 1;
    const RESTITUTION = 1;

    const COLOR_PALETTE = [
      "#FF6B6B",
      "#FFD93D",
      "#6BCB77",
      "#4D96FF",
      "#FF6BA3",
      "#8e24aa",
    ];

    const calculateParticles = () => {
      const area = window.innerWidth * window.innerHeight;
      return Math.floor(area / 10000);
    };

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    });

    function getRandomColor() {
      return COLOR_PALETTE[Math.floor(Math.random() * COLOR_PALETTE.length)];
    }

    function randomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }

    function getDistance(x1, y1, x2, y2) {
      const xDist = x2 - x1;
      const yDist = y2 - y1;
      return Math.sqrt(xDist * xDist + yDist * yDist);
    }

    function rotate(velocity, angle) {
      return {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
      };
    }

    function resolveCollision(p1, p2) {
      const xDist = p2.x - p1.x;
      const yDist = p2.y - p1.y;
      const xVelocityDiff = p1.velocity.x - p2.velocity.x;
      const yVelocityDiff = p1.velocity.y - p2.velocity.y;

      if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
        const angle = -Math.atan2(yDist, xDist);
        const m1 = p1.mass;
        const m2 = p2.mass;

        const u1 = rotate(p1.velocity, angle);
        const u2 = rotate(p2.velocity, angle);

        const v1 = {
          x: (u1.x * (m1 - m2) + 2 * m2 * u2.x) / (m1 + m2),
          y: u1.y,
        };
        const v2 = {
          x: (u2.x * (m2 - m1) + 2 * m1 * u1.x) / (m1 + m2),
          y: u2.y,
        };

        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        p1.velocity.x = vFinal1.x * DAMPING * RESTITUTION;
        p1.velocity.y = vFinal1.y * DAMPING * RESTITUTION;
        p2.velocity.x = vFinal2.x * DAMPING * RESTITUTION;
        p2.velocity.y = vFinal2.y * DAMPING * RESTITUTION;
      }
    }

    class Particle {
      constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.velocity = {
          x: randomFloat(-MAX_VELOCITY, MAX_VELOCITY),
          y: randomFloat(-MAX_VELOCITY, MAX_VELOCITY),
        };
        this.mass = radius * radius * Math.PI;
      }

      draw() {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

        // Glowing effect using shadowBlur
        c.shadowBlur = 20;
        c.shadowColor = this.color;

        // Smooth glowing effect by oscillating opacity
        const glowFactor =
          Math.sin(Date.now() * 0.0005 + this.x * 0.02) * 0.5 + 0.5; // Pulsating glow

        c.save();
        c.globalAlpha = glowFactor; // Dynamic glow effect
        c.fillStyle = this.color;
        c.fill();
        c.restore();

        c.closePath();
      }

      update(particles) {
        this.draw();

        for (let i = 0; i < particles.length; i++) {
          if (this === particles[i]) continue;
          const distance = getDistance(
            this.x,
            this.y,
            particles[i].x,
            particles[i].y
          );
          if (distance < this.radius + particles[i].radius + MIN_SEPARATION) {
            resolveCollision(this, particles[i]);
          }
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        if (this.x - this.radius <= 0 || this.x + this.radius >= canvas.width) {
          this.velocity.x = -this.velocity.x * RESTITUTION;
        }
        if (
          this.y - this.radius <= 0 ||
          this.y + this.radius >= canvas.height
        ) {
          this.velocity.y = -this.velocity.y * RESTITUTION;
        }
      }
    }

    let particles = [];

    function init() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles = [];
      const numParticles = calculateParticles();
      for (let i = 0; i < numParticles; i++) {
        const radius = randomFloat(MIN_RADIUS, MAX_RADIUS);
        let x = randomFloat(radius, canvas.width - radius);
        let y = randomFloat(radius, canvas.height - radius);
        const color = getRandomColor();

        particles.push(new Particle(x, y, radius, color));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      c.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update(particles));
    }

    init();
    animate();

    return () => {
      window.removeEventListener("resize", init);
    };
  }, []);

  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        style={{
          scaleX: scrollYProgress,
          background: color,
          position: "sticky",
          top: 0,
          width: "100%",
          height: "20px",
        }}
        className="-z-15"
      />
      <motion.section
        style={{ backgroundImage }}
        className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
      >
        <canvas ref={canvasRef} />
      </motion.section>
    </>
  );
};

export default ParticlesBackground;
