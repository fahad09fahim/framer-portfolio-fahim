import { Link } from "react-router";
import { motion } from "framer-motion";

export default function NavBar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      transition={{
        type: "spring",
        stiffness: 40,
        delay: 0.5,
        ease: "linear",
      }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="flex justify-between items-center mx-auto p-[1.5rem]">
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
      </div>
    </motion.nav>
  );
}
