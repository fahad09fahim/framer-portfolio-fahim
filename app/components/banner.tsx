import { AnimatePresence, easeInOut, motion, spring } from "framer-motion";
export default function Banner() {
  return (
    <div className="relative  pb-6 ">
      <AnimatePresence mode="sync">
        <motion.div
          initial={{ scale: 1.03, y: 0 }}
          transition={{
            duration: 0.5,
            ease: "linear",
          }}
          animate={{ scale: 1, y: -15 }}
          className=" w-full h-[88vh]  bg-[url('https://i.ibb.co/wFR4DD18/Whats-App-Image-2025-04-06-at-4-03-02-PM.jpg')]  bg-cover  bg-center bg-no-repeat "
        ></motion.div>
      </AnimatePresence>
      <div className="">
        <div className="absolute flex justify-between items-center w-full bottom-20   z-10 m-0 p-0">
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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.7,
            }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl pr-[1.5rem]"
          >
            A professional Web Developer.
          </motion.p>
        </div>
      </div>
    </div>
  );
}
