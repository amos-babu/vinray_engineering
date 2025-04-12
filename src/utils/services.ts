import electricDesignConsultation from "../assets/images/image-3.jpg";
import powderCoating from "../assets/images/image-4.jpg";
import laserMachining from "../assets/images/image-5.jpg";

type ServiceProps = {
    id: number;
    serviceStyles: string;
    title: string;
    image: string
    services: {
        id: number;
        description: string
    }[]
}

const services: ServiceProps[] = [
    {
        "id": 1,
        "serviceStyles": "flex flex-col gap-10 lg:flex-row-reverse justify-center items-center lg:items-start",
        "title": "Laser Machining and Designs",
        "image": laserMachining,
        "services":[
            {
                "id": 1,
                "description": "Precision laser cutting and engraving services for metals and non-metals."
            },
            {
                "id": 2,
                "description": "Capability to create intricate designs, prototypes, and custom components with high accuracy."
            }
        ]
    },
    {
        "id": 2,
        "serviceStyles": "flex flex-col lg:flex-row gap-10 justify-center items-center lg:items-start",
        "title": "Powder Coating",
        "image": powderCoating,
        "services":[
            {
                "id": 1,
                "description": "In-house powder coating services that provide durable and aesthetically pleasing finishes for metal components."
            },
            {
                "id": 2,
                "description": "A wide range of colors and textures to suit customer specifications."
            }
        ]
    },
    {
        "id": 3,
        "serviceStyles": "flex flex-col lg:flex-row-reverse gap-10 justify-center items-center lg:items-start",
        "title": "Electrical Design and Consultation",
        "image": electricDesignConsultation,
        "services":[
            {
                "id": 1,
                "description": "Expertise in designing electrical systems for residential, commercial, and industrial projects."
            },
            {
                "id": 2,
                "description": "Load analysis and power distribution planning."
            },
            {
                "id": 3,
                "description": "Energy-efficient solutions and renewable energy integrations."
            },
            {
                "id": 4,
                "description": "Compliance with safety standards and regulations."
            },
            {
                "id": 5,
                "description": "End-to-end consultation, from initial concept to implementation and post-installation support."
            }
        ]
    }
]

export default services;