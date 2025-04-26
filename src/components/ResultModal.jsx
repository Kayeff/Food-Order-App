import { motion } from "motion/react";

export default function ResultModal({ handleClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="w-[40%] p-4 bg-black border border-white/20 rounded-xl flex flex-col gap-6"
    >
      <ModalHeader handleClose={handleClose}>Success!</ModalHeader>
      <div className="flex flex-col items-end">
        <h1 className="tracking-tighter flex gap-2 text-lg font-medium">
          Order Submitted
        </h1>
      </div>
    </motion.div>
  );
}
