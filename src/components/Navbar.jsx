"use client";

import { useState, useEffect } from "react";

import { BookOpen, Menu, X, User, LogOut, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";
import { MdOutlineDashboard, MdOutlineWorkOutline } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { authClient } from "@/lib/auth-client";

export function Navbar() {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // const {data: session, isPending} = authClient.useSession()
  // const user = session?.user;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const handelLogout = async()=>{
    await authClient.signOut()
    window.location.reload()
    
  }
  return (
    <nav
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-sm py-2"
          : "bg-slate-50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="p-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl group-hover:scale-105 transition-transform">
                <MdOutlineWorkOutline className="w-6 h-6 text-white" />
              </div>
              <span className="font-extrabold text-2xl  text-slate-700">
                SkillSwap
              </span>
            </Link>
          </div>

          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="/"
              className="font-bold text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/tasks"
              className="font-bold text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              Browse Tasks
            </Link>
            <Link
              href="/freelancers"
              className="font-bold text-sm text-slate-500 hover:text-slate-800 transition-colors"
            >
              Browse Freelancers
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <>
                <Link
                  href={user?.role =='client' && '/dashboard/client' || user?.role == 'freelancer' && '/dashboard/freelancer'}
                  className="font-semibold text-sm flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <MdOutlineDashboard className="text-[18px]" />
                  Dashboard
                </Link>

                <div className="relative group">
                  <div className="flex items-center gap-3 p-1 rounded-full transition-colors border border-transparent hover:border-border">
                    <Image
                      width={40}
                      height={40}
                      src={
                        user?.image ||
                        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=400"
                      }
                      alt="profile"
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-600/10"
                    />
                  </div>
                </div>
                <HiOutlineLogout onClick={handelLogout} className="text-2xl cursor-pointer" />
              </>
            ) : (
              <div className="flex items-center gap-3">
                {/* Sign In Button (outline style) */}
                <Link
                  href="/signin"
                  className="px-5 py-2 font-semibold text-[15px] text-gray-500 hover:text-gray-700  transition-all duration-300"
                >
                  Sign In
                </Link>

                {/* Get Started Button (filled background) */}
                <Link
                  href="/signup"
                  className="px-5 py-2 rounded-[10px] bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:bg-cyan-700 shadow-md transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pt-2 pb-6 space-y-2 bg-white border-b border-slate-200 animate-in slide-in-from-top duration-300">
          <Link
            href="/"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Home
          </Link>
          <Link
            href="/courses"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Browse Tasks
          </Link>
          <Link
            href="/add-course"
            className="block px-4 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 rounded-xl"
          >
            Browse Freelancers
          </Link>
          <div className="pt-4 border-t border-border mt-4">
            {user ? (
              
              <div>
                <Link
                  href="/dashboard/client"
                  className="font-semibold mb-6 text-sm flex items-center gap-2 text-slate-500 hover:text-slate-800 transition-colors"
                >
                  <MdOutlineDashboard className="text-[18px]" />
                  Dashboard
                </Link>
                <div className="flex flex-col gap-2">
                <button onClick={handelLogout} className="block cursor-pointer w-full text-left px-4 py-3 text-base font-medium text-red-500 hover:bg-red-50 rounded-xl">
                  Log Out
                </button>
              </div>
              </div>
            ): (
              <div className="grid grid-cols-2 gap-4">
                <Link
                  href="/signin"
                  className="px-5 py-2 font-semibold text-[15px] text-gray-500 hover:text-gray-700  transition-all duration-300"
                >
                  Sign In
                </Link>

                {/* Get Started Button (filled background) */}
                <Link
                  href="/signup"
                  className="px-5 w-fit py-2 rounded-[10px] bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold hover:bg-cyan-700 shadow-md transition-all duration-300"
                >
                  Get Started
                </Link>
              </div>
            ) 
          }
          </div>
        </div>
      )}
    </nav>
  );
}
