export default function FloatingRedDots() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Animated Background Rays (Left & Right) - Softened */}
      <div className="absolute inset-0 w-full h-full opacity-10">
         <div className="absolute top-1/2 left-0 w-[150%] max-w-[1000px] aspect-square -translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite]"
              style={{ background: 'conic-gradient(from 0deg, transparent 0deg, rgba(230,32,32,0.15) 30deg, transparent 60deg, rgba(230,32,32,0.15) 90deg, transparent 120deg, rgba(230,32,32,0.15) 150deg, transparent 180deg, rgba(230,32,32,0.15) 210deg, transparent 240deg, rgba(230,32,32,0.15) 270deg, transparent 300deg, rgba(230,32,32,0.15) 330deg, transparent 360deg)' }}
         />
         <div className="absolute top-1/2 right-0 w-[150%] max-w-[1000px] aspect-square translate-x-1/2 -translate-y-1/2 animate-[spin_60s_linear_infinite_reverse]"
              style={{ background: 'conic-gradient(from 0deg, transparent 0deg, rgba(230,32,32,0.15) 30deg, transparent 60deg, rgba(230,32,32,0.15) 90deg, transparent 120deg, rgba(230,32,32,0.15) 150deg, transparent 180deg, rgba(230,32,32,0.15) 210deg, transparent 240deg, rgba(230,32,32,0.15) 270deg, transparent 300deg, rgba(230,32,32,0.15) 330deg, transparent 360deg)' }}
         />
      </div>

      {/* Red Dot Grid Background Effect (Left & Right) - Softened */}
      <div 
        className="absolute inset-0 w-full h-full opacity-15 animate-[pulse_4s_ease-in-out_infinite]"
        style={{
          backgroundImage: 'radial-gradient(circle, #E62020 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          maskImage: 'linear-gradient(to right, black 0%, transparent 20%, transparent 80%, black 100%)',
          WebkitMaskImage: 'linear-gradient(to right, black 0%, transparent 20%, transparent 80%, black 100%)'
        }}
      />
      
      {/* Left and Right ambient glows - Pushed further out and softer */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[800px] bg-track-red/5 blur-[120px] rounded-full transform -translate-x-[60%] -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-[600px] h-[800px] bg-track-red/5 blur-[120px] rounded-full transform translate-x-[60%] -translate-y-1/2" />
    </div>
  );
}
