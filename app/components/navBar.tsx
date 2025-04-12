import { Link } from "react-router";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { div } from "motion/react-client";

export default function NavBar() {
  const handleHomeClick = () => {
    window.location.href = "/";
  };
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
          duration: 0.7,
          ease: "linear",
        }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mx-auto p-[1.5rem] bg-transparent "
      >
        <div>
          <Link
            onClick={handleHomeClick}
            to="/"
            className="text-3xl  font-gloock"
          >
            Fahim
          </Link>
        </div>
        <div className="flex gap-4 cursor-pointer">
          <FlipLinks onClick={handleHomeClick} to="/">
            Home
          </FlipLinks>
          <FlipLinks to="/project">Project</FlipLinks>
          <FlipLinks to="/award">Award</FlipLinks>
          <FlipLinks to="/animationPractice">Animation</FlipLinks>
        </div>
        <div>
          <button className="btn rounded-4xl bg-lime-500 bg-opacity-80 text-black px-4 py-2 ">
            <FlipLinks>Contact Me</FlipLinks>
          </button>
        </div>
      </motion.div>
    </motion.nav>
  );
}

type FlipLinksProps = {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  className?: string;
};

const FlipLinks = ({ children, to, onClick, className }: FlipLinksProps) => {
  return (
    <motion.div
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap "
    >
      <Link to={to} onClick={onClick} className={className}>
        <motion.div
          variants={{
            initial: { y: 0 },
            hovered: {
              y: "-100%",
            },
          }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {children}
        </motion.div>
        <motion.div
          className="absolute inset-0"
          variants={{
            initial: { y: "100%" },
            hovered: {
              y: 0,
            },
          }}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          {children}
        </motion.div>
      </Link>
    </motion.div>
  );
};
