import BackgroundImage from "../components/BackgroundImage";

const AboutUs = () => {
  return (
    <>
      <BackgroundImage header="About Us" />
      <div className="flex flex-col lg:mx-4 md:mx-4">
        <p className="text-lg text-center text-neutral-500">
          <span className="font-bold">Vinray Engineering Limited</span> is a
          dynamic and innovative company specializing in the manufacturing and
          supply of high-quality electrical and industrial solutions. With a
          focus on excellence, precision, and customer satisfaction, the company
          offers a comprehensive range of products and services tailored to meet
          the demands of modern infrastructure, industrial, and commercial
          projects.
        </p>
      </div>
      <div className="font-semibold text-xl text-center lg:text-left md:text-left lg:mx-5 md:mx-5 mt-10 mb-20 lg:mb-10">
        Why Choose Vinray Engineering Limited?
      </div>
    </>
  );
};

export default AboutUs;
