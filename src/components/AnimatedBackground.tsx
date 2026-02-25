const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Red halftone pattern - animated slow diagonal drift */}
      <div
        className="absolute inset-[-50%] w-[200%] h-[200%]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(0 85% 40%) 1.2px, transparent 1.2px)',
          backgroundSize: '20px 20px',
          opacity: 0.08,
          animation: 'halftone-drift 60s linear infinite',
        }}
      />

      {/* Second red halftone layer - offset and slower */}
      <div
        className="absolute inset-[-50%] w-[200%] h-[200%]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(0 85% 50%) 0.8px, transparent 0.8px)',
          backgroundSize: '28px 28px',
          opacity: 0.05,
          animation: 'halftone-drift-reverse 80s linear infinite',
        }}
      />

      {/* Subtle red glow blobs for depth */}
      <div className="absolute -top-[200px] -right-[150px] w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[80px]" style={{ background: 'radial-gradient(circle, hsl(0 85% 50% / 0.5), transparent)', animation: 'float 20s ease-in-out infinite' }} />
      <div className="absolute top-[40%] left-[20%] w-[400px] h-[400px] rounded-full opacity-[0.04] blur-[80px]" style={{ background: 'radial-gradient(circle, hsl(0 85% 45% / 0.4), transparent)', animation: 'float 20s ease-in-out infinite 10s' }} />

      <style>{`
        @keyframes halftone-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
        @keyframes halftone-drift-reverse {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-28px, 14px); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
