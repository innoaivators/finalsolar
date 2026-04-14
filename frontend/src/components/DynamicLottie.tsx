import React, { useEffect, useState } from 'react';
import Lottie from 'lottie-react';

interface DynamicLottieProps {
  animationUrl: string;
  loop?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * A wrapper for Lottie that fetches the animation JSON dynamically
 * to keep the main bundle size small.
 */
const DynamicLottie: React.FC<DynamicLottieProps> = ({ 
  animationUrl, 
  loop = true, 
  className, 
  style 
}) => {
  const [animationData, setAnimationData] = useState<unknown>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    
    fetch(animationUrl)
      .then(res => {
        if (!res.ok) throw new Error(`Failed to load: ${res.statusText}`);
        return res.json();
      })
      .then(data => {
        if (isMounted) setAnimationData(data);
      })
      .catch(err => {
        console.error("DynamicLottie error:", err);
        if (isMounted) setError(true);
      });

    return () => {
      isMounted = false;
    };
  }, [animationUrl]);

  if (error) {
    return <div className={`flex items-center justify-center text-red-500 ${className}`} style={style}>Error loading animation</div>;
  }

  if (!animationData) {
    return <div className={`flex items-center justify-center ${className}`} style={style}>Loading...</div>;
  }

  return (
    <Lottie
      animationData={animationData}
      loop={loop}
      className={className}
      style={style}
    />
  );
};

export default DynamicLottie;
