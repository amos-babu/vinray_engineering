import { Link } from "react-router-dom";
import videoBg from "../assets/video/video.mp4";
import { motion, Variants } from "motion/react";

const Home = () => {
  const container = (
    delay: number,
    value: number,
    axis: "x" | "y"
  ): Variants => {
    const animation: Variants = {
      hidden: { [axis]: value, opacity: 0 } as any,
      visible: {
        [axis]: 0,
        opacity: 1,
        transition: { duration: 1, delay: delay },
      } as any,
    };
    return animation;
  };

  return (
    <div className="flex flex-col relative h-screen w-full">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div
        id="content"
        className="relative z-10 flex flex-col items-center 
      justify-center h-full text-white text-xl"
      >
        <motion.h1
          variants={container(0.5, -100, "y")}
          initial="hidden"
          animate="visible"
          className="text-center mb-4 text-4xl/20 font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white"
        >
          We <span className="underline decoration-orange-600">engineer</span>{" "}
          the{" "}
          <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
            future’s{" "}
            <span className="underline decoration-white">possibilities</span>
          </span>
        </motion.h1>

        <motion.span
          variants={container(0.5, 100, "y")}
          initial="hidden"
          animate="visible"
          className="mx-3 text-center w-2/3"
        >
          The services we provide are a fusion of our knowledge, skills, and
          expertise, combined with a deep understanding of our customers’ needs
          and requirements.
        </motion.span>

        <div className="flex flex-col lg:flex-row md:flex-row gap-4">
          <Link to={`/contact-us`}>
            <motion.button
              variants={container(0.5, -100, "x")}
              initial="hidden"
              animate="visible"
              className="cursor-pointer px-10 mt-3 py-3 text-sm bg-orange-600 rounded-lg hover:bg-orange-800"
            >
              Contact Us
            </motion.button>
          </Link>

          <Link to={`/about-us`}>
            <motion.button
              variants={container(0.5, 100, "x")}
              initial="hidden"
              animate="visible"
              className="cursor-pointer px-10 mt-3 py-3 text-sm border pointer-cursor hover:text-orange-600 rounded-lg"
            >
              Learn More
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
