//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/Comida1.png";
import Project2 from "./assets/img/projects/Ecommerce2.png";
import Project3 from "./assets/img/projects/MiPortfoliopng.png";
import Project4 from "./assets/img/projects/MarcelaPortfolio.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// navigation
export const navigation = [
  {
    name: "Inicio",
    href: "home",
  },
  {
    name: "Sobre mi",
    href: "about",
  },
  {
    name: "proyectos",
    href: "portfolio",
  },
  {
    name: "servicios",
    href: "services",
  },
  {
    name: "contacto",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: "",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/IsaacManzo",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project1,
    name: "Portfolio cheff",
    category: "Programador front-end",
    description:
      "Me centré en demostrar mis capacidades utilizando estilos animados.",
    href: "https://porfolio-martina.vercel.app/",
  },
  {
    id: "2",
    image: Project2,
    name: "Ecommerce ropa",
    category: "Programador front-end",
    description:
      "Aquí el estilo es básico, se demuestra la capacidad de manejar datos del producto, agregar al carrito, eliminar, sumar precios, etc.",
    href: "https://ecommerce-ropa.vercel.app/",
  },
  {
    id: "3",
    image: Project3,
    name: "Mi portfolio",
    category: "Programador Front-end",
    description:
      "En esta página, comparto mis conocimientos, mis datos de contacto y explico en qué se dedica un programador web.",
    href: "https://portfolio-isaac-kappa.vercel.app/",
  },
  {
    id: "3",
    image: Project4,
    name: "Acompañante terapeutica",
    category: "Programador Front-end",
    description:
      "Este es un proyecto freelance diseñado y adaptado a los gustos del cliente.",
    href: "https://portfolio-marcela.vercel.app/",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Programador Front-end",
  },
  {
    name: "Programador Back-end",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Front-end",
    description:
      "Es la cara visible de su sitio web o aplicación. Es lo que ve y con lo que interactúa. Cuida la apariencia y la experiencia del usuario.",
  },
  {
    icon: <FiSettings />,
    name: "Back-End",
    description:
      "Es el cerebro detrás de su sitio web o aplicación. Trabaja en segundo plano, manejando la lógica, los datos y la seguridad. En cada proyecto, demuestro mis habilidades en distintas áreas.",
  },
  {
    icon: "$",
    name: "Costo",
    description:
      "Primero se pacta el tiempo que llevará el proyecto, luego el pago se realiza en el momento que el cliente esté decidido a arrancarlo, es decir, se paga al inicio y se hará un seguimiento semanal.",
  },
  {
    icon: <FiPenTool />,
    name: "Seguimiento",
    description:
      "Semanalmente se le hara un seguimiento al proyecto, mediante virtualidad o presencialidad",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Mi mail de contacto",
    description: "Email isaacemanzo51@gmail.com",
  },
  {
    icon: "☎",
    title: "Whatsapp/Llamada",
    description: "+54 2262 408165",
  },
  {
    icon: <FiMapPin />,
    title: "Donde vivo",
    subtitle: "Mar del plata, Buenos Aires",
  },
];
