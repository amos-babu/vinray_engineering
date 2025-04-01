import BackgroundImage from "../components/BackgroundImage";
import check from "../assets/check.svg";
import services from "../data/services.json";

const Services = () => {
  return (
    <>
      <BackgroundImage header="Services" />
      <div className="flex flex-col justify-center items-start mt-10 lg:mt-20 gap-10 lg:gap-30 mx-5 mb-20">
        {services.map((service) => (
          <div key={service.id} className={service.serviceStyles}>
            <div className="lg:w-1/2 mx-4">
              <h1 className="text-2xl lg:text-3xl font-bold text-center lg:text-start">
                {service.title}
              </h1>
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
