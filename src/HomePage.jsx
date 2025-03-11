import React from "react";

const roles = [
  { name: "Doctor", icon: "../src/assets/doctor.svg" },
  { name: "Nurse", icon: "../src/assets/3.svg" },
  { name: "Laboratory", icon: "../src/assets/2.svg" },
  { name: "Pharmacy", icon: "../src/assets/4.svg" },
];

const HomePage = () => {
  const handleClick = (role) => {
    console.log(`Clicked on: ${role}`);
  };

  return (
    <div className="bg-[#E1EEFF] min-h-screen p-6">
      <div className="inline-block flex justify-start">
        <h1 className="text-4xl font-bold">
          Med<span className="text-blue-600">Track</span>
        </h1>
      </div>

      {/* Heading */}
      <h2 className="text-5xl font-bold text-center mt-8">
        Are <span className="text-blue-600">you</span> a
      </h2>

      {/* Roles Grid - 2 Rows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mt-16 max-w-4xl mx-auto">
        {roles.map((role, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Clickable Circle with Hover Effect */}
            <div
              onClick={() => handleClick(role.name)}
              className="w-64 h-56 bg-blue-300 rounded-full flex items-center justify-center shadow-lg relative cursor-pointer transition-transform transform hover:scale-110 active:scale-95"
            >
              <img src={role.icon} alt={role.name} className="w-36 h-36" />
            </div>
            {/* Role Label */}
            <div className="bg-blue-600 text-white z-10 font-bold text-xl py-3 px-8 rounded-full -mt-8 shadow-lg">
              {role.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
