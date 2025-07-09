import React, { useState, useEffect } from 'react';
import view from '../assets/view.png';

const StarryNight = () => {
  const [animationsPaused, setAnimationsPaused] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Sample background images - replace with your actual images
  const backgrounds = [
    view,
    
  ];

  // Create star elements
  const createStars = (count, isReflected = false) => {
    return Array.from({ length: count }).map((_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = 80 + Math.random() * 40;
      
      return (
        <div
          key={`${isReflected ? 'reflected' : 'sky'}-${i}`}
          className={`absolute rounded-full bg-white opacity-90 shadow-[0_0_6px_rgba(255,255,255,0.6)] ${
            animationsPaused ? 'animate-none' : 'animate-driftStars'
          }`}
          style={{
            width: '4px',
            height: '4px',
            top: `${top}%`,
            left: `${left}%`,
            animationDuration: `${duration}s`,
          }}
        />
      );
    });
  };

  // Create firefly elements
  const createFireflies = (count) => {
    return Array.from({ length: count }).map((_, i) => {
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = 5 + Math.random() * 5;
      
      return (
        <div
          key={`firefly-${i}`}
          className={`absolute rounded-full bg-[rgba(255,255,150,0.9)] shadow-[0_0_20px_6px_rgba(255,255,180,0.7)] ${
            animationsPaused ? 'animate-none' : 'animate-flicker animate-fly'
          }`}
          style={{
            width: '10px',
            height: '10px',
            top: `${top}%`,
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s, 20s`,
          }}
        />
      );
    });
  };

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      if (!animationsPaused) {
        setCurrentSlide((prev) => (prev + 1) % backgrounds.length);
      }
    }, 8000); // Change slide every 8 seconds
    
    return () => clearInterval(interval);
  }, [animationsPaused, backgrounds.length]);

  return (
    <div 
      className="relative min-h-screen w-full overflow-x-hidden bg-black font-sans"
      aria-label="A tranquil animated scene of a starry mountain lake with fireflies."
    >
      {/* Background image slideshow */}
      <div className="fixed inset-0 overflow-hidden">
        {backgrounds.map((bg, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
              width: '100%'
            }}
          />
        ))}
      </div>

      {/* Controls */}
      <div className="fixed top-2.5 right-2.5 bg-black/50 text-white p-2.5 rounded-lg z-[10] text-sm flex flex-col gap-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input 
            type="checkbox"
            checked={animationsPaused}
            onChange={() => setAnimationsPaused(!animationsPaused)}
          />
          Pause animations
        </label>
        
        {/* Slideshow controls */}
        <div className="flex gap-2 mt-2">
          {backgrounds.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-gray-400'
              }`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative z-[3] py-20 px-5 mt-20 text-center text-white bg-black/30 backdrop-blur-sm rounded-2xl max-w-4xl mx-auto"
        role="region"
        aria-label="Hero section with welcome message"
      >
        <h1 className="text-3xl md:text-5xl mb-2.5">Welcome to the Night Sky</h1>
        <p className="text-base md:text-xl leading-relaxed">
          Experience the magic of stars and fireflies under the tranquil mountain sky.
        </p>
      </section>

      {/* Star layers */}
      <div className="fixed inset-0 pointer-events-none z-[2]" aria-hidden="true">
        {createStars(150)}
      </div>
      
      {/* Reflected stars */}
      <div 
        className="fixed bottom-0 left-0 w-full h-1/2 pointer-events-none z-[1] scale-y-[-1] blur-sm opacity-40"
        aria-hidden="true"
      >
        {createStars(150, true)}
      </div>
      
      {/* Fireflies */}
      <div className="fixed inset-0 pointer-events-none z-[2]" aria-hidden="true">
        {createFireflies(60)}
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes driftStars {
          0% { transform: translateX(0); }
          100% { transform: translateX(100vw); }
        }
        
        @keyframes flicker {
          0%, 100% { opacity: 0; }
          25% { opacity: 0.6; }
          50% { opacity: 1; }
          75% { opacity: 0.3; }
        }
        
        @keyframes fly {
          0% { transform: translate(0, 0); }
          25% { transform: translate(20px, -10px); }
          50% { transform: translate(-10px, 10px); }
          75% { transform: translate(15px, -5px); }
          100% { transform: translate(0, 0); }
        }
        
        .animate-driftStars {
          animation: driftStars linear infinite;
        }
        
        .animate-flicker {
          animation: flicker ease-in-out infinite;
        }
        
        .animate-fly {
          animation: fly ease-in-out infinite;
        }
        
        @media (max-width: 768px) {
          .animate-driftStars, 
          .animate-flicker, 
          .animate-fly {
            transform: scale(0.8);
          }
        }
      `}</style>
    </div>
  );
};

export default StarryNight;