import { useEffect, useRef } from "react";

type SparklesProps = {
  density?: number;
  speed?: number;
  color?: string;
  direction?: "top" | "bottom" | "left" | "right" | "none";
  className?: string;
};

type Particle = {
  x: number;
  y: number;
  size: number;
  alpha: number;
  drift: number;
  velocity: number;
};

const Sparkles = ({
  density = 1800,
  speed = 2,
  color = "#a66cff",
  direction = "top",
  className,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    let frame = 0;
    let animationId = 0;
    let particles: Particle[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.max(80, Math.floor((rect.width * rect.height * density) / 1_000_000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: Math.random() * 1.4 + 0.35,
        alpha: Math.random() * 0.7 + 0.18,
        drift: (Math.random() - 0.5) * 0.28,
        velocity: (Math.random() * 0.42 + 0.12) * speed,
      }));
    };

    const moveParticle = (particle: Particle, width: number, height: number) => {
      if (direction === "none") {
        particle.x += particle.drift * 0.15;
        particle.y += Math.sin(frame + particle.x * 0.01) * 0.012 * speed;
      } else if (direction === "top") {
        particle.y -= particle.velocity;
        particle.x += particle.drift;
        if (particle.y < -6) particle.y = height + 6;
      } else if (direction === "bottom") {
        particle.y += particle.velocity;
        particle.x += particle.drift;
        if (particle.y > height + 6) particle.y = -6;
      } else if (direction === "left") {
        particle.x -= particle.velocity;
        particle.y += particle.drift;
        if (particle.x < -6) particle.x = width + 6;
      } else {
        particle.x += particle.velocity;
        particle.y += particle.drift;
        if (particle.x > width + 6) particle.x = -6;
      }

      if (particle.y < -8) particle.y = height + 8;
      if (particle.y > height + 8) particle.y = -8;
      if (particle.x < -8) particle.x = width + 8;
      if (particle.x > width + 8) particle.x = -8;
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      context.clearRect(0, 0, width, height);
      frame += 0.018 * speed;

      particles.forEach((particle, index) => {
        moveParticle(particle, width, height);

        const twinkle = 0.58 + Math.sin(frame + index * 0.37) * 0.42;
        const alpha = particle.alpha * twinkle;

        context.beginPath();
        context.fillStyle = color;
        context.globalAlpha = alpha;
        context.shadowColor = color;
        context.shadowBlur = 8;
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fill();
      });

      context.globalAlpha = 1;
      context.shadowBlur = 0;
      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [color, density, direction, speed]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};

export { Sparkles };
