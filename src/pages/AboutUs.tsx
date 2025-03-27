import BackgroundImage from "../components/BackgroundImage";
import checkCircle from "../assets/check-circle.svg";
import whyChoose from "../data/whychoose.json";

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
      <div className="font-semibold text-4xl text-center lg:mx-5 md:mx-5 mt-10 ">
        Why Choose Vinray Engineering Limited?
      </div>
      <div className="flex flex-col justify-center lg:justify-start lg:mx-4 mt-10 mb-20 gap-4">
        {whyChoose.map((why) => (
          <div
            key={why.id}
            className="flex flex-col gap-4 justify-center lg:mx-80"
          >
            <div className="flex justify-center gap-4">
              <img className="w-10 h-10" src={checkCircle} alt="Check" />
              <p className="self-center text-xl font-medium">{why.name}</p>
            </div>
            <div className="text-lg text-center self-center text-neutral-500">
              {why.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AboutUs;
