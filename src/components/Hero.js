import React from "react";

// import woman image
import iconsDark from "../assets/img/heroIconsDark.svg";

const Hero = () => {

  return (
    <section
      id="home"
      className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bo-repeat py-32 white overflow-hidden"
    >
      <div className="container mx-auto h-full">
        <div className="flex items-center h-full pt-8">
          {/* left side */}
          <div className="flex-1 flex flex-col items-center lg:items-start mb-0">
            <p className="text-lg text-accent md:pt-5">
              Hola, yo soy Isaac 👋
            </p>
            <h1 className="text-5xl mt-0 leading-[44px] font-bold ">

              Mi trabajo es construir y diseñar <br /> páginas web
            </h1>
            <p className="pt-4 pb-8 md:pt-6 mb:pb-12 max-w-[480px] text-lg text-center lg:text-left sm:text-xl">
              Soy un programador apasionado por crear soluciones
              innovadoras.
            </p>
            <div className="flex justify-start">
            </div>
          </div>
          {/* right side */}
          <div className="hidden lg:flex flex-1 justify-center scale-150 h-full">
            <img className="rounded-2xl" src={iconsDark} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
