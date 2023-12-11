import React from "react";

import { Link } from "react-scroll"

// import image
import image from "../assets/img/about/aboutImage.jpg"

const About = () => {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex justify-center flex-col xl:flex-row gap-24">
          <img
            className="objet-cover h-full w-[466px] md:w-[500px] sm:w-[466px] lg:mx-0 rounded-2xl"
            src={image}
            alt="no cargo la imagen"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              
              <h1 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 relative begore:absoulte before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Isaac Manzo
              </h1>
              <p className="mb-4 text-lg text-accent">
                Programador Web
              </p>
              <hr className="mb-8 opacity-5" />
              <div className="">
              <p className="mb-2 mt-3">
              ¡Hola! Soy un apasionado programador con un enfoque creativo y soluciones a medida. Mi objetivo es transformar tus ideas en sitios web únicos y funcionales. Con habilidades sólidas y atención personalizada, estoy listo para llevar tu presencia en línea al siguiente nivel.
              </p>
              <p className="mb-2 mt-3">
              Con experiencia en proyectos complejos y colaboración efectiva en equipos. Mi formación académica sólida me ha proporcionado habilidades avanzadas. Trabajando en diversos proyectos, he comprendido a fondo la dinámica de las empresas de páginas web. Estoy listo para enfrentar nuevos desafíos con entusiasmo y experiencia. ¡Hablemos y creemos algo juntos!
              </p>
              </div>
              <Link to="contacto" smooth={true} duration={500}>
                <button className="font-primary text-xl pl-[130px] pr-[130px] btn btn-blue bg-accent hover:text-black hover:font-semibold  hover:bg-white rounded-full shadow-lg hover:shadow mt-5">
                  Contactarme
                </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
