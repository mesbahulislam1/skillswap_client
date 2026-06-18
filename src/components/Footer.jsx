"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="  pt-25 pb-8">
      <div className="max-w-7xl mx-auto px-4">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl group-hover:scale-105 transition-transform">
                
                <MdOutlineWorkOutline className="w-6 h-6 text-white"/>
              </div>
              <span className="font-extrabold text-2xl  text-slate-700">
                SkillSwap
              </span>
            </Link>
            <p className="text-gray-500 mt-3 text-sm leading-relaxed">
              Connect with skilled freelancers or find micro-tasks to grow your career.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">
              Navigation
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link className="hover:text-black" href="/">Home</Link></li>
              <li><Link className="hover:text-black" href="/tasks">Browse Tasks</Link></li>
              <li><Link className="hover:text-black" href="/freelancers" >Freelancers</Link></li>
              <li><Link className="hover:text-black" href="/signin">Sign In</Link></li>
              <li><Link className="hover:text-black"  href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">
              Contact
            </h3>

            <div className="text-sm text-gray-600 space-y-2">
              <p>support@taskhive.com</p>
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">
              Follow Us
            </h3>

            <div className="flex gap-3 text-lg">
              <a className="hover:text-cyan-600 transition cursor-pointer text-2xl"><FaTwitter></FaTwitter></a>
              <a className="hover:text-cyan-600 transition cursor-pointer text-2xl"><FaFacebook></FaFacebook></a>
              <a className="hover:text-cyan-600 transition cursor-pointer text-2xl"><FaLinkedin></FaLinkedin></a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500"
        >
          © 2026 TaskHive. All rights reserved.
        </motion.div>

      </div>
    </footer>
  );
}