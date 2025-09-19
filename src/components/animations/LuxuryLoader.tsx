import { motion } from "framer-motion";

const LuxuryLoader = () => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        className="text-center"
      >
        {/* Logo animation */}
        <motion.div
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            rotate: { duration: 2, repeat: Infinity, ease: "linear" },
            scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
          }}
          className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center"
        >
          <span className="text-2xl font-bold text-primary-foreground">K</span>
        </motion.div>
        
        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg font-semibold text-primary"
        >
          Carregando...
        </motion.p>
        
        {/* Progress bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-48 h-1 bg-muted rounded-full mx-auto mt-4 overflow-hidden"
        >
          <motion.div
            className="h-full bg-gradient-primary rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default LuxuryLoader;
