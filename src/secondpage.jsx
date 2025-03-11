import { motion } from "framer-motion";

export default function HealthcareServices() {
  const services = [
    { name: "Doctors", icon: "../src/assets/doctor.svg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Labs", icon: "../src/assets/Microscope.svg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Pharmacies", icon: "../src/assets/4.svg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    { name: "Mental Health", icon: "../src/assets/405.svg", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="max-w-6xl pb-48 pt-48 mx-auto p-6"
    >
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-5xl font-bold text-gray-900 pb-6 mb-8 text-center"
      >
        Our Healthcare Services
      </motion.h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.2 }}
            className="flex flex-col p-6 border rounded-xl shadow-lg transition-transform transform hover:scale-105 hover:bg-[#0360D9] hover:text-white cursor-pointer bg-white group"
          >
            <div className="w-20 h-20 flex items-center justify-center bg-[#E1EEFF] rounded-full mb-4">
              <img src={service.icon} alt={service.name} className="w-13 h-13" />
            </div>
            <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
            <p className="text-gray-600 group-hover:text-white">{service.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
