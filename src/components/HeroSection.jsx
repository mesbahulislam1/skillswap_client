"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden  bg-gradient-to-br">
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full  blur-3xl" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 py-24 lg:py-32">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400"
            >
              🚀 Freelance Micro-Task Marketplace
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-6 text-5xl font-extrabold leading-tight md:text-6xl"
            >
              Get your tasks done by
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                skilled freelancers
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mx-auto mt-6 max-w-xl text-lg text-slate-800 lg:mx-0"
            >
              Post tasks, receive competitive offers from talented freelancers,
              and get your work completed quickly. Freelancers can discover
              opportunities, submit proposals, and grow their earnings.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-10 flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Link
                href="/dashboard/add-task"
                className="group flex items-center justify-center text-white gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:bg-cyan-400"
              >
                Post a Task
                <FaArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/tasks"
                className="rounded-xl border border-slate-700 text-black px-8 py-4 font-semibold  backdrop-blur-md transition-all duration-300 hover:border-cyan-500 hover:bg-cyan-500/10"
              >
                Browse Tasks
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start"
            >
              <div>
                <h3 className="text-2xl font-bold ">10K+</h3>
                <p className="text-slate-800">Tasks Posted</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">5K+</h3>
                <p className="text-slate-800">Freelancers</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold ">98%</h3>
                <p className="text-slate-800">Success Rate</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Card */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <div className="space-y-6">
                <div className="rounded-2xl p-5 border border-black/35">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-black">
                      Website Landing Page Design
                    </h4>
                    <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
                      Open
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-slate-400">
                    Looking for an experienced UI/UX designer to create a modern
                    landing page design.
                  </p>

                  <div className="mt-4 flex justify-between text-sm">
                    <span className="text-slate-700">$150 Budget</span>
                    <span className="text-cyan-400">12 Proposals</span>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-400 p-5">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold ">
                      React Developer Needed
                    </h4>
                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-400">
                      Active
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-slate-800">
                    Build responsive frontend pages using React and Tailwind CSS.
                  </p>

                  <div className="mt-4 flex justify-between text-sm">
                    <span className="text-slate-400">$300 Budget</span>
                    <span className="text-cyan-400">21 Proposals</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -left-8 top-10 rounded-2xl border bg-white border-cyan-500/20  p-4 shadow-xl"
            >
              <h4 className="text-lg font-bold ">500+</h4>
              <p className="text-sm text-slate-800">Tasks Completed Today</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}