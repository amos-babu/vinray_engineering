import { useRef, useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import projects from "../utils/products";
import bgImage from "../assets/images/image-5.jpg";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Electrical Panels");

  const productSectionRef = useRef<null | HTMLDivElement>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    productSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <BackgroundImage header="Products" bgImage={bgImage} />
      <div className="flex flex-wrap justify-center items-center mt-10 px-4 gap-4">
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
        id="product-section"
        className="flex flex-row lg:flex-row flex-wrap justify-center items-center gap-5 lg:mx-5 mt-10 mb-20"
      >
        {selectedCategory &&
          projects
            .find((p) => p.category === selectedCategory)
            ?.images.map((image) => (
              <div key={image.id}>
                <img
                  className="h-auto w-full hover:opacity-60 cursor-pointer max-w-96 rounded-lg"
                  src={image.src}
                  alt="Products"
                />
              </div>
            ))}
      </div>
    </>
  );
};

export default Products;
