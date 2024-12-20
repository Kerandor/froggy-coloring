import React, { useState } from 'react';
import { Palette } from 'lucide-react';

const ColoringToad = () => {
  const [colors, setColors] = useState({
    hat: 'none',
    body: 'none',
    eyes: 'none',
    pupils: 'black',
    nostrils: 'none'
  });

  const [currentColor, setCurrentColor] = useState('#8B4513');

  const colorOptions = [
    '#8B4513', // Brown
    '#228B22', // Forest Green
    '#4682B4', // Steel Blue
    '#FFD700', // Gold
    '#FF69B4', // Hot Pink
    '#9370DB', // Medium Purple
    'white',   // White
    'black'    // Black
  ];

  const handleColorClick = (part, e) => {
    // Prevent default touch behavior
    e.preventDefault();
    setColors(prev => ({
      ...prev,
      [part]: currentColor
    }));
  };

  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 p-4">
      <div className="w-full max-w-md mx-auto flex flex-col items-center gap-4">
        {/* Header */}
        <h1 className="text-xl sm:text-2xl font-bold flex items-center gap-2 text-center">
          <Palette className="w-5 h-5 sm:w-6 sm:h-6" />
          Color the Toad!
        </h1>
        
        {/* Color Picker - now wraps on smaller screens */}
        <div className="flex flex-wrap justify-center gap-2 p-2 bg-white rounded-lg shadow-sm w-full">
          {colorOptions.map((color) => (
            <button
              key={color}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 transition-transform active:scale-95 ${
                currentColor === color ? 'border-black shadow-md' : 'border-gray-300'
              }`}
              style={{ backgroundColor: color }}
              onClick={() => setCurrentColor(color)}
            />
          ))}
        </div>

        {/* SVG Container - responsive sizing */}
        <div className="w-full aspect-[4/3] bg-white rounded-lg shadow-sm p-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 400 300" 
            className="w-full h-full touch-none"
          >
            {/* Body */}
            <path 
              d="M110 200 C60 200 50 150 90 140 
                 C130 135 270 135 310 140
                 C350 150 340 200 290 200 
                 C280 220 120 220 110 200 Z" 
              fill={colors.body}
              stroke="black"
              strokeWidth="2"
              onTouchStart={(e) => handleColorClick('body', e)}
              onClick={(e) => handleColorClick('body', e)}
              style={{ cursor: 'pointer' }}
            />

            {/* Hat */}
            <g 
              onTouchStart={(e) => handleColorClick('hat', e)}
              onClick={(e) => handleColorClick('hat', e)} 
              style={{ cursor: 'pointer' }}
            >
              <path 
                d="M80 140 C80 120 320 120 320 140 L300 130 C300 110 100 110 100 130 Z" 
                fill={colors.hat}
                stroke="black"
                strokeWidth="2"
              />
              <path 
                d="M120 130 L120 80 L280 80 L280 130" 
                fill={colors.hat}
                stroke="black"
                strokeWidth="2"
              />
            </g>

            {/* Hat texture lines */}
            <path 
              d="M130 90 L270 90 M140 100 L260 100 M150 110 L250 110" 
              fill="none"
              stroke="black"
              strokeWidth="1"
              pointerEvents="none"
            />

            {/* Eyes */}
            <g 
              onTouchStart={(e) => handleColorClick('eyes', e)}
              onClick={(e) => handleColorClick('eyes', e)} 
              style={{ cursor: 'pointer' }}
            >
              <circle cx="160" cy="160" r="12" fill={colors.eyes} stroke="black" strokeWidth="2"/>
              <circle cx="240" cy="160" r="12" fill={colors.eyes} stroke="black" strokeWidth="2"/>
              <circle cx="160" cy="160" r="6" fill="none" stroke="black" strokeWidth="1"/>
              <circle cx="240" cy="160" r="6" fill="none" stroke="black" strokeWidth="1"/>
              <circle cx="158" cy="158" r="2" fill={colors.pupils}/>
              <circle cx="238" cy="158" r="2" fill={colors.pupils}/>
            </g>

            {/* Nostrils */}
            <g 
              onTouchStart={(e) => handleColorClick('nostrils', e)}
              onClick={(e) => handleColorClick('nostrils', e)} 
              style={{ cursor: 'pointer' }}
            >
              <path 
                d="M190 170 C200 175 200 175 210 170" 
                fill={colors.nostrils}
                stroke="black"
                strokeWidth="1.5"
              />
              <circle cx="190" cy="170" r="3" fill={colors.nostrils} stroke="black" strokeWidth="1"/>
              <circle cx="210" cy="170" r="3" fill={colors.nostrils} stroke="black" strokeWidth="1"/>
            </g>

            {/* Decorative texture details */}
            <g pointerEvents="none">
              <path d="M120 160 C130 150 150 150 160 160 M240 160 C250 150 270 150 280 160" 
                    fill="none" stroke="black" strokeWidth="1"/>
              <path d="M140 180 C150 170 170 170 180 180 M220 180 C230 170 250 170 260 180" 
                    fill="none" stroke="black" strokeWidth="1"/>
              <path d="M130 150 Q140 140 150 150 M250 150 Q260 140 270 150" 
                    fill="none" stroke="black" strokeWidth="1"/>
              <circle cx="145" cy="175" r="2" fill="none" stroke="black" strokeWidth="1"/>
              <circle cx="255" cy="175" r="2" fill="none" stroke="black" strokeWidth="1"/>
              <circle cx="180" cy="185" r="2" fill="none" stroke="black" strokeWidth="1"/>
              <circle cx="220" cy="185" r="2" fill="none" stroke="black" strokeWidth="1"/>
              <path d="M120 190 Q130 180 140 190 M260 190 Q270 180 280 190" 
                    fill="none" stroke="black" strokeWidth="1"/>
              <path d="M150 195 Q160 185 170 195 M230 195 Q240 185 250 195" 
                    fill="none" stroke="black" strokeWidth="1"/>
            </g>
          </svg>
        </div>
        
        {/* Instructions */}
        <div className="text-center text-gray-600 text-sm sm:text-base p-2">
          Select a color, then tap a part of the toad to color it!
        </div>
      </div>
    </div>
  );
};

export default ColoringToad;