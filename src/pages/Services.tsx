import BackgroundImage from "../components/BackgroundImage";
import check from "../assets/icons/check.svg";
import sparkles from "../assets/icons/sparkles.svg";
import services from "../utils/services.ts";
import bgImage from "../assets/images/image-14.jpg";

const Services = () => {
  return (
    <>
      <BackgroundImage header="Services" bgImage={bgImage} />
      <div className="flex flex-col justify-center items-start mt-10 lg:mt-20 gap-10 lg:gap-30 mx-5 mb-20">
        {services.map((service) => (
          <div key={service.id} className={service.serviceStyles}>
            <div className="lg:w-1/2 mx-4">
              <div className="flex justify-center items-center gap-4">
                <img className="w-6 h-6" src={sparkles} alt="sparkles" />
                <h1 className="text-2xl lg:text-3xl font-bold text-center lg:text-start">
                  {service.title}
                </h1>
              </div>
              <ul className="mt-10 ">
                {service.services.map((service) => (
                  <li
                    key={service.id}
                    className="flex gap-4 mt-6 justify-start"
                  >
                    <img className="w-7 h-7" src={check} alt="check" />
                    <p className="text-start text-neutral-500 text-lg">
                      {service.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/2 mt-10 lg:mt-0">
              <img className="rounded-xl" src={service.image} alt="service" />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Services;
