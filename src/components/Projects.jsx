import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

function Projects() {
  const projectRef = useRef([]);
  const handleHover = (index) => {
    gsap.to(projectRef.current[index], {
      height: "40vh",
      width: "25vw",
      scale: 1.03,
      duration: 0.3,
      ease: "power2.out",
      borderRadius: "2vh",
    });
  };

  const handleLeave = (index) => {
    gsap.to(projectRef.current[index], {
      height: "9vw",
      width: "9vw",
      scale: 1,
      duration: 0.3,
      ease: "power2.inOut",
      borderRadius: "50%",
    });
  };
  const projects = [
    {
      img: "https://cdn-icons-png.flaticon.com/256/2954/2954816.png",
      name: "Cafe Website",
      description:
        "Responsive café website where users can browse the menu, customize, and place real-time orders.",
      LinkedIn:
        "https://www.linkedin.com/posts/kanchan-gupta-64262a2bb_just-launched-koffe-with-kanchan-activity-7337437198130036737-QmJv",
      Github: "https://github.com/kanchan-gupta23/Cafe.git",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/2402/2402443.png",
      name: "Vibe Tunes",
      description:
        "A full-stack music app where users can listen to songs based on their mood.",
      LinkedIn:
        "https://www.linkedin.com/posts/kanchan-gupta-64262a2bb_mern-fullstackdeveloper-cloudinary-activity-7323611595941584896-esbK",
      Github: "https://github.com/kanchan-gupta23/vibetunes.git",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/1653/1653630.png",
      name: "Chat App",
      description:
        "WhatsApp clone with real-time chat, PDF and image sharing functionality.",
      LinkedIn:
        "https://www.linkedin.com/posts/kanchan-gupta-64262a2bb_mern-reactjs-nodejs-activity-7317523828039979009-Urrh",
      Github: "https://github.com/kanchan-gupta23/whatsapp.git",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/762/762686.png",
      name: "Task Management Website",
      description:
        "Organize your day with this full-stack task manager — create, update, and delete tasks easily.",
      LinkedIn:
        "https://www.linkedin.com/posts/kanchan-gupta-64262a2bb_mern-webdevelopment-projectmanagementtool-activity-7257130065518325761-Lx5f",
      Github: "https://github.com/kanchan-gupta23/project-management.git",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/14836/14836695.png",
      name: "KFC Clone",
      description:
        "UI/UX clone of the KFC website, recreated to enhance user experience with modern design.",
      LinkedIn:
        "https://www.linkedin.com/posts/kanchan-gupta-64262a2bb_ui-ux-webdesign-activity-7224782735993704448-IRYL",
      Github: "https://github.com/kanchan-gupta23/kfc.git",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/128/3811/3811855.png",
      name: "Cadbury Clone",
      description:
        "Redesigned the Cadbury website UI/UX for a cleaner, more user-friendly look.",
      LinkedIn:
        "https://www.linkedin.com/posts/kanchan-gupta-64262a2bb_hi-everyone-my-name-is-kanchan-and-i-am-activity-7213540080563425280-7MJp",
      Github: "https://github.com/kanchan-gupta23/cadbury.git",
    },
  ];

  return (
    <div id="projects" className=" min-h-screen w-full snap-center p-10  ">
      <h1 className="text-4xl font-bold text-white text-center mb-10">
        My Project
      </h1>
      <p className="text-center m-8">
        I have worked on wide range of projects. Here are some of my projects.
      </p>
      <div className="flex w-screen h-screen justify-center items-center ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[75vw] h-[70vh] ">
          {projects.map((pr, index) => (
            <div
              key={index}
              className="project  p-6 bg-gradient-to-r from-blue-950 via-indigo-950 to-gray-950 overflow-hidden backdrop:max-md rounded-full  border-2 border-indigo-400 shadow-[0_4px_30px_rgba(0,0,0,0.1)]  transition-all duration-300  hover:shadow-[0_8px_40px_rgba(0,0,0,0.2)]"
              style={{ height: "9vw", width: "9vw" }}
              ref={(el) => (projectRef.current[index] = el)}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleLeave(index)}
            >
              {/* <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-gray-950 p-6 rounded-full w-[8vw] h-[8vw] project2"> */}
              <img
                src={pr.img}
                alt={pr.name}
                className="h-24 w-24 object-contain mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-center mb-2">
                {pr.name}
              </h2>
              <p className="text-gray-300 text-sm text-center mb-4">
                {pr.description}
              </p>
              <div className="flex justify-center gap-4">
                <a
                  href={pr.LinkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline"
                >
                  LinkedIn
                </a>
                <a
                  href={pr.Github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:underline hover:decoration-white hover:text-white"
                >
                  GitHub
                </a>
              </div>
              {/* </div> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
