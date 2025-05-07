import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = ({ onLoadingComplete }) => {
  const [currentMessage, setCurrentMessage] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [progress, setProgress] = useState(0);

  const messages = [
    'Sorting your laundry... Please wait 👕🧦',
    'Fresh clothes are on the way...',
    'Neatly folding your experience...'
  ];

  useEffect(() => {
    const totalDuration = 9000; // 3 messages * 3000ms each
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + (100 / (totalDuration / 100));
        if (newProgress >= 100) {
          clearInterval(interval);
          onLoadingComplete();
        }
        return Math.min(newProgress, 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  // Typewriter effect
  useEffect(() => {
    let currentIndex = 0;
    const currentMessageText = messages[currentMessage];
    
    const typeInterval = setInterval(() => {
      if (currentIndex <= currentMessageText.length) {
        setDisplayText(currentMessageText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50); // Speed of typing

    return () => clearInterval(typeInterval);
  }, [currentMessage]);

  // Change message every 3 seconds
  useEffect(() => {
    const messageInterval = setInterval(() => {
      setCurrentMessage(prev => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(messageInterval);
  }, []);

  return (
    <motion.div 
      className="fixed inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="h-12 flex items-center justify-center">
        <motion.p 
          className="text-2xl text-gray-600 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {displayText}
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            className="inline-block w-1 h-6 bg-blue-500 ml-1"
          />
        </motion.p>
      </div>

      <motion.div 
        className="w-64 h-2 bg-gray-200 rounded-full mt-8 overflow-hidden"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default LoadingScreen; 