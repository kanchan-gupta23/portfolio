import React from "react";

function Skills() {
  return (
    <div
      id="Skills"
      className="min-h-screen  bg-[#14181c] w-full  snap-center px-6 py-12 rounded-t-[20%] text-white"
    >
      <h1 className="text-4xl font-bold text-center mb-10 underline underline-offset-4">
        Skills
      </h1>
      <p className="text-center m-8">
        Here are some of my skills on which I have been working on for the past
        2 years
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-lg">
        {/* Frontend */}
        <div className="bg-white/10 p-[0.4vh] rounded-xl shadow-md backdrop-blur-md bg-gradient-to-r from-blue-800 via-purple-500 to-blue-200">
          <div className=" w-full h-full bg-[#14181c] rounded-xl p-2">
            <h2 className="text-xl font-semibold mb-4  ">Frontend</h2>
            <div className="flex flex-wrap  gap-2 items-center  ">
              <div className="flex gap-2  border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://cdn-icons-png.flaticon.com/128/888/888859.png"
                  alt="HTML"
                />
                <h3 className="text-[2vh]">HTML5</h3>
              </div>

              <div className="flex gap-2 border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://cdn-icons-png.flaticon.com/128/16183/16183567.png"
                  alt="CSS"
                />
                <h3 className="text-[2vh]">CSS3</h3>
              </div>

              <div className="flex gap-2 text-wrap border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://cdn-icons-png.flaticon.com/128/1199/1199124.png"
                  alt="JavaScript"
                />
                <h3 className="text-[2vh]">JavaScript</h3>
              </div>
              <div className="flex gap-2 border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://cdn-icons-png.flaticon.com/128/3459/3459528.png"
                  alt="React.js"
                />
                <h3 className="text-[2vh]">React.js</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="bg-white/10 p-[0.4vh] rounded-xl shadow-md backdrop-blur-md bg-gradient-to-r from-blue-800 via-purple-500 to-blue-200">
          <div className=" w-full h-full bg-[#14181c] rounded-xl p-2">
            <h2 className="text-xl font-semibold mb-4">Backend</h2>
            <div className="flex flex-wrap  gap-2 items-center  ">
              <div className="flex gap-2  border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://cdn-icons-png.flaticon.com/128/919/919825.png"
                  alt="Node.js"
                />
                <h3 className="text-[2vh]">Node.js</h3>
              </div>
              <div className="flex gap-2  border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] w-[4.3vh] rounded-full"
                  src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png"
                  alt="Express.js"
                />
                <h3 className="text-[2vh]">Express.js</h3>
              </div>
              <div className="flex gap-2  border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://cdn-icons-png.flaticon.com/128/5968/5968350.png"
                  alt="Python"
                />
                <h3 className="text-[2vh]">Python</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Database & Storage */}
        <div className="bg-white/10 p-[0.4vh] rounded-xl shadow-md backdrop-blur-md bg-gradient-to-r from-blue-800 via-purple-500 to-blue-200">
          <div className=" w-full h-full bg-[#14181c] rounded-xl p-2">
            <h2 className="text-xl font-semibold mb-4">Database & Storage</h2>
            <div className="flex flex-wrap  gap-2 items-center  ">
              <div className="flex gap-2 border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://5.imimg.com/data5/TO/HX/UH/SELLER-5605719/mongo-db-services-500x500.JPG"
                  alt="MongoDB"
                />
                <h3 className="text-[2vh]">MongoDB</h3>
              </div>
              <div className="flex gap-2  border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://miro.medium.com/v2/resize:fit:1400/1*rL8Buu7o6jnG-TYV1WubeQ.png"
                  alt="Mongoose"
                />
                <h3 className="text-[2vh]">Mongoose</h3>
              </div>
              <div className="flex gap-2 border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://s3.amazonaws.com/awsmp-logos/cloudinary.png"
                  alt="Cloudinary"
                />
                <h3 className="text-[2vh]">Cloudinary</h3>
              </div>
            </div>
          </div>
        </div>

        {/* AI Tools */}
        <div className="bg-white/10 p-[0.4vh] rounded-xl shadow-md backdrop-blur-md bg-gradient-to-r from-blue-800 via-purple-500 to-blue-200">
          <div className=" w-full h-full bg-[#14181c] rounded-xl p-2">
            <h2 className="text-xl font-semibold mb-4">AI Tools</h2>
            <div className="flex flex-wrap  gap-2 items-center  ">
              <div className="flex gap-2  border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp61BJpSEsttxxc_FHPdjXMaaeGs9rcRy9Og&s"
                  alt="ChatGPT"
                />
                <h3 className="text-[2vh]">ChatGPT</h3>
              </div>
              <div className="flex gap-2 border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp5miF6TPl58dkhiFtPArQtfDs4RB6F6MbXA&s"
                  alt="Blackbox AI"
                />
                <h3 className="text-[2vh]">Blackbox AI</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Tools & Platforms */}
        <div className="bg-white/10 p-[0.4vh] rounded-xl shadow-md backdrop-blur-md bg-gradient-to-r from-blue-800 via-purple-500 to-blue-200">
          <div className=" w-full h-full bg-[#14181c] rounded-xl p-2">
            <h2 className="text-xl font-semibold mb-4">Tools & Platforms</h2>
            <div className="flex flex-wrap  gap-2 items-center  ">
              <div className="flex gap-2 border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://cdn-icons-png.flaticon.com/128/25/25231.png"
                  alt="GitHub"
                />
                <h3 className="text-[2vh]">GitHub</h3>
              </div>
              <div className="flex gap-2 border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://images.icon-icons.com/3053/PNG/512/microsoft_visual_studio_code_macos_bigsur_icon_189957.png"
                  alt="VS Code"
                />
                <h3 className="text-[2vh]">VS Code</h3>
              </div>

              <div className="flex gap-2 border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://cdn.iconscout.com/icon/free/png-256/free-postman-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-company-brand-vol-5-pack-logos-icons-2945092.png"
                  alt="Postman"
                />
                <h3 className="text-[2vh]">Postman</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Design & Prototyping */}
        <div className="bg-white/10 p-[0.4vh] rounded-xl shadow-md backdrop-blur-md bg-gradient-to-r from-blue-800 via-purple-500 to-blue-200">
          <div className="  h-full bg-[#14181c] rounded-xl p-2">
            <h2 className="text-xl font-semibold mb-4">Design & Prototyping</h2>
            <div className="flex flex-wrap  gap-2 items-center  ">
              <div className="flex gap-2 border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNcwtKecyjR-Wz57ArpQSVDU3vb6uOcLS5KQ&s"
                  alt="Canva"
                />
                <h3 className="text-[2vh]">Canva</h3>
              </div>
              <div className="flex gap-2 border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <img
                  className="bg-white h-[4.3vh] rounded-full"
                  src="https://play-lh.googleusercontent.com/hoVBnPBRehmXsCqESLXRH2E3OTxklkwKZlb1psn7imm0VUSobn2nevS9RRFWb9GM4-o"
                  alt="Figma"
                />
                <h3 className="text-[2vh]">Figma</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Other Technologies */}
        <div className="bg-white/10 p-[0.4vh] rounded-xl shadow-md backdrop-blur-md bg-gradient-to-r from-blue-800 via-purple-500 to-blue-200">
          <div className="  h-full bg-[#14181c] rounded-xl p-2">
            <h2 className="text-xl font-semibold mb-4">Other Technologies</h2>
            <div className="flex flex-wrap  gap-2 items-center ">
              <div className="flex w-[7.8vw] p-1 border-gray-200 border-2  rounded-xl items-center justify-between">
                <p className="text-sm text-wrap ">JWT (Authentication)</p>
              </div>
              <div className="flex w-[6.5vw] border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <p className="text-sm ">Multer (File Uploads)</p>
              </div>
              <div className="flex w-[6.5vw] border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <p className="text-sm ">Bcrypt (Hashing)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Soft Skills */}
        <div className="bg-white/10 p-[0.4vh] rounded-xl shadow-md backdrop-blur-md bg-gradient-to-r from-blue-800 via-purple-500 to-blue-200">
          <div className=" w-full h-full bg-[#14181c] rounded-xl p-2">
            <h2 className="text-xl font-semibold mb-2">Soft Skills</h2>
            <div className="flex flex-wrap  gap-2 items-center  ">
              <div className="flex w-[6.5vw] border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <p className="text-sm">Startup Thinking</p>
              </div>
              <div className="flex w-[6.5vw] border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <p className="text-sm">Problem Solving</p>
              </div>
              <div className="flex w-[6.5vw] border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <p className="text-sm">Self-learning </p>
              </div>
              <div className="flex w-[6.5vw] border-gray-200 border-2 p-1 rounded-xl items-center justify-between">
                <p className="text-sm">User-Centric Design</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
