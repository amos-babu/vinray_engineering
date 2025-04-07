import { useRef, useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import projects from "../utils/products";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("Electrical Panels");

  const productSectionRef = useRef<null | HTMLDivElement>(null);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    productSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <BackgroundImage header="Products" />
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
        className={`grid grid-cols-1 md:grid-cols-2 gap-2 mx-5 mt-10 mb-20`}
      >
        {selectedCategory &&
          projects
            .find((p) => p.category === selectedCategory)
            ?.images.map((image) => (
              <div key={image.id}>
                <img
                  className="h-auto max-w-full rounded-lg"
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
