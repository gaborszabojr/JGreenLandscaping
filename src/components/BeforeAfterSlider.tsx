import { useState, useRef, ChangeEvent } from 'react';
import { motion } from 'motion/react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div 
      className="relative w-full aspect-video md:aspect-[16/10] overflow-hidden border-2 border-brand-green-leaf shadow-2xl group cursor-ew-resize" 
      ref={containerRef}
    >
      {/* After Image (Full background) */}
      <img
        src={afterImage}
        alt="After"
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
        referrerPolicy="no-referrer"
      />

      {/* Before Image (Clipped Overlay) */}
      <div
        className="absolute inset-0 h-full overflow-hidden z-10 border-r-2 border-white/50"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before"
          className="absolute inset-y-0 left-0 h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02]"
          style={{ width: containerRef.current?.offsetWidth || '100%' }}
          referrerPolicy="no-referrer"
        />
        {/* Decorative divider gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-black/20"></div>
      </div>

      {/* Comparison Slider Handle */}
      <div
        className="absolute inset-y-0 z-20 w-1 bg-white shadow-[0_0_15px_rgba(0,0,0,0.5)] pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white border-4 border-brand-green-leaf rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-brand-green-leaf/40 rounded-full"></div>
            <div className="w-1 h-5 bg-brand-green-leaf rounded-full"></div>
            <div className="w-1 h-3 bg-brand-green-leaf/40 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Input Slider (Hidden Overlay) */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
      />

      {/* Labels */}
      <div className="absolute bottom-6 left-6 z-20 flex gap-2">
        <span className="bg-brand-green-dark/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 border border-white/10">
          Before
        </span>
      </div>
      <div className="absolute bottom-6 right-6 z-20 flex gap-2">
        <span className="bg-brand-green-leaf/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 shadow-lg">
          After
        </span>
      </div>
    </div>
  );
}
