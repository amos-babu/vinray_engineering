import { motion } from "motion/react";
import Navbar from "./Navbar";

type BackgroundImageProps = {
  header: string;
  bgImage: string;
};

const BackgroundImage = ({ header, bgImage }: BackgroundImageProps) => {
  const container = () => ({
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  });
  return (
    <div className="mb-10">
      <div className="flex flex-col relative h-50 lg:h-100 w-full items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center 
            before:absolute before:inset-0 before:bg-black/50"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <Navbar/>
        </div>

        <div
          className="relative z-10 flex flex-col items-center 
      justify-center h-full text-white text-xl"
        >
          <motion.h1
            variants={container()}
            initial="hidden"
            animate="visible"
            className="text-4xl sm:text-6xl lg:text-7xl text-center font-bold 
          bg-gradient-to-r from-orange-700 to-orange-600 bg-clip-text 
          text-transparent break-all"
          >
            {header}
          </motion.h1>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
