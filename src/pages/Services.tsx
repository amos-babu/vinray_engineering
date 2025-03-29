import BackgroundImage from "../components/BackgroundImage";
import check from "../assets/check.svg";

const Services = () => {
  return (
    <>
      <BackgroundImage header="Services" />
      <div className="flex flex-col justify-center items-start mt-10 lg:mt-20 gap-10 lg:gap-30 mx-5 mb-20">
        <div className="flex flex-col gap-10 lg:flex-row-reverse justify-center items-center lg:items-start">
          <div className="lg:w-1/2 mx-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-center lg:text-start">
              Laser Machining and Designs
            </h1>
            <ul className="mt-10 ">
              <li className="flex gap-4 justify-start">
                <img className="w-7 h-7" src={check} alt="check" />
                <p className="text-start text-neutral-500 text-lg">
                  Precision laser cutting and engraving services for metals and
                  non-metals.
                </p>
              </li>
              <li className="flex gap-4 justify-start mt-5">
                <img className="w-7 h-7" src={check} alt="check" />
                <p className="text-start text-neutral-500 text-lg">
                  Capability to create intricate designs, prototypes, and custom
                  components with high accuracy.
                </p>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              className="rounded-xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt="service"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-start">
          <div className="lg:w-1/2 mx-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-center lg:text-start mt-10  lg:mt-0">
              Powder Coating
            </h1>
            <ul className="mt-10 ">
              <li className="flex gap-4 justify-start">
                <img className="w-7 h-7" src={check} alt="check" />
                <p className="text-start text-neutral-500 text-lg">
                  In-house powder coating services that provide durable and
                  aesthetically pleasing finishes for metal components.
                </p>
              </li>
              <li className="flex gap-4 justify-start mt-5">
                <img className="w-7 h-7" src={check} alt="check" />
                <p className="text-start text-neutral-500 text-lg">
                  A wide range of colors and textures to suit customer
                  specifications.
                </p>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <img
              className="rounded-xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt="service"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-10 justify-center items-center lg:items-start">
          <div className="lg:w-1/2 mx-4">
            <h1 className="text-2xl lg:text-3xl font-bold text-center lg:text-start mt-10 lg:mt-0">
              Electrical Design and Consultation
            </h1>
            <ul className="mt-10">
              <li className="flex gap-4 justify-start">
                <img className="w-7 h-7" src={check} alt="check" />
                <p className="text-start text-neutral-500 text-lg">
                  Expertise in designing electrical systems for residential,
                  commercial, and industrial projects.
                </p>
              </li>
              <li className="flex gap-4 justify-start mt-5">
                <img className="w-7 h-7" src={check} alt="check" />
                <p className="text-start text-neutral-500 text-lg">
                  Load analysis and power distribution planning.
                </p>
              </li>
              <li className="flex gap-4 justify-start mt-5">
                <img className="w-7 h-7" src={check} alt="check" />
                <p className="text-start text-neutral-500 text-lg">
                  Energy-efficient solutions and renewable energy integrations.
                </p>
              </li>
              <li className="flex gap-4 justify-start mt-5">
                <img className="w-7 h-7" src={check} alt="check" />
                <p className="text-start text-neutral-500 text-lg">
                  Compliance with safety standards and regulations.
                </p>
              </li>
              <li className="flex gap-4 justify-start mt-5">
                <img className="w-7 h-7" src={check} alt="check" />
                <p className="text-start text-neutral-500 text-lg">
                  End-to-end consultation, from initial concept to
                  implementation and post-installation support.
                </p>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 mt-10  lg:mt-0">
            <img
              className="rounded-xl"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
              alt="service"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
