import videoBg from "../assets/video/video.mp4";

type BackgroundImageProps = {
  header: string;
};

const BackgroundImage = ({ header }: BackgroundImageProps) => {
  return (
    <div className="mb-10">
      <div className="flex flex-col relative h-50 lg:h-100 w-full items-center justify-center">
        <div className="overlay"></div>
        <video src={videoBg} autoPlay loop muted></video>
        <div
          id="content"
          className="relative z-10 flex flex-col items-center 
          justify-center h-full text-white text-xl"
        >
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl text-center font-bold 
          bg-gradient-to-r from-orange-700 to-orange-600 bg-clip-text 
          text-transparent break-all"
          >
            {header}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
