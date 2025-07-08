import React from "react";

import "../App.css";
import resume from "./kanchanResume.pdf";

function Navbar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="mt-3 flex h-[10vh] w-[70vw] mooli text-white mooli justify-between ml-[15vw] items-center snap-center">
      <div className="flex gap-7">
        <button
          className="bg-transparent hover:underline-offset-4  hover:underline  hover:decoration-white border-none"
          onClick={() => scrollToSection("Hero")}
        >
          Home
        </button>
        <button
          className="bg-transparent hover:underline-offset-4  hover:underline  hover:decoration-white border-none"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </button>
        <button
          className="bg-transparent hover:underline-offset-4  hover:underline  hover:decoration-white border-none"
          onClick={() => scrollToSection("Skills")}
        >
          Skills
        </button>
        <button
          className="bg-transparent hover:underline-offset-4  hover:underline  hover:decoration-white border-none"
          onClick={() => scrollToSection("PersonalDetails")}
        >
          Personal Details
        </button>
      </div>
      <div className="flex gap-7 items-center justify-center">
        <a
          href={resume}
          className="bg-pink-600 text-white p-2 rounded-lg  hover:bg-pink-700 hover:text-white hover:border-white hover:border-2"
        >
          Resume
        </a>
      </div>
    </div>
  );
}

export default Navbar;
