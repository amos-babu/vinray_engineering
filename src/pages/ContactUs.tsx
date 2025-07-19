import BackgroundImage from "../components/BackgroundImage";
import bgImage from "../assets/images/image-13.jpg";
import ContactForm from "../components/ContactForm";
import ContactListCard from "../components/ContactListCard";
import { motion } from "motion/react";

const ContactUs = () => {
  return (
    <>
      <BackgroundImage header="Contact Us" bgImage={bgImage} />

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1 }}
        className="w-full flex flex-col lg:flex-row gap-5 justify-center mb-20"
      >
        <ContactListCard />
        <ContactForm />
      </motion.div>
    </>
  );
};

export default ContactUs;
