import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  const baseStyle = "px-8 py-3 uppercase tracking-widest text-sm font-semibold transition-all duration-300 ease-out";
  
  const variants = {
    primary: "bg-scs-gold text-black hover:bg-white border border-transparent hover:border-white",
    outline: "bg-transparent text-scs-gold border border-scs-gold hover:bg-scs-gold hover:text-black"
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyle} ${variants[variant]} ${className || ''}`}
      {...props}
    >
      {children}
    </motion.button>
  );
};