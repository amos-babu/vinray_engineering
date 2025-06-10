import BackgroundImage from "../components/BackgroundImage";
import checkCircle from "../assets/icons/check-circle.svg";
import bloquote from "../assets/icons/bloquote.svg";
import whyChooseUs from "../data/whychooseUs.json";
import indServed from "../data//indServed.json";
import check from "../assets/icons/check.svg";
import aboutUsImage from "../assets/images/image-2.jpg";
import bgImage from "../assets/images/image-8.jpg";
import { motion, Variants } from "motion/react";

const AboutUs = () => {
  const iconVariants = (duration: number, axis: "x" | "y"): Variants => {
    const animation: Variants = {
      initial: { [axis]: -20 },
      animate: {
        [axis]: [10, -10],
        transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse" as "reverse",
        },
      } as any,
    };
    return animation;
  };
  return (
    <>
      <BackgroundImage header="About Us" bgImage={bgImage} />
      <div className="flex flex-col lg:flex-row justify-center items-center
       lg:items-start gap-2 lg:mx-4 md:mx-4">
        <div className="mx-1 md:mx-20 lg:w-1/2">
          <motion.p
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 1.5 }}
            className="text-xl text-center text-neutral-500"
          >
            <span className="font-bold text-2xl">
              Vinray Engineering Limited
            </span>{" "}
            is a dynamic and innovative company specializing in the
            manufacturing and supply of high-quality electrical and industrial
            solutions. With a focus on excellence, precision, and customer
            satisfaction, the company offers a comprehensive range of products
            and services tailored to meet the demands of modern infrastructure,
            industrial, and commercial projects.
          </motion.p>
        </div>
        <div className="w-full lg:mx-20 h-150 lg:w-1/2 lg:h-100">
          <motion.img
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}
            className="h-full w-full rounded-lg  hover:opacity-60 cursor-pointer"
            src={aboutUsImage}
            alt="Products"
          />
        </div>
      </div>
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="font-semibold text-2xl lg:text-4xl text-center lg:mx-5 md:mx-5 mt-10 "
      >
        Why Choose Vinray Engineering Limited?
      </motion.div>
      <div className="flex flex-col lg:flex-row md:flex-row flex-wrap gap-8 mt-10 items-center justify-center mx-auto w-full max-w-8xl">
        {whyChooseUs.map((why) => (
          <div
            key={why.id}
            className="block max-w-md p-6 cursor-pointer bg-white border
             border-gray-200 rounded-lg shadow-lg 
             hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700
              dark:hover:bg-gray-700"
          >
            <div className="flex justify-start gap-4">
              <img className="w-10 h-10" src={checkCircle} alt="Check" />
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {why.name}
              </h5>
            </div>
            <p className="font-normal text-gray-700 dark:text-gray-400 mt-5">
              {why.description}
            </p>
          </div>
        ))}
      </div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="font-semibold text-2xl text-center lg:mx-5 md:mx-5 mt-10 "
      >
        Industries Served
      </motion.div>
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-start items-start gap-10 mt-5 px-4 md:w-3/4 lg:w-1/2">
          {indServed.map((ind) => (
            <div
              key={ind.id}
              className="flex items-center justify-center gap-4"
            >
              <img className="w-7 h-7" src={check} alt="check" />
              <p className="text-start text-neutral-500 text-lg">
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 mx-6 lg:mx-30 mb-20">
        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
          <img
            className="w-10 h-10"
            src={bloquote}
            alt="Bloquote"
          />
          <p>
            "With a solid reputation for delivering superior products and
            services, Vinray Engineering Limited is a trusted partner for
            projects requiring precision, reliability, and cutting-edge
            electrical and industrial solutions."
          </p>
        </blockquote>
      </div>
    </>
  );
};

export default AboutUs;
