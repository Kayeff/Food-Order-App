import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import ModalHeader from "./ModalHeader";

export default function ProgressModal({
  className,
  header,
  handleClose,
  children,
  show,
}) {
  return (
    <>
      {show && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className={twMerge(
            "p-4 bg-black border border-white/20 rounded-xl flex flex-col gap-6",
            className
          )}
        >
          <ModalHeader handleClose={handleClose}>{header}</ModalHeader>
          {children}
        </motion.div>
      )}
    </>
  );
}
