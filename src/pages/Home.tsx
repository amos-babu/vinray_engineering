import { Link } from "react-router-dom";
import videoBg from "../assets/video.mp4";

const Home = () => {
  return (
    <div className="flex flex-col relative h-screen w-full">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted />
      <div
        id="content"
        className="relative z-10 flex flex-col items-center 
      justify-center h-full text-white text-xl"
      >
        <h1 className="text-center mb-4 text-4xl/20 font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl dark:text-white">
          We <span className="underline decoration-orange-600">engineer</span>{" "}
          the{" "}
          <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
            future’s{" "}
            <span className="underline decoration-white">possibilities</span>
          </span>
        </h1>

        <span className="mx-3 text-center w-2/3">
          The services we provide are a fusion of our knowledge, skills, and
          expertise, combined with a deep understanding of our customers’ needs
          and requirements.
        </span>

        <div className="flex flex-col lg:flex-row md:flex-row gap-4">
          <Link to={`/contact-us`}>
            <button className="px-10 mt-3 py-3 text-sm bg-orange-600 rounded-lg hover:bg-orange-800">
              Contact Us
            </button>
          </Link>

          <Link to={`/about-us`}>
            <button className="px-10 mt-3 py-3 text-sm border pointer-cursor hover:text-orange-600 rounded-lg">
              Learn More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
