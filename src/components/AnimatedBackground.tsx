const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      {/* Dark gradient base */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card" />
      
      {/* Animated halftone pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(0 0% 40%) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
          animation: 'halftone-drift 30s linear infinite',
        }}
      />

      {/* Secondary halftone layer offset */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, hsl(0 85% 50% / 0.5) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          animation: 'halftone-drift-reverse 40s linear infinite',
        }}
      />

      {/* Red glow blobs */}
      <div className="absolute -top-[200px] -right-[150px] w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[80px]" style={{ background: 'linear-gradient(135deg, hsl(0 85% 50% / 0.4), hsl(0 0% 15%))' , animation: 'float 20s ease-in-out infinite' }} />
      <div className="absolute -bottom-[100px] -left-[100px] w-[500px] h-[500px] rounded-full opacity-[0.07] blur-[80px]" style={{ background: 'linear-gradient(135deg, hsl(0 0% 15%), hsl(0 0% 10%))', animation: 'float 20s ease-in-out infinite 7s' }} />
      <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[80px]" style={{ background: 'linear-gradient(135deg, hsl(0 85% 50% / 0.3), hsl(0 0% 10%))', animation: 'float 20s ease-in-out infinite 14s' }} />

      <style>{`
        @keyframes halftone-drift {
          0% { transform: translate(0, 0); }
          100% { transform: translate(18px, 18px); }
        }
        @keyframes halftone-drift-reverse {
          0% { transform: translate(0, 0); }
          100% { transform: translate(-24px, 12px); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;
