import React from "react";
import { motion } from "framer-motion";

const HealthcareChat = () => {
  return (
    <div className="pt-28 pb-28">
      {/* Chat Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="bg-[#E1EEFF] max-w-6xl mx-auto p-12 flex flex-col md:flex-row items-center md:items-start justify-between rounded-4xl pt-32 space-y-6 md:space-y-0 md:space-x-6"
      >
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex-1 text-center pt-42 md:text-left"
        >
          <h1 className="text-5xl font-bold">
            <span className="text-blue-600">Chat</span> with your Patients
          </h1>
          <p className="text-gray-600 pt-20 mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit viverra amet faucibus.
          </p>

          {/* User Images */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
            className="justify-center pt-16 pb-16 flex items-center space-x-2 mt-4"
          >
            {[
              "../src/assets/Ellipse 8.png",
              "../src/assets/Ellipse 10.png",
              "../src/assets/Ellipse 11.png",
              "../src/assets/Ellipse 9.png",
              "../src/assets/Ellipse 12.png",
            ].map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt={`User ${index + 1}`}
                className="w-10 h-10 rounded-full"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 + index * 0.1 }}
              />
            ))}
            <p className="font-semibold text-gray-900 pl-10">100+ Reviews</p>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex-1 flex justify-center"
        >
          <img src="../src/assets/m.png" alt="Review" className="w-2/3 pb-16 rounded-5xl max-w-md" />
        </motion.div>
      </motion.div>

      {/* MedTrack Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="pt-16"
      >
        <h1 className="leading-normal p-20 space-y-6 text-6xl pt-24 text-center font-semibold font-[\'IBM Plex Sans\'] relative">
          Choose{" "}
          <span className="relative">
            Med<span className="text-blue-600">Track</span>
            <img
              src="../src/assets/vector 8.svg"
              alt="underline"
              className="absolute left-0 bottom-0 w-full h-auto"
              style={{ bottom: "-10px" }}
            />
          </span>
          , choose professionalism
        </h1>
      </motion.div>
    </div>
  );
};

export default HealthcareChat;
