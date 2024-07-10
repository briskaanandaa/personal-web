"use client";

import { motion } from "framer-motion";
import { AuroraBackground } from "./aurorabackground";

export function AuroraBackgroundDemo() {
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
        className="relative flex flex-col items-center justify-center"
      >
        <div className="px-[10%]">
        <div className="text-xl md:text-5xl font-bold text-slate-800 my-2 md:my-4">
          Briska Ananda.
        </div>
        <div className="font-medium text-lg md:text-4xl text-slate-800">
        A happy UI/UX Designer and Web Developer who loves building beautiful web experiences and help others grow in web development.
        </div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
