import { useScroll } from "motion/react";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Project() {
  const datas = [
    {
      title: "The Oracle",
      img: "https://i.ibb.co/dwNRBkw3/oracle-61f6f63e.png",
      liveSite: "https://the-oracle-01.netlify.app/",
      subTitle: "AI-Powered Landing Page",
    },
    {
      title: "Crypto Chain",
      img: "https://i.ibb.co/bjCY4jdn/crypto-014661f3.png",
      liveSite: "https://crypto-chain-01.netlify.app/",
      subTitle: "NFT Landing page",
    },
    {
      title: "Skyline",
      img: "https://i.ibb.co/XfCf5L54/skyline-ea02d66c.png",
      liveSite: "https://skyline-009.netlify.app/",
      subTitle: "Real Estate Landing Page",
    },
    {
      title: "Fashion Fusion",
      img: "https://i.ibb.co/vx9vTc3d/fashion-f2c9c06a.png",
      liveSite: "https://fashion-fusion-00.netlify.app/",
      subTitle: "E-commerce Landing page",
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  return (
    <div ref={ref} className="mt-5">
      {datas.map((data, index) => (
        <motion.div
          className="h-[30rem] w-full flex justify-center items-center rounded-3xl bg-center bg-cover sticky top-10"
          style={{
            backgroundImage: `url(${data.img})`,
            opacity: scrollYProgress,
          }}
        >
          <div className="bg-black/35 w-full h-full flex justify-center items-center rounded-3xl relative top-[-10%   ] ">
            <h1 className="text-white text-9xl font-bold">{data.title}</h1>
            <div className="absolute top-5 left-0 flex  justify-between items-center w-full px-8 ">
              <h1 className="text-base  border border-white rounded-xl p-1 uppercase">
                {data.subTitle}
              </h1>
              <a
                href={data.liveSite}
                target="_blank"
                className="text-base uppercase p-1 border-[1px] rounded-xl hover:bg-sky-700 duration-700"
              >
                Live Site
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
