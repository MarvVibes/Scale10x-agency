import { motion, useMotionValue, useSpring } from "motion/react";
import React, { useRef, useState, useEffect } from "react";
import { cn } from "../../lib/utils";

type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  variant?: "primary" | "secondary" | "ghost";
};

export const MagneticButton = React.forwardRef<HTMLButtonElement, MagneticButtonProps>(
  ({ children, className, glow = false, variant = "primary", ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    // Mouse position relative to center of button
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring config for "premium" feel
    // Low stiffness and moderate damping for a cinematic, restrained movement
    const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
    
    const springX = useSpring(x, springConfig);
    const springY = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return;
      
      const rect = buttonRef.current.getBoundingClientRect();
      
      // Calculate cursor position relative to button center
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      
      // Calculate distance from center
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      
      // Set values with a multiplier (magnetic strength) - kept very subtle (0.15)
      x.set(distanceX * 0.15);
      y.set(distanceY * 0.15);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      x.set(0);
      y.set(0);
    };

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    // Determine variant classes
    const baseClasses = "relative inline-flex flex-row items-center justify-center font-bold transition-colors cursor-pointer outline-none group";
    
    let variantClasses = "";
    if (variant === "primary") {
      variantClasses = "bg-zinc-800 text-white rounded-lg border border-white/5";
    } else if (variant === "secondary") {
      variantClasses = "bg-transparent text-white border border-white/20 rounded-lg hover:bg-white hover:text-black hover:border-white";
    } else if (variant === "ghost") {
      variantClasses = "bg-transparent text-white hover:bg-white/5 rounded-lg";
    }

    return (
      <motion.button
        ref={buttonRef}
        className={cn(baseClasses, variantClasses, className)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
        style={{
          x: springX,
          y: springY,
        }}
        // Premium hover and pressure feedback
        whileHover={{ 
          scale: 1.02,
          boxShadow: variant === "primary" ? "0 8px 30px rgba(0,0,0,0.4), 0 0 20px rgba(255,255,255,0.1)" : "none",
          transition: { type: "tween", ease: "easeOut", duration: 0.3 }
        }}
        whileTap={{ 
          scale: 0.96,
          boxShadow: variant === "primary" ? "0 2px 10px rgba(0,0,0,0.5)" : "none",
          transition: { type: "spring", stiffness: 400, damping: 25 }
        }}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-2">
          {children}
        </span>
        
        {/* Subtle glow layer behind the button content, visible mainly on hover */}
        {glow && variant === "primary" && (
          <motion.div
            className="absolute inset-0 z-0 bg-white opacity-0 rounded-lg pointer-events-none mix-blend-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 0.08 : 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          />
        )}
      </motion.button>
    );
  }
);

MagneticButton.displayName = "MagneticButton";
