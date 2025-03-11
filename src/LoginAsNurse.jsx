import React from "react";

const LoginAsNurse = () => {
  return (
    <div className="min-h-screen flex items-center mx-12 justify-center p-4">
      <div className="w-full max-w-5xl pt-6 pb-6 flex flex-col md:flex-row">
        {/* Left Section (Image) */}
        <div className="hidden md:flex md:w-1/2 bg-blue-200 p-6 rounded-r-4xl rounded-l-4xl mr-6">
          <div className="flex flex-col items-center w-full">
            <h2 className="text-4xl font-bold pt-10 text-black mb-4">Login as a Nurse</h2>
            <img src="../src/assets/3.svg" alt="Laboratory" className="w-3/4 pt-10" />
          </div>
        </div>

        {/* Right Section (Login Form) */}
        <div className="w-full md:w-1/2 p-6 shadow-2xl rounded-r-4xl rounded-l-4xl">
          <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">Welcome to</h2>

          {/* Login with Google Button */}
          <button className="mb-10 flex items-center justify-center w-full text-black p-3 rounded-2xl shadow-sm transition duration-300 hover:bg-[#A5CCFF] hover:text-white hover:shadow-lg">
            <img src="../src/assets/Google logo.svg" alt="Google" className="w-5 h-5 mr-2" />
            Login with Google
          </button>

          <div className="flex items-center my-8 mt-16">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500">OR</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <form>
            <div className="mb-4">
              <label className="block p-2 text-gray-500">Email:</label>
              <input type="email" className="w-full p-3 border rounded-2xl" placeholder="Enter your email" />
            </div>

            <div className="mb-4 relative">
              <label className="block p-2 text-gray-500">Password:</label>
              <input type="password" className="w-full p-3 border rounded-2xl" placeholder="Enter your password" />
            </div>

            <div className="flex items-center justify-between mb-4">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me
              </label>
              <a href="#" className="text-blue-500 text-sm">Forgot Password?</a>
            </div>

            {/* Updated Login Button to match Google Button */}
            <button className="w-2/4 mx-auto block bg-[#A5CCFF] text-white p-2 rounded-2xl shadow-md font-semibold transition duration-300 hover:bg-[#A5CCFF] hover:text-white hover:shadow-lg">
              Login
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            Don’t have an account? <a href="#" className="text-blue-500">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginAsNurse;
