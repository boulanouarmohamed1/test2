import { motion } from "framer-motion";

export default function HealthcareReviews() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // Adjust when it starts animating
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="mb-60 max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <h2 className="text-5xl mb-12 font-bold text-gray-900">
          <span className="text-[#0360D9]">Rate</span> our healthcare services
        </h2>
        <p className="text-gray-600 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
          viverra amet faucibus.
        </p>
        <div className="flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="flex items-center space-x-0 mb-4"
          >
            {[
              "../src/assets/Ellipse 12.png",
              "../src/assets/Ellipse 11.png",
              "../src/assets/Ellipse 9.png",
              "../src/assets/Ellipse 10.png",
              "../src/assets/Ellipse 8.png",
            ].map((src, index) => (
              <motion.img
                key={index}
                src={src}
                alt="User avatar"
                className="w-10 h-10 rounded-full border border-gray-300"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.6 + index * 0.1 }}
              />
            ))}
          </motion.div>
          <p className="font-semibold text-gray-900 pl-10 pt-2">
            100+ Reviews
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="p-6 border rounded-xl shadow-lg h-8/9 bg-white hover:border-0 hover:bg-[#E1EEFF] hover:scale-103"
      >
        <div className="flex items-center mb-4">
          <img
            src="../src/assets/Ellipse 10.png"
            alt="Jane Cooper"
            className="w-12 h-12 rounded-full border border-gray-300"
          />
          <div className="ml-3">
            <h3 className="text-lg font-semibold">Jane Cooper</h3>
            <p className="text-sm text-gray-500">12/4/17</p>
          </div>
          <p className="ml-auto text-lg font-semibold text-[#0360D9] hover:text-white">
            8.5 <span className="text-black hover:text-white">/ 10</span>
          </p>
        </div>
        <p className="text-xl text-gray-600 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem velit
          viverra amet faucibus. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sem velit viverra amet faucibus.
        </p>
      </motion.div>
    </motion.div>
  );
}
