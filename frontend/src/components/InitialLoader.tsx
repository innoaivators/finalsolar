import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '@/assets/animations/Loading Animation Looped.json';
import logo from '@/assets/footer_logo.png';

const InitialLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadingOut(true);
      setTimeout(onComplete, 500); // Wait for fade out animation
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-navy transition-opacity duration-500 ${
        fadingOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="relative flex items-center justify-center w-64 h-64">
        {/* Lottie Animation */}
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          className="absolute inset-0 w-full h-full"
        />
        
        {/* Logo in the middle */}
        <div className="absolute w-20 h-20 rounded-full overflow-hidden bg-white z-10 flex items-center justify-center p-3 shadow-lg">
          <img
            src={logo}
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default InitialLoader;
