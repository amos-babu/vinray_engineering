import mapPin from "../assets/icons/map-pin.svg";
import phone from "../assets/icons/phone.svg";
import envelope from "../assets/icons/envelope.svg";
import { motion } from "motion/react";

const ContactListCard = () => {
  return (
    <div className="lg:w-1/2 mx-4">
      <div className="mb-10 lg:mb-20">
        <motion.h1
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="font-bold break-all text-2xl lg:text-4xl text-center"
        >
          Get In Touch
        </motion.h1>
      </div>

      <div className="flex flex-col mb-20">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.5 }}
          className="block cursor-pointer bg-gray-100 border
             border-gray-200 rounded-lg shadow-sm 
             hover:bg-orange-300 dark:bg-gray-800 dark:border-gray-700
              dark:hover:bg-gray-700"
        >
          <h1 className="font-bold text-xl break-all lg:text-2xl text-center py-3">
            Nairobi Office
          </h1>

          <div className="flex flex-col lg:flex-row gap-4 mt-10 justify-center lg:justify-start lg:px-20 items-center">
            <img className="w-5 h-5" src={mapPin} alt="map-pin" />
            <p className="text-base font-semibold text-center lg:text-start py-3">
              Ruiru Town P.O. Box 33319-00600, Nairobi, Kenya
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mt-10 justify-center lg:justify-start lg:px-20 items-center">
            <img className="w-5 h-5" src={envelope} alt="envelope" />
            <p className="text-base font-semibold break-all text-center lg:text-start py-3">
              sales@vinrayengineering.com
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mt-10 justify-center lg:justify-start lg:px-20 items-center">
            <img className="w-5 h-5" src={envelope} alt="envelope" />
            <p className="text-base break-all font-semibold text-center lg:text-start py-3">
              info@vinrayengineering.com
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-4 mt-10 justify-center lg:justify-start lg:px-20 items-center">
            <img className="w-5 h-5" src={phone} alt="phone" />
            <p className="text-base break-all font-semibold text-center lg:text-start py-3">
              +254756020125, +254756020132, +254756020134
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactListCard;
