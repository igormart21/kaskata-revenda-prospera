import { motion } from "framer-motion";

interface FloatingOrbsProps {
  count?: number;
  className?: string;
}

const FloatingOrbs = ({ count = 3, className = "" }: FloatingOrbsProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {Array.from({ length: count }).map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full bg-gradient-to-br from-yellow-400/10 to-purple-400/10 blur-3xl"
          style={{
            width: `${Math.random() * 200 + 150}px`, // 150-350px
            height: `${Math.random() * 200 + 150}px`, // 150-350px
            left: `${Math.random() * 80 + 10}%`, // 10-90%
            top: `${Math.random() * 80 + 10}%`, // 10-90%
            willChange: 'transform',
          }}
          initial={{ 
            opacity: 0,
            scale: 0.5,
          }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [0.8, 1.2, 0.8],
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 6, // 6-14 segundos
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingOrbs;
