import React from "react";

const roles = [
  { name: "Healthcare Staff", icon: "../src/assets/doctor.svg" },
  { name: "Patient", icon: "../src/assets/tbib.svg" },
];

const Choose = () => {
  const handleClick = (role) => {
    console.log(`Clicked on: ${role}`);
  };

  return (
    <div className="bg-[#D3E3FC] min-h-screen flex flex-col items-center p-6 relative">
      {/* Top Navigation */}
      <div className="w-full flex justify-between items-center px-8 absolute top-6">
        {/* Logo (Left) */}
        <h1 className="text-4xl font-bold">
          Med<span className="text-blue-600">Track</span>
        </h1>

        {/* Auth Buttons (Right) */}
        <div className="flex space-x-4">
          <button className="border border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition">
            Log in
          </button>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:opacity-80 transition">
            Sign up
          </button>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-7xl font-bold text-center mt-20">
        Welcome to <span className="text-blue-600">MedTrack</span>
      </h2>

      {/* Roles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-60 mt-12">
        {roles.map((role, index) => (
          <div key={index} className="flex flex-col pt-16 items-center">
            {/* Clickable Circle */}
            <div
              onClick={() => handleClick(role.name)}
              className="w-80 h-80 bg-[#AFCBFA] rounded-full flex items-center justify-center shadow-lg cursor-pointer transition-transform transform hover:scale-110 active:scale-95"
            >
              <img src={role.icon} alt={role.name} className="w-52 h-52" />
            </div>
            {/* Role Label */}
            <div className="bg-blue-600 text-white text-3xl z-10 font-bold py-3 px-8 rounded-full -mt-8 shadow-lg">
              {role.name.toLowerCase()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Choose;
