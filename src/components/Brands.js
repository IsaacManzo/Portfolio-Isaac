import React from "react";

// import brands data
import { brands } from "../data";

const Brands = () => {
  return (
    <section className="min-h-[146px] bg-tertiary flex items-center">
      <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly">
        {brands.map((brand, index)=>{
            return (
                <div key={index}>
                   <img className="scale-90 hover:scale-110 transition-all" src={brand.img} alt="no cargo la imagen"/>
                </div>
            )
        })}
      </div>
    </section>
  );
};

export default Brands;
