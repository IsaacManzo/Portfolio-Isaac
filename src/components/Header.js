import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import Nav from "../components/Nav";
import NavMobile from "../components/NavMobile";
import Socials from "../components/Socials";

const Header = () => {
  const [bg, setBg] = useState(false);
  const [arrowUp, setArrowUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setBg(window.scrollY > 50);
      setArrowUp(window.scrollY <= 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        bg ? "bg-tertiary h-20" : "h-24"
      } flex items-center fixed top-0 w-full text-white z-10 transition-all duration-300`}
    >
      <div className="container mx-auto h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="home" smooth={true} duration={500}>
          <a href="/">
            <p className={`text-[40px] hover:text-accent transition-all duration-300 ${arrowUp ? 'rotate-180' : ''}`}>
              {arrowUp ? "▲" : "▲"}
            </p>
          </a>
        </Link>
        {/* nav */}
        <div className="hidden lg:block">
          <Nav />
        </div>
        {/* socials */}
        <div className="hidden lg:block">
          <Socials />
        </div>
        {/* navmobile */}
        <div className="lg:hidden">
          <NavMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
