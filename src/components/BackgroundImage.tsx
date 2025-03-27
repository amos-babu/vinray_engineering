type BackgroundImageProps = {
  header: string;
};

const BackgroundImage = ({ header }: BackgroundImageProps) => {
  return (
    <div className="mb-10">
      <div className="flex flex-col relative h-50 w-full items-center justify-center">
        <div
          className="absolute inset-0 
      bg-[url('https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg')] 
      bg-cover bg-center before:absolute before:inset-0 before:bg-black/50"
        ></div>

        <div
          className="relative z-10 flex flex-col items-center 
      justify-center h-full text-white text-xl"
        >
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl text-center font-bold 
          bg-gradient-to-r from-orange-700 to-orange-600 bg-clip-text 
          text-transparent"
          >
            {header}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BackgroundImage;
