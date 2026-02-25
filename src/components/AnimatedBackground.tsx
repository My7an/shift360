import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const spacing = 22;
      const cx = w / 2;
      const cy = h / 2;
      const maxDist = Math.sqrt(cx * cx + cy * cy);

      for (let x = 0; x < w; x += spacing) {
        for (let y = 0; y < h; y += spacing) {
          // Distance from center (normalized 0-1)
          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy) / maxDist;

          // Vignette: more visible at edges, fade to nothing at center
          const vignette = Math.pow(dist, 1.4);

          // Organic noise-like movement using overlapping sine waves
          const noise =
            Math.sin(x * 0.008 + time * 0.4) *
            Math.cos(y * 0.006 + time * 0.3) *
            0.5 +
            Math.sin((x + y) * 0.005 + time * 0.25) * 0.3 +
            Math.cos(x * 0.012 - time * 0.35) *
            Math.sin(y * 0.01 + time * 0.2) *
            0.2;

          const radius = Math.max(0, vignette * (1.8 + noise * 1.2));
          const alpha = Math.max(0, vignette * (0.35 + noise * 0.15));

          if (radius > 0.2 && alpha > 0.02) {
            ctx.beginPath();
            ctx.arc(x, y, radius, 0, Math.PI * 2);
            ctx.fillStyle = `hsla(0, 85%, 48%, ${alpha})`;
            ctx.fill();
          }
        }
      }

      time += 0.008;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <div className="absolute inset-0 bg-background" />
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.7 }}
      />
    </div>
  );
};

export default AnimatedBackground;
