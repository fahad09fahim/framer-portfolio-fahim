import { Link } from "react-router";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function NavBar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });
  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      transition={{
        duration: 0.35,
        ease: "easeInOut",
      }}
      animate={hidden ? "hidden" : "visible"}
      className="sticky top-0 w-full z-40 "
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        transition={{
          type: "spring",
          stiffness: 40,
          delay: 0.5,
          ease: "linear",
        }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mx-auto p-[1.5rem] bg-transparent "
      >
        <div>
          <Link to="/">Fahim</Link>
        </div>
        <div className="flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/project">Project</Link>
          <Link to="/award">Award</Link>
          <Link to="/animationPractice">Animation</Link>
        </div>
        <div>
          <button className="btn rounded-4xl bg-lime-500 bg-opacity-80 text-black px-4 py-2 ">
            Contact Me
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
