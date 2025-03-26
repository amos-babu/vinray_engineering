import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col relative h-screen w-full">
      <div
        className="absolute inset-0 
      bg-[url('https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg')] 
      bg-cover bg-center before:absolute before:inset-0 before:bg-black/50"
      ></div>

      <div
        className="relative z-10 flex flex-col items-center 
      justify-center h-full text-white text-xl"
      >
        <h1 className="text-center mb-4 text-4xl font-extrabold tracking-tight leading-none text-orange-700 md:text-5xl lg:text-6xl dark:text-white">
          We engineer the future’s possibilities
        </h1>

        <span className="mx-3 text-center w-2/3">
          The services we provide are a fusion of our knowledge, skills, and
          expertise, combined with a deep understanding of our customers’ needs
          and requirements.
        </span>

        <div className="flex flex-col lg:flex-row md:flex-row gap-4">
          <Link to={`/contact-us`}>
            <button className="px-7 mt-3 py-3 text-sm bg-orange-600 rounded-lg hover:bg-orange-800">
              Contact Us
            </button>
          </Link>

          <Link to={`/about-us`}>
            <button className="px-7 mt-3 py-3 text-sm border pointer-cursor hover:text-orange-600 rounded-lg">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
