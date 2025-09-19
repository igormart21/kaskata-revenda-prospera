import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggeredChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

const StaggeredChildren = ({ children, staggerDelay = 0.1, className = "" }: StaggeredChildrenProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default StaggeredChildren;
