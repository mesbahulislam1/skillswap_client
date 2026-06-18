"use client";

import { motion } from "framer-motion";

/* ---------------- Dummy Data ---------------- */

const latestTasks = [
  {
    id: 1,
    title: "Build Landing Page",
    client: "John Smith",
    category: "Web Dev",
    budget: 250,
    deadline: "2026-06-25",
  },
  {
    id: 2,
    title: "Design Logo",
    client: "Sarah Wilson",
    category: "Design",
    budget: 120,
    deadline: "2026-06-22",
  },
];

const freelancers = [
  {
    id: 1,
    name: "freelancer user 3",
    bio: "i am cool",
    skills: ["python"],
    rate: 29,
  },
  {
    id: 2,
    name: "freelancer user 2",
    bio: "i am the best",
    skills: ["Next js"],
    rate: 40,
  },
  {
    id: 3,
    name: "shan",
    bio: "i am good",
    skills: ["react", "nodejs"],
    rate: 20,
  },
];

const stats = {
  totalTasks: 1200,
  totalUsers: 540,
  totalPayout: 85000,
};

/* ---------------- Page ---------------- */

export default function HomeSections() {
  return (
    <div className="">

     

      {/* ================= How It Works ================= */}
      <section className="py-20 px-4 ">
        
        <h3  className="block bg-gradient-to-r text-center pb-3 font-bold uppercase from-cyan-400 to-blue-500 bg-clip-text text-transparent">How It Works</h3>
        <h2 className="text-4xl text-center mb-9 font-bold">
            Three simple steps
          </h2>


        <div className="grid md:grid-cols-3 gap-9">
          {[
            {
              icon: "📝",
              title: "Post Task",
              desc: "Describe what you need, set your budget and deadline.",
            },
            {
              icon: "📩",
              title: "Get Proposals",
              desc: "Review proposals from freelancers and pick the best fit.",
            },
            {
              icon: "💰",
              title: "Hire & Pay",
              desc: "Approve the work, make secure payment, and leave a review.",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className=" p-6 rounded-2xl cursor-pointer text-center border border-slate-200"
            >
              <div className="text-6xl mb-3">{step.icon}</div>
              <h3 className="font-bold text-2xl mt-1.5">{step.title}</h3>
              <p className="text-sm text-slate-700 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>


    </div>
  );
}