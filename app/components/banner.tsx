import {
  AnimatePresence,
  easeInOut,
  motion,
  spring,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
export default function Banner() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  return (
    <div ref={ref} className="w-full h-screen overflow-hidden relative  pb-6 ">
      <AnimatePresence mode="sync">
        <motion.div
          initial={{ scale: 1.03, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "linear",
          }}
          animate={{ scale: 1, y: -15 }}
          className=" w-full min-h-[88vh]  bg-[url('https://i.ibb.co/fmyqfZr/aigenbg.png')] bg-center bg-no-repeat absolute inset-0 "
          style={{
            y: backgroundY,
          }}
        ></motion.div>
      </AnimatePresence>
      <div>
        <motion.div
          style={{ y: textY }}
          className="absolute flex justify-between items-center w-full bottom-20   z-10 m-0 p-0"
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="text-7xl font-gloock "
          >
            Md Fahad Al <br /> Fahim
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.7,
            }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl pr-[1.5rem]"
          >
            A professional Web Developer.
          </motion.h1>
        </motion.div>
      </div>
    </div>
  );
}
