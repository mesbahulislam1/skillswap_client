"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Post Tasks Easily",
    desc: "Describe your task, set a budget and deadline. Freelancers apply in minutes.",
    icon: "📝",
  },
  {
    title: "Find Top Talent",
    desc: "Browse proposals from skilled freelancers. Compare budgets and timelines.",
    icon: "🎯",
  },
  {
    title: "Secure Payments",
    desc: "Pay only when the task is done. Funds are held safely until you approve.",
    icon: "🔒",
  },
  {
    title: "Reviews & Ratings",
    desc: "Build trust through honest reviews. Rate freelancers and get rated as a client.",
    icon: "⭐",
  },
  {
    title: "Lightning Fast",
    desc: "No complex bidding wars. Post a task, pick a freelancer, done.",
    icon: "⚡",
  },
  {
    title: "Role-Based Access",
    desc: "Dedicated dashboards for clients, freelancers, and admins.",
    icon: "👥",
  },
];

export default function Features() {
  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-4">
        <h1  className="block bg-gradient-to-r pb-3 text-center font-bold uppercase from-cyan-400 to-blue-500 bg-clip-text text-transparent">Features</h1>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Everything you need to succeed
          </h2>
          <p className="text-slate-400 mt-3">
            Powerful tools to help clients and freelancers work faster.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className=" border border-gray-200 rounded-2xl p-6 hover:-translate-y-2 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-slate-700 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}