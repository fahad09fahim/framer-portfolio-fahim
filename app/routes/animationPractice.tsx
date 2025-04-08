import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { useState } from "react";

export default function AnimationPractice() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="flex flex-col justify-center  gap-5 items-center">
      <motion.button
        className="border-amber-200 p-4 bg-amber-100 rounded-md text-black cursor-pointer"
        onClick={() => setIsVisible(!isVisible)}
        layout
      >
        Visible{" "}
      </motion.button>
      {isVisible && (
        <AnimatePresence mode="popLayout">
          <motion.div
            initial={{ rotate: "0deg", scale: 0 }}
            animate={{ rotate: "180deg", scale: 1 }}
            exit={{ scale: 0, rotate: "0deg" }}
            transition={{
              duration: 1,
              ease: "easeInOut",
              time: [0, 0.25, 0.5, 1],
            }}
            className="w-[200px] h-[200px] bg-red-500 "
          ></motion.div>
        </AnimatePresence>
      )}

      <MotionConfig
        transition={{
          duration: 0.125,
          ease: "easeInOut",
        }}
      >
        <motion.button
          whileHover={{ scale: 1.2, rotate: "4.5deg" }}
          className="bg-blue-700 p-2 rounded-md "
        >
          Click Me{" "}
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.2, rotate: "-4.5deg" }}
          className="bg-red-500 p-2 rounded-md "
        >
          Click Me{" "}
        </motion.button>
      </MotionConfig>
    </div>
  );
}
