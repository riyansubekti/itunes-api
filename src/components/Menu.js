import { setCookie } from "cookies-next";
import React, { useContext } from "react";
import { HomeContext } from "../context";
import "./Menu.css";

const Menu = () => {
  const { setActiveHome, setActiveSearch } = useContext(HomeContext);
  const handleHome = () => {
    setActiveSearch(true);
    setActiveHome((prev) => !prev);
  };

  setCookie("testing", "value-cookies");

  setCookie("testing-2", "value-cookies-2", {
    domain: ".netlify.app",
  });

  setCookie("testing-3", "value-cookies-3", {
    domain: "netlify.app",
  });

  setCookie("testing-4", "value-cookies-4", {
    domain: "cheerful-frangipane-2c2fbb.netlify.app",
  });

  return (
    <div className="home--menu">
      <div onClick={handleHome} className="menu--album">
        Artist / Album / Title
      </div>
      <div onClick={handleHome} className="menu--search">
        Search...
      </div>
    </div>
  );
};

export default Menu;
