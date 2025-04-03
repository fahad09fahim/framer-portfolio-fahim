import { easeInOut, motion, spring } from "framer-motion";
export default function Banner() {
  return (
    <div className="relative w-full h-[80vh] ">
      <motion.div
        initial={{ opacity: 0, scale: 1.02, y: 20 }}
        transition={{
          duration: 1,
          delay: 0.9,
          ease: ["linear"],
        }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className=" w-full h-[80vh] bg-[url('https://i.ibb.co/mCTY2sx2/fabg.jpg')] bg-cover  bg-center bg-no-repeat"
      ></motion.div>
      <div className="absolute w-full bottom-0 ">
        <div className="flex justify-between items-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              ease: ["linear"],
            }}
            animate={{ opacity: 1, y: 0 }}
            className="text-7xl font-bold "
          >
            Md Fahad Al <br /> Fahim
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            transition={{
              duration: 0.9,
              delay: 0.5,
              ease: ["linear"],
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
