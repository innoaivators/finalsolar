import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';
import loadingAnimation from '@/assets/animations/Loading Animation Looped.json';
import logo from '@/assets/footer_logo.png';

const InitialLoader = ({ onComplete }: { onComplete: () => void }) => {
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const finishLoading = () => {
      // Small delay for smooth UX after everything is loaded
      setTimeout(() => {
        setFadingOut(true);
        setTimeout(onComplete, 500); // Wait for fade out animation
      }, 300);
    };

    if (document.readyState === 'complete') {
      finishLoading();
    } else {
      window.addEventListener('load', finishLoading);
      // Fallback in case load takes too long (10 seconds max)
      const fallbackTimer = setTimeout(finishLoading, 10000);
      
      return () => {
        window.removeEventListener('load', finishLoading);
        clearTimeout(fallbackTimer);
      };
    }
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
