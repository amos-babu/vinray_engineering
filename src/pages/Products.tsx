import { useEffect, useRef, useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import projects from "../utils/products";
import bgImage from "../assets/images/image-5.jpg";
import backTop from "../assets/icons/back-top.svg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Electrical Panels");
  const [showButton, setShowButton] = useState(false);

  const productSectionRef = useRef<null | HTMLDivElement>(null);
  const backTopRef = useRef<null | HTMLDivElement>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    productSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleBackTop = () => {
    backTopRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="relative">
      <BackgroundImage header="Products" bgImage={bgImage} />
      <div
        ref={backTopRef}
        className="flex flex-wrap justify-center items-center mt-10 px-4 gap-4"
      >
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => handleCategoryClick(project.category)}
            className={`text-sm cursor-pointer font-semibold hover:bg-orange-600/50
             hover:text-white py-3 w-50 text-center rounded-full transition-all ${
               selectedCategory == project.category
                 ? "bg-orange-600 text-white"
                 : "bg-black/10"
             }`}
          >
            {project.category}
          </button>
        ))}
      </div>
      <div
        ref={productSectionRef}
        className="flex flex-row lg:flex-row flex-wrap justify-center items-center gap-5 lg:mx-5 mt-10 mb-20"
      >
        {selectedCategory &&
          projects
            .find((p) => p.category === selectedCategory)
            ?.images.map((image) => (
              <div key={image.id}>
                <img
                  className="h-auto w-full transition hover:scale-120
                   duration-300 cursor-pointer max-w-96 rounded-lg"
                  src={image.src}
                  alt="Products"
                />
              </div>
            ))}
      </div>
      {showButton && (
        <button
          onClick={handleBackTop}
          className="fixed bg-gray-200 bottom-4 
            left-1/2 transform -translate-x-1/2
            px-4 py-4 rounded-full shadow cursor-pointer"
          aria-label="Back to top"
        >
          <img className="w-7 h-7" src={backTop} alt="Check" />
        </button>
      )}
    </div>
  );
};

export default Products;
