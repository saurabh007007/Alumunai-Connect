"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../ui/aurora-background";


export  function Main() {
    return (
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
            Alumunai <span className="text-pink-500">Network </span>is Cool.
          </div>
          <div className=" text-base md:text-4xl dark:text-neutral-100 py-4">
            Connect with your college alumni network.
          </div>
          <button className="bg-black dark:bg-pink-400 rounded-full w-fit text-white dark:text-black px-4 py-2">
            Connect Now
          </button>
        </motion.div>
      </AuroraBackground>
    );
  }
  