"use client";
import Image from "next/image";
import heroImage from "../../../assets/img0.png";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <div className="hero-section bg-mainRed text-white py-10 md:py-16 px-6 md:px-12">
      <div className="max-w-2xl md:max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between space-y-6 md:space-y-0">
        <motion.div
          className="hero-content space-y-4 md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-xl md:text-6xl font-bold leading-tight">
            Banking made easy!
          </h1>
          <p className="text-sm md:text-xl">
            Start your digital banking journey with us and enjoy a seamless
          </p>
          <motion.button
            className="btn bg-white text-mainRed hover:bg-gray-200 px-6 py-2 rounded-md font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Join us
          </motion.button>
        </motion.div>
        <motion.div
          className="mt-0 md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <Image
            src={heroImage}
            alt="hero"
            width={500}
            height={400}
            className="object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
