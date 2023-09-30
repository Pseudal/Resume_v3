import React, { useState, useEffect } from 'react';

const ProgressBar = ({ number }) => {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressBarRef = React.useRef(null);

  const handleIntersection = (entries) => {
    const isIntersecting = entries[0].isIntersecting;
    setIsVisible(isIntersecting);
  };

  React.useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: [0],
    });
    observer.observe(progressBarRef.current);
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setPercent((prevPercent) => {
        if (prevPercent >= number) {
          clearInterval(interval);
          return number;
        }
        return prevPercent + 1;
      });
    }, 40);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="flex">
      <div className="relative grow h-5 rounded-md" ref={progressBarRef}>
        <div className="absolute inset-0 h-5 bg-gray-500 rounded-md">
          <div
            className="h-5 bg-blue-500 rounded-md transition-width duration-200 ease-out"
            style={{ width: `${percent}%` }}
          >
            <div className="text-center text-white text-sm">{percent}%</div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="text-blue-500 text-sm">
          <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11.3 1.2C6 1.2 2.4 5 2.4 10c0 2.8 1.6 5.2 4 6.6V20l4-2.2 4 2.2v-3.9c2.4-1.4 4-3.8 4-6.6 0-5-3.6-8.8-8.7-8.8z"></path>
          </svg>
          <span className="ml-2 text-sm">Label</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;