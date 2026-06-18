"use client";

import { motion } from "framer-motion";

const categories = [
  {
    name: "Design",
    icon: "🎨",
    desc: "UI/UX, Logo, Branding",
  },
  {
    name: "Writing",
    icon: "✍️",
    desc: "Blog, SEO, Content",
  },
  {
    name: "Development",
    icon: "💻",
    desc: "Web, App, Backend",
  },
  {
    name: "Marketing",
    icon: "📢",
    desc: "SEO, Ads, Social Media",
  },
  {
    name: "Other",
    icon: "📦",
    desc: "Miscellaneous tasks",
  },
];

export default function Categories() {
  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="max-w-7xl mx-auto px-4">
         <h1  className="block bg-gradient-to-r text-center pb-3 font-bold uppercase from-cyan-400 to-blue-500 bg-clip-text text-transparent">Categories</h1>
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Popular Categories
          </h2>
          <p className="text-gray-500 mt-3">
            Explore tasks by category and find your perfect match.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center cursor-pointer hover:shadow-lg hover:border-cyan-400 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>

              <h3 className="font-bold text-lg">
                {cat.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {cat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}