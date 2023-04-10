import React, { useState, useEffect } from "react";
import Sun from "../images/icon-sun.svg";
import Moon from "../images/icon-moon.svg"

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  function handleClick() {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
  }, [theme]);
    
  return (
    <div className="h-10 w-full flex justify-between items-center mb-8">
      <h1 className="font-bold uppercase tracking-widest text-3xl text-white">
        Todo
      </h1>

      <div className="cursor-pointer" onClick={handleClick}>
        <img className="w-5 h-5" src={theme === "dark" ? Moon : Sun} alt="sun" />
      </div>
    </div>
  );
};

export default Navbar;
