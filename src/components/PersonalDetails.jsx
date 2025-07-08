import React from "react";

function PersonalDetails() {
  return (
    <div className="min-h-screen w-full snap-center px-8 py-12 bg-[#14181c] rounded-t-[20%] text-white">
      <h1 className="text-4xl font-bold text-center mb-12 underline underline-offset-4">
        Personal Details
      </h1>

      {/* Professional Experience */}
      <div
        id="PersonalDetails"
        className="p-1 rounded-xl mb-10 shadow-md backdrop-blur-md bg-gradient-to-r from-blue-900 via-purple-950 to-blue-600"
      >
        <div className=" bg-[#14181c] p-2   rounded-xl shadow-md backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-2">
            💼 Professional Experience
          </h2>
          <p className="text-lg">Fresher</p>
        </div>
      </div>

      {/* Qualifications */}
      <div className="p-1 rounded-xl mb-10 shadow-md backdrop-blur-md bg-gradient-to-r from-blue-900 via-purple-950 to-blue-600">
        <div className=" bg-[#14181c] p-2   rounded-xl shadow-md backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-4">🎓 Qualifications</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>B.Sc. Anthropology Hons. – IGNOU (Pursuing, 3rd Year)</li>
            <li>
              Diploma in Software Engineering – IICS, Subhash Nagar (2024)
            </li>
            <li>12th – SKV Dharampura, New Delhi (2022–2023)</li>
          </ul>
        </div>
      </div>

      {/* Contact Links */}
      <div className="p-1 rounded-xl mb-10 shadow-md backdrop-blur-md bg-gradient-to-r from-blue-900 via-purple-950 to-blue-600">
        <div className=" bg-[#14181c] p-2   rounded-xl shadow-md backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-4">🌐 Connect With Me</h2>
          <div className="flex flex-col sm:flex-row gap-6 text-lg">
            <a
              href="https://www.linkedin.com/in/kanchan-gupta-64262a2bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition duration-200"
            >
              🔗 LinkedIn Profile
            </a>
            <a
              href="https://github.com/kanchan-gupta23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-white transition duration-200"
            >
              💻 GitHub Profile
            </a>
          </div>
        </div>
      </div>

      {/* Contact Number */}
      <div className="p-1 rounded-xl mb-10 shadow-md backdrop-blur-md bg-gradient-to-r from-blue-900 via-purple-950 to-blue-600">
        <div className=" bg-[#14181c] p-2   rounded-xl shadow-md backdrop-blur-md">
          <h2 className="text-2xl font-semibold mb-2">📱 Contact</h2>
          <p className="text-lg">9810927170</p>
        </div>
      </div>
    </div>
  );
}

export default PersonalDetails;
