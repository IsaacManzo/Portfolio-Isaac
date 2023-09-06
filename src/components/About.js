import React from "react";

// import image
import Image from "../assets/img/about.webp";

const About = () => {
  return (
    <section className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="objet-cover h-full w-[566px] md:w-[700px] sm:w-[566px] lg:mx-0 rounded-2xl"
            src={Image}
            alt="no cargo la imagen"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h1 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative begore:absoulte before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Isaac Manzo
              </h1>
              <p className="mb-4 text-lg text-accent">
                Programador Web Freelancer
              </p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-2 mt-3">
                Me considero una persona apasionada por la programación, siempre
                predispuesto a aprender más y formarme constantemente, cómo así
                también me interesa compartir con los demás mis conocimientos y
                experiencias.
              </p>
              <div className="flex justify-center">
              <button className="font-primary text-xl pl-[130px] pr-[130px] btn btn-blue rounded-3xl bg-accent hover:text-black hover:font-semibold  hover:bg-white hover:rounded-full shadow-lg hover:shadow mt-5">
                Contactarme
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
