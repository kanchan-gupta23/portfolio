import React, { useEffect, useState } from "react";
import "../App.css";

function Hero() {
  const [more, setMore] = useState(false);
  const changeMore = () => {
    setMore((prev) => !prev);
  };
  return (
    <div
      id="Hero"
      className="  h-[90vh] w-screen  snap-center flex items-center justify-center gap-28 rounded-b-[100%] mooli"
    >
      <div className="snap-center -mt-20 leading-6">
        <h3 className="">Hello, It's Me</h3>
        <h1>Kanchan</h1>
        <h2>And I'm a MERN Stack Developer</h2>
        <p className="mt-2 max-w-md">
          I build bold, full-stack experiences with MongoDB, Express, React, and
          Node — blending logic and design to create seamless digital journeys.
        </p>

        {!more && (
          <button onClick={changeMore} className="bg-pink-600 mt-4">
            Learn more
          </button>
        )}
        {more && (
          <p className="mt-2 max-w-md">
            Motivated self-taught Full Stack Web Developer with hands-on
            experience in building web applications using the MERN stack. I
            developed a solid foundation in both frontend and backend
            technologies. My long-term goal is to contribute to impactful
            projects in the tech industry, particularly in full-stack
            development, where I can create efficient and user-friendly
            solutions. I'm always looking to collaborate with professionals and
            explore new opportunities that align with my passion for web
            development.
          </p>
        )}
        {more && (
          <button onClick={changeMore} className="bg-pink-600 mt-4">
            See Less
          </button>
        )}
      </div>

      <div className="snap-center -mt-20">
        <img
          src="https://lh3.googleusercontent.com/a/ACg8ocLT2Ruq643KqDzZ5EE1h_0JeCn98lKRTco_6ulgNziNWkDZmWAQ=s360-c-no"
          className="h-[53vh] w-[53vh] rounded-full "
        />
      </div>
    </div>
  );
}

export default Hero;
