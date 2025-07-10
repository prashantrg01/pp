import React, { useEffect, useRef, useState } from 'react';

const InteractiveRobotAnimation = () => {
  const [robotPosition, setRobotPosition] = useState({ x: 20, y: 40 });
  const [headRotation, setHeadRotation] = useState(0);
  const [eyeDirection, setEyeDirection] = useState({ left: 0, right: 0 });
  const [armPosition, setArmPosition] = useState({ left: 0, right: 0 });
  const [scanActive, setScanActive] = useState(false);
  const [scanPosition, setScanPosition] = useState(0);
  
  const robotRef = useRef(null);
  const scanRef = useRef(null);
  
  // Move robot randomly
  useEffect(() => {
    const moveRobot = () => {
      setRobotPosition(prev => {
        const newX = Math.max(5, Math.min(95, prev.x + (Math.random() * 20 - 10)));
        const newY = Math.max(20, Math.min(70, prev.y + (Math.random() * 10 - 5)));
        return { x: newX, y: newY };
      });
    };
    
    const interval = setInterval(moveRobot, 3000);
    return () => clearInterval(interval);
  }, []);
  
  // Move robot head
  useEffect(() => {
    const rotateHead = () => {
      setHeadRotation(Math.random() * 40 - 20);
    };
    
    const interval = setInterval(rotateHead, 2000);
    return () => clearInterval(interval);
  }, []);
  
  // Move robot eyes
  useEffect(() => {
    const moveEyes = () => {
      const offset = Math.random() * 5 - 2.5;
      setEyeDirection({
        left: Math.max(-5, Math.min(5, eyeDirection.left + offset)),
        right: Math.max(-5, Math.min(5, eyeDirection.right + offset)),
      });
    };
    
    const interval = setInterval(moveEyes, 1000);
    return () => clearInterval(interval);
  }, [eyeDirection]);
  
  // Move robot arms
  useEffect(() => {
    const moveArms = () => {
      setArmPosition({
        left: Math.random() * 40 - 20,
        right: Math.random() * 40 - 20,
      });
    };
    
    const interval = setInterval(moveArms, 1500);
    return () => clearInterval(interval);
  }, []);
  
  // Scanning effect
  useEffect(() => {
    if (!scanActive) return;
    
    let scanAnimation;
    const startScan = () => {
      let pos = 0;
      scanAnimation = setInterval(() => {
        pos = (pos + 2) % 360;
        setScanPosition(pos);
      }, 20);
    };
    
    startScan();
    
    return () => {
      if (scanAnimation) clearInterval(scanAnimation);
    };
  }, [scanActive]);
  
  const handleScanClick = () => {
    setScanActive(!scanActive);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-black overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `linear-gradient(rgba(0, 195, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 195, 255, 0.2) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}></div>
        
        {/* Floating data nodes */}
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-blue-400 animate-pulse"
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              boxShadow: '0 0 15px rgba(0, 195, 255, 0.8)',
              animationDuration: `${Math.random() * 3 + 2}s`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Circuit lines */}
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-900/70 to-transparent">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,10 Q30,15 60,10 T100,10' fill='none' stroke='%2300c3ff' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`,
            backgroundSize: '100px 20px'
          }}></div>
        </div>
      </div>
      
      {/* Scanning effect */}
      {scanActive && (
        <div 
          ref={scanRef}
          className="absolute w-64 h-64 rounded-full border-2 border-blue-400/50"
          style={{
            top: `${robotPosition.y - 20}%`,
            left: `${robotPosition.x - 25}%`,
            clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos(scanPosition * Math.PI / 180)}% ${50 + 50 * Math.sin(scanPosition * Math.PI / 180)}%)`,
            background: 'radial-gradient(circle, rgba(0,195,255,0.1) 0%, transparent 70%)',
          }}
        />
      )}
      
      {/* Robot */}
      <div 
        ref={robotRef}
        className="absolute z-10 transition-all duration-1000"
        style={{
          top: `${robotPosition.y}%`,
          left: `${robotPosition.x}%`,
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className="relative">
          {/* Robot head */}
          <div 
            className="relative w-16 h-16 bg-gray-800 rounded-full border-2 border-blue-500 transition-transform duration-500"
            style={{
              transform: `rotate(${headRotation}deg)`,
            }}
          >
            {/* Eyes */}
            <div 
              className="absolute top-1/3 left-1/4 w-3 h-3 bg-blue-400 rounded-full transition-all duration-300"
              style={{
                transform: `translate(${eyeDirection.left}px, 0)`,
                boxShadow: '0 0 10px rgba(0, 195, 255, 0.8)'
              }}
            />
            <div 
              className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full transition-all duration-300"
              style={{
                transform: `translate(${eyeDirection.right}px, 0)`,
                boxShadow: '0 0 10px rgba(0, 195, 255, 0.8)'
              }}
            />
            
            {/* Antenna */}
            <div className="absolute top-0 left-1/2 w-1 h-6 bg-blue-500 rounded-t-full transform -translate-x-1/2">
              <div className="absolute top-0 left-1/2 w-3 h-3 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
            </div>
          </div>
          
          {/* Robot body */}
          <div className="relative w-20 h-24 bg-gray-800 rounded-lg border-2 border-blue-500 -mt-4 mx-auto">
            {/* Chest panel */}
            <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-12 h-8 bg-blue-900/50 rounded flex justify-center items-center">
              <div className="w-1 h-1 bg-blue-400 rounded-full mx-0.5 animate-pulse"></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full mx-0.5 animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-1 h-1 bg-blue-400 rounded-full mx-0.5 animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
            
            {/* Arms */}
            <div 
              className="absolute top-4 -left-3 w-3 h-16 bg-gray-700 origin-top transition-transform duration-500"
              style={{ transform: `rotate(${armPosition.left}deg)` }}
            />
            <div 
              className="absolute top-4 -right-3 w-3 h-16 bg-gray-700 origin-top transition-transform duration-500"
              style={{ transform: `rotate(${-armPosition.right}deg)` }}
            />
            
            {/* Legs */}
            <div className="absolute bottom-0 left-3 w-4 h-10 bg-gray-700 rounded-b-lg"></div>
            <div className="absolute bottom-0 right-3 w-4 h-10 bg-gray-700 rounded-b-lg"></div>
          </div>
        </div>
      </div>
      
      {/* Control panel */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 border border-blue-500/30 shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold text-blue-400 mb-4 text-center">Robot Control Panel</h2>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button 
            onClick={handleScanClick}
            className={`px-6 py-3 rounded-lg font-medium transition-all ${
              scanActive 
                ? 'bg-red-500 hover:bg-red-600' 
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {scanActive ? 'Stop Scan' : 'Start Scan'}
          </button>
          
          <button 
            onClick={() => {
              setRobotPosition({
                x: Math.random() * 80 + 10,
                y: Math.random() * 50 + 20
              });
            }}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-medium transition-all"
          >
            Teleport Robot
          </button>
        </div>
        
        <div className="mt-6 grid grid-cols-2 gap-4">
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h3 className="text-blue-400 text-sm mb-2">Position</h3>
            <p className="text-sm">X: {Math.round(robotPosition.x)}%</p>
            <p className="text-sm">Y: {Math.round(robotPosition.y)}%</p>
          </div>
          
          <div className="bg-gray-900/50 p-4 rounded-lg">
            <h3 className="text-blue-400 text-sm mb-2">Status</h3>
            <p className="text-sm">
              {scanActive ? 'Scanning...' : 'Idle'}
            </p>
          </div>
        </div>
      </div>
      
      {/* Title */}
      <div className="absolute top-8 left-0 right-0 text-center">
        <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
          Interactive Robot
        </h1>
        <p className="text-blue-300 mt-2 max-w-md mx-auto">
          Watch the robot explore its environment, scanning and interacting randomly
        </p>
      </div>
      
      {/* Floating info cards */}
      <div className="absolute top-1/4 right-8 bg-gray-800/70 backdrop-blur-sm p-4 rounded-xl border border-blue-500/30 w-64">
        <h3 className="text-blue-400 font-bold mb-2">Robot Features</h3>
        <ul className="text-sm space-y-1">
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>Random movement patterns</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>360° scanning capability</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>Independent eye movement</span>
          </li>
          <li className="flex items-start">
            <span className="text-blue-400 mr-2">•</span>
            <span>Articulated arms</span>
          </li>
        </ul>
      </div>
      
      <div className="absolute top-1/3 left-8 bg-gray-800/70 backdrop-blur-sm p-4 rounded-xl border border-blue-500/30 w-64">
        <h3 className="text-blue-400 font-bold mb-2">Interaction</h3>
        <p className="text-sm">
          Use the control panel to teleport the robot or activate its scanning beam.
          The robot will autonomously move and observe its surroundings.
        </p>
      </div>
    </div>
  );
};

export default InteractiveRobotAnimation;