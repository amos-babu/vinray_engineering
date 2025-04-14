import image5 from "../assets/images/image-5.jpg"
import image6 from "../assets/images/image-6.jpg"
import image7 from "../assets/images/image-7.jpg"
import image8 from "../assets/images/image-8.jpg"
import image9 from "../assets/images/image-9.jpg"
import image10 from "../assets/images/image-10.jpg"
import image11 from "../assets/images/image-11.jpg"
import image12 from "../assets/images/image-12.jpg"
import image13 from "../assets/images/image-13.jpg"
import image14 from "../assets/images/image-14.jpg"
import image15 from "../assets/images/image-15.jpg"
import image16 from "../assets/images/image-16.jpg"
import image17 from "../assets/images/image-17.jpg"
import image18 from "../assets/images/image-18.jpg"

type ProductsProps = {
  id: number;
  category: string;
  description: string;
  images: {
    id: number;
    src: string
  }[]
}

const products: ProductsProps[] = [
    {
      "id": 1,
      "category": "Electrical Panels",
      "description": "",
      "images": [
        { "id": 1, "src": image5 },
        { "id": 2, "src": image6 },
        { "id": 3, "src": image7 },
        { "id": 4, "src": image8},
        { "id": 5, "src": image9 },
        { "id": 6, "src": image10 },
        { "id": 7, "src": image11 },
        { "id": 8, "src": image12 },
        { "id": 9, "src": image13 },
        { "id": 10, "src": image14 },
        { "id": 11, "src": image15 },
        { "id": 12, "src": image16 },
        { "id": 13, "src": image17 },
        { "id": 14, "src": image18 }
      ]
    },
    {
      "id": 2,
      "category": "Cable Managements",
      "description": "",
      "images": [
        { "id": 201, "src": "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" },
        { "id": 202, "src": "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" },
        { "id": 203, "src": "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" }
      ]
    },
    {
      "id": 3,
      "category": "Data Cabinets",
      "description": "",
      "images": [
        { "id": 301, "src": "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" },
        { "id": 302, "src": "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" },
        { "id": 303, "src": "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" }
      ]
    },
    {
      "id": 4,
      "category": "Meter Boxes",
      "description": "",
      "images": [
        { "id": 401, "src": "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" },
        { "id": 402, "src": "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" },
        { "id": 403, "src": "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" }
      ]
    }
    
  ]

  export default products;
  