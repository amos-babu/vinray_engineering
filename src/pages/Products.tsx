import { useState } from "react";
import BackgroundImage from "../components/BackgroundImage";
import projects from "../data/projects.json";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <>
      <BackgroundImage header="Products" />
      <div className="flex flex-wrap justify-center items-center mt-10 px-4 gap-4">
        {projects.map((project) => (
          <button
            key={project.id}
            onClick={() => setSelectedCategory(project.category)}
            className={`text-sm cursor-pointer font-semibold bg-black/10 hover:bg-[#EF7275]
             hover:text-white py-3 w-50 text-center rounded-full transition-all`}
          >
            {project.category}
          </button>
        ))}
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-2 mx-5 mt-10 ${
          !selectedCategory ? "mb-20" : ""
        }`}
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
