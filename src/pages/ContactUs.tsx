import BackgroundImage from "../components/BackgroundImage";
import bgImage from "../assets/images/image-13.jpg";
import ContactForm from "../components/ContactForm";
import ContactListCard from "../components/ContactListCard";

const ContactUs = () => {
  return (
    <>
      <BackgroundImage header="Contact Us" bgImage={bgImage} />

      <div className="w-full flex flex-col lg:flex-row gap-5 justify-center mb-20">
        <ContactListCard />
        <ContactForm />
      </div>
    </>
  );
};

export default ContactUs;
