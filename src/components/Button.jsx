import { twMerge } from "tailwind-merge";
import { motion } from "motion/react";

export default function Button({ children, className, ...props }) {
  return (
    <motion.button
      {...props}
      whileTap={{ scale: 1.1 }}
      className={twMerge(
        "p-3 rounded-md text-sm tracking-tighter font-medium duration-100 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer",
        className
      )}
    >
      {children}
    </motion.button>
  );
}
