import React from "react";

// import woman image
import WomanImg from "../assets/img/banner-woman2.webp";
import Logo from "../assets/img/logo.png";

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
            <p className="text-lg text-accent ">
              Hola, yo soy Isaac 👋
            </p>
            <h1 className="text-4xl mt-0 mb-0 leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              Mi trabajo es construir y diseñar <br /> páginas web
            </h1>
            <p className="pt-4 pb-8 md:pt-6 mb:pb-12 max-w-[480px] text-lg text-center lg:text-left">
              Soy un programador apasionado por crear soluciones
              innovadoras.
            </p>
            <div className="flex justify-start">
              <button className="font-primary text-xl pl-5 pr-5 btn btn-blue rounded-3xl bg-accent hover:text-black hover:font-semibold  hover:bg-white hover:rounded-full shadow-lg hover:shadow">
                Yo
              </button>
            </div>
          </div>
          {/* right side */}
          <div className="hidden lg:flex flex-1 justify-end items-end pt-[212px]">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
