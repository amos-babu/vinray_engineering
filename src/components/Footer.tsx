import { Link } from "react-router-dom";
import contacts from "../data/contacts.json";
const Footer = () => {
  return (
    <footer className="dark:bg-gray-900 h-16">
      <div className="w-full">
        <div className="flex px-4 py-6 bg-orange-600 dark:bg-gray-700 md:flex md:items-center md:justify-between">
          <span className="text-sm text-gray-900 dark:text-gray-300 sm:text-center">
              <p>&copy; {new Date().getFullYear()} Vinray Engineering. All rights reserved.</p>
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center md:mt-0 rtl:space-x-reverse">
            {contacts.map((contact) => (
              <Link
                key={contact.id}
                to={contact.link}
                target="_blank"
                className="text-gray-900 hover:text-lime-700 dark:hover:text-white"
              >
                <img className="w-4 h-4" src={contact.path} alt={contact.alt} />
                <span className="sr-only">Facebook page</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
