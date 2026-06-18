"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

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
    name: "freelancer user 1",
    bio: "i am a good freelancer",
    skills: ["React"],
    rate: 50,
  },
  {
    id: 4,
    name: "shan",
    bio: "i am good",
    skills: ["react", "nodejs"],
    rate: 20,
  },
];

export default function TopFreelancers() {
  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          
          <h1  className="block bg-gradient-to-r text-center pb-3 font-bold uppercase from-cyan-400 to-blue-500 bg-clip-text text-transparent">Freelancers</h1>

          <h2 className="text-4xl font-bold ">
            Top Freelancers
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {freelancers.map((freelancer) => (
            <div
              key={freelancer.id}
              className="bg-base-200 rounded-2xl p-6 border border-base-300 hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-4">
                {freelancer.name.charAt(0).toUpperCase()}
              </div>

              <h3 className="font-bold text-lg">
                {freelancer.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {freelancer.bio}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {freelancer.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="badge badge-outline"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="mt-5 pt-4 border-t border-base-300 flex justify-between items-center">
                <span className="font-bold text-primary">
                  ${freelancer.rate}/hr
                </span>

                <button className="btn btn-sm btn-primary">
                  Hire
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
            <Link href={'/'} className="block bg-gradient-to-r hover:text-cyan-600 text-center pb-3 font-medium from-cyan-400 to-blue-500 bg-clip-text flex items-center gap-2  hover:gap-3 transition-all text-transparent w-fit">View All Freelancers <FaArrowRight className="text-cyan-500"></FaArrowRight></Link>

        </div>
      </div>
    </section>
  );
}