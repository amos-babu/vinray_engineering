import BackgroundImage from "../components/BackgroundImage";
import checkCircle from "../assets/check-circle.svg";
import bloquote from "../assets/bloquote.svg";
import whyChooseUs from "../data/whychooseUs.json";

const AboutUs = () => {
  return (
    <>
      <BackgroundImage header="About Us" />
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:mx-4 md:mx-4">
        <div className="mx-1 md:mx-20 lg:w-1/2">
          <p className="text-lg text-center text-neutral-500">
            <span className="font-bold">Vinray Engineering Limited</span> is a
            dynamic and innovative company specializing in the manufacturing and
            supply of high-quality electrical and industrial solutions. With a
            focus on excellence, precision, and customer satisfaction, the
            company offers a comprehensive range of products and services
            tailored to meet the demands of modern infrastructure, industrial,
            and commercial projects.
          </p>
        </div>
        <div className="mx-1">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
            alt="Products"
          />
        </div>
      </div>
      <div className="font-semibold text-2xl lg:text-4xl text-center lg:mx-5 md:mx-5 mt-10 ">
        Why Choose Vinray Engineering Limited?
      </div>
      <div className="flex flex-col lg:flex-row md:flex-row flex-wrap gap-8 mt-10 items-center justify-center mx-auto w-full max-w-4xl">
        {whyChooseUs.map((why) => (
          <div
            key={why.id}
            className="block max-w-sm p-6 cursor-pointer bg-white border
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

      <div className="font-semibold text-4xl text-center lg:mx-5 md:mx-5 mt-10 ">
        Industries Served
      </div>

      <div className="mt-10 mx-6 lg:mx-30 mb-20">
        <blockquote className="text-xl italic font-semibold text-gray-900 dark:text-white">
          <img className="w-15 h-15" src={bloquote} alt="Bloquote" />
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
