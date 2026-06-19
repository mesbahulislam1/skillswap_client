"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-18  px-9 sm:px-15 md:px-20 bg-gradient-to-r from-cyan-400/10 rounded-2xl border border-cyan-300 to-blue-500/10 ">
      <div className="  text-center">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-900"
        >
          Ready to get started?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-500 mt-4 text-lg"
        >
          Join TaskHive today and start posting tasks or finding work. Free to sign up.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <div className="flex justify-center ">
            <button className="px-8 py-4 hover:scale-108 rounded-2xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-all flex items-center gap-2 duration-300 shadow-lg">
            Create Your Account <ArrowRight></ArrowRight>
          </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}