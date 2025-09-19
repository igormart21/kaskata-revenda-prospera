import { motion } from "framer-motion";

interface AnimatedGradientProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedGradient = ({ children, className = "" }: AnimatedGradientProps) => {
  return (
    <motion.div
      className={`relative overflow-hidden ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "linear-gradient(45deg, hsl(18 100% 50%), hsl(220 90% 56%))",
            "linear-gradient(135deg, hsl(220 90% 56%), hsl(45 100% 70%))",
            "linear-gradient(225deg, hsl(45 100% 70%), hsl(18 100% 50%))",
            "linear-gradient(315deg, hsl(18 100% 50%), hsl(220 90% 56%))",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default AnimatedGradient;
