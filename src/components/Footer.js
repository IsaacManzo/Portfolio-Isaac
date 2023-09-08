import React from "react";

// import social data
import { social } from "../data";

const Footer = () => {
  return (
    <footer className="bg-tertiary pt-5">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
          {/* social icons */}
          <div className="flex space-x-6 items-center justify-center">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="text-accent text-base" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          {/* logo */}
          <div></div>
          {/* copy */}
          <p>&copy; 2023 Isaac Esteban Manzo. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
