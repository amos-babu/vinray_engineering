import BackgroundImage from "../components/BackgroundImage";
import mapPin from "../assets/icons/map-pin.svg";
import phone from "../assets/icons/phone.svg";
import envelope from "../assets/icons/envelope.svg";

const ContactUs = () => {
  return (
    <>
      <BackgroundImage header="Contact Us" />
      <div className="mb-10 lg:mb-20">
        <h1 className="font-bold break-all text-2xl lg:text-4xl text-center">
          Get In Touch
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center mb-20">
        <div
          className="block w-5/6 lg:w-3/4 cursor-pointer bg-gray-100 border
             border-gray-200 rounded-lg shadow-sm 
             hover:bg-orange-300 dark:bg-gray-800 dark:border-gray-700
              dark:hover:bg-gray-700"
        >
          <h1 className="font-bold text-xl break-all lg:text-2xl text-center py-3">
            Nairobi Office
          </h1>

          <div className="flex flex-col lg:flex-row gap-4 mt-10 justify-center lg:justify-start lg:px-50 items-center">
            <img className="w-5 h-5" src={mapPin} alt="map-pin" />
            <p className="text-base font-semibold text-center lg:text-start py-3">
              Ruiru Town P.O. Box 33319-00600, Nairobi, Kenya
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mt-10 justify-center lg:justify-start lg:px-50 items-center">
            <img className="w-5 h-5" src={envelope} alt="envelope" />
            <p className="text-base font-semibold break-all text-center lg:text-start py-3">
              sales@vinrayengineering.com
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mt-10 justify-center lg:justify-start lg:px-50 items-center">
            <img className="w-5 h-5" src={envelope} alt="envelope" />
            <p className="text-base break-all font-semibold text-center lg:text-start py-3">
              info@vinrayengineering.com
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mt-10 justify-center lg:justify-start lg:px-50 items-center">
            <img className="w-5 h-5" src={phone} alt="phone" />
            <p className="text-base break-all font-semibold text-center lg:text-start py-3">
              +254756020125, +254756020132, +254756020134
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
