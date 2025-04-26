import { AnimatePresence, motion } from "motion/react";
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
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={twMerge(
            "p-4 bg-black border border-white/20 rounded-xl flex flex-col gap-6 relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
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
