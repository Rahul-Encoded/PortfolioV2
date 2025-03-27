"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Spinner from "./Spinner/Spinner";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Increased to match spinner duration

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 -z-10 bg-black overflow-hidden"
          >
            <motion.div
              className="absolute"
              style={{ 
                right: '-535px', 
                bottom: '-840px' 
              }}
              initial={{ rotate: 45 }}
              animate={{ rotate: -315 }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            >
              <Spinner
                text="LOADING SOON LOADING SOON LOADING SOON LOADING"
                radius={800}
                fontSize="180px"
                letterSpacing={8}
              />
            </motion.div>
            <motion.div
              className="absolute"
              style={{ 
                right: '-385px', 
                bottom: '-695px' 
              }}
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            >
              <Spinner
                text="LOADING SOON LOADING SOON LOADING"
                radius={650}
                fontSize="180px"
                letterSpacing={10}
              />
            </motion.div>
            <motion.div
              className="absolute"
              style={{ 
                right: '-200px', 
                bottom: '-510px' 
              }}
              initial={{ rotate: -5 }}
              animate={{ rotate: -365 }}
              transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
            >
              <Spinner
                text="LOADING SOON LOADING"
                radius={480}
                fontSize="180px"
                letterSpacing={15}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!isLoading && children}
    </>
  );
}