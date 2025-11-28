import { Link } from "react-router-dom";
import videoBg from "../assets/video/video.mp4";
import { motion, Variants } from "motion/react";
import Navbar from "@/components/Navbar";

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
    <div className="flex flex-col relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-[1]"></div>
      <Navbar />
      <video
        className="absolute top-1/2 left-1/2 min-w-full 
        min-h-full object-cover -translate-x-1/2 
        -translate-y-1/2 z-0"
        src={videoBg}
        aria-label="Background Video"
        autoPlay
        loop
        muted
      />
      <div
        id="content"
        className="relative z-10 flex flex-col items-center 
      justify-center h-full text-white text-xl"
      >
        <motion.h1
          variants={container(0.5, -100, "y")}
          initial="hidden"
          animate="visible"
          className="text-center mt-20 mb-4 text-5xl/20 font-light tracking-normal 
          leading-13 md:leading-14 lg:leading-30 text-white md:text-5xl 
          lg:text-8xl dark:text-white"
        >
          We{" "}
          <span className="underline decoration-orange-600 underline-offset-10">
            engineer
          </span>{" "}
          the{" "}
          <span
            className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text 
          text-transparent"
          >
            future’s{" "}
            <span className="underline decoration-white underline-offset-10">
              possibilities
            </span>
          </span>
        </motion.h1>

        <span className="mx-3 text-center text-xl font-extralight w-2/3">
          The services we provide are a fusion of our knowledge, skills, and
          expertise, combined with a deep understanding of our customers’ needs
          and requirements.
        </span>

        <div className="flex flex-col lg:flex-row md:flex-row">
          {/* <Link to={`/contact-us`}>
            <motion.button
              variants={container(0.5, -100, "x")}
              initial="hidden"
              animate="visible"
              className="cursor-pointer px-10 mt-3 py-3 text-base md:text-lg bg-orange-600 
              rounded-3xl hover:bg-orange-800"
            >
              Contact Us
            </motion.button>
          </Link> */}

          <Link to={`/about-us`}>
            <motion.button
              variants={container(0.5, 100, "x")}
              initial="hidden"
              animate="visible"
              className="cursor-pointer text-orange-600 px-10 mt-3 py-3 text-base md:text-lg border border-orange-600 pointer-cursor 
              hover:text-white rounded-3xl bg-white"
            >
              Discover More
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
