import phone from "../assets/icons/phone.svg";
import envelope from "../assets/icons/envelope.svg";
import name from "../assets/icons/user.svg";
import { useState } from "react";
import axios from "axios";
import { Toaster } from "./ui/sonner";
import { toast } from "sonner";

type FormDataProps = {
  name: string;
  email: string;
  phone_number: string;
  message: string;
};

type ErrorProps = {
  location: string;
  msg: string;
  path: string;
  type: string;
  value: string;
};

const ContactForm = () => {
  const [errors, setErrors] = useState<ErrorProps[]>([]);
  const [formData, setFormData] = useState<FormDataProps>({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors([]);

    await axios
      .post("http://localhost:3000/api/contact", formData)
      .then((res) => {
        toast.success(res.data.msg);
        setFormData({
          name: "",
          email: "",
          phone_number: "",
          message: "",
        });
      })
      .catch((err) => {
        if (err.status === 422) {
          const validationErrors = err.response.data.errors;
          setErrors(validationErrors);
        }
        console.log(err);
      });
  };

  const getError = (field: string) => {
    return errors.find((e) => e.path === field)?.msg;
  };

  return (
    <>
      <Toaster position="top-right" />
      <form onSubmit={handleSubmit} className="mx-3 lg:w-1/2">
        <div className="mb-10 lg:mb-20">
          <h1 className="font-bold break-all text-2xl lg:text-4xl text-center">
            Send A Message
          </h1>
        </div>
        <div className="flex flex-col gap-6 lg:mx-10">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                <img className="w-4 h-4" src={name} alt="ProfileIcon" />
              </div>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                aria-describedby="helper-text-explanation"
                className={`bg-gray-50 border border-gray-300 ${
                  getError("name") ? "border-red-600 border-2" : ""
                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full ps-10 p-2.5 
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="John Doe"
              />
            </div>
            {getError("name") && (
              <p className="text-red-500 text-xs mt-1">{getError("name")}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                <img className="w-4 h-4" src={envelope} alt="EnvelopeIcon" />
              </div>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                aria-describedby="helper-text-explanation"
                className={`bg-gray-50 border border-gray-300 ${
                  getError("email") ? "border-red-600 border-2" : ""
                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full ps-10 p-2.5 
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="doe@example.com"
              />
            </div>
            {getError("email") && (
              <p className="text-red-500 text-xs mt-1">{getError("email")}</p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Phone number
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 top-0 flex items-center ps-3.5 pointer-events-none">
                <img className="w-4 h-4" src={phone} alt="PhoneIcon" />
              </div>
              <input
                type="phone_number"
                id="phone_number"
                value={formData.phone_number}
                onChange={(e) =>
                  setFormData({ ...formData, phone_number: e.target.value })
                }
                aria-describedby="helper-text-explanation"
                className={`bg-gray-50 border border-gray-300 ${
                  getError("phone_number") ? "border-red-600 border-2" : ""
                } text-gray-900 text-sm rounded-lg focus:ring-blue-500 
                focus:border-blue-500 block w-full ps-10 p-2.5 
                 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
                placeholder="2547-456-7890"
              />
            </div>
            {getError("phone_number") && (
              <p className="text-red-500 text-xs mt-1">
                {getError("phone_number")}
              </p>
            )}
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Your message
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              rows={5}
              className={`block p-2.5 w-full text-sm text-gray-900
               bg-gray-50 rounded-lg border border-gray-300 ${
                 getError("message") ? "border-red-600 border-2" : ""
               } focus:ring-blue-500
                focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
                  dark:focus:border-blue-500`}
              placeholder="Write your message here..."
            ></textarea>
            {getError("message") && (
              <p className="text-red-500 text-xs mt-1">{getError("message")}</p>
            )}
          </div>
          <button
            type="submit"
            className="text-white mt-6 cursor-pointer bg-orange-500 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-900 font-medium rounded-lg text-sm w-full lg:w-1/2 md:w-1/2 sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send Message
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
