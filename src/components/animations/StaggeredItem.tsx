import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggeredItemProps {
  children: ReactNode;
  className?: string;
}

const StaggeredItem = ({ children, className = "" }: StaggeredItemProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.25, 0.46, 0.45, 0.94],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggeredItem;
