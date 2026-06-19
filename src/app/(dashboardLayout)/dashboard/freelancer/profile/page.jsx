"use client";
import { authClient } from "@/lib/auth-client";
import {
  Briefcase,
  Calendar,
  DollarSign,
  Edit,
  Mail,
  MapPin,
  Star,
} from "lucide-react";
import Image from "next/image";
import { FaFacebook, FaGithub } from "react-icons/fa";

export default function ProfilePage() {
  const skills = [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Express",
    "Tailwind CSS",
  ];

  const portfolio = [
    {
      title: "TaskHive Marketplace",
      description: "A freelance task marketplace built with Next.js.",
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with payment system.",
    },
    {
      title: "School Management System",
      description: "Modern dashboard for managing students and teachers.",
    },
  ];

  const reviews = [
    {
      name: "John Smith",
      rating: 5,
      comment: "Excellent work! Delivered on time and exceeded expectations.",
    },
    {
      name: "Sarah Johnson",
      rating: 5,
      comment: "Professional developer. Highly recommended.",
    },
  ];

  const { data: session } = authClient.useSession();

  const user = session?.user;

  console.log(user);

  return (
    <div className="min-h-screen bg-slate-100">
      {/* Cover Section */}
      <div className="h-72 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

      <div className="max-w-7xl mx-auto px-4 lg:px-8 -mt-32 pb-10">
        <div className="grid lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl shadow-lg p-6 sticky top-6">
              <div className="flex flex-col items-center">
                <Image
                  src={user?.image || "https://i.pravatar.cc/300"}
                  alt="profile"
                  width={70}
                  height={70}
                  className="w-36 h-36 rounded-full border-4 border-white shadow-lg object-cover"
                />

                <h2 className="text-2xl font-bold mt-4">{user?.name}</h2>

                <p className="text-gray-500">{user?.role}</p>

                <button className="flex items-center gap-2 mt-4 bg-black text-white px-5 py-2 rounded-xl hover:bg-gray-800 transition">
                  <Edit size={18} />
                  Edit Profile
                </button>
              </div>

              <div className="border-t my-6" />

              <div className="space-y-4 text-gray-600">
                <div className="flex items-center gap-3">
                  <Mail size={18} />
                  <span>{user?.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={18} />
                  <span>Dhaka, Bangladesh</span>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar size={18} />
                  <span>
                    {new Date(user?.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Star size={18} />
                  <span>4.9 Rating</span>
                </div>
              </div>

              <div className="border-t my-6" />

              {/* Skills */}
              {
                user?.role == 'freelancer' && <div>
                <h3 className="font-bold text-lg mb-4">Skills</h3>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              }

              <div className="border-t my-6" />

              {/* Social Links */}
              <div>
                <h3 className="font-bold text-lg mb-4">Social Links</h3>

                <div className="flex gap-3">
                  <button className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200">
                    <FaGithub></FaGithub>
                  </button>

                  <button className="p-3 rounded-xl bg-slate-100 hover:bg-slate-200">
                    <FaFacebook></FaFacebook>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Stats */}
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-white rounded-2xl shadow p-5">
                <Briefcase className="mb-2" />
                <h3 className="text-3xl font-bold">24</h3>
                <p className="text-gray-500">Completed Tasks</p>
              </div>

              <div className="bg-white rounded-2xl shadow p-5">
                <Briefcase className="mb-2" />
                <h3 className="text-3xl font-bold">5</h3>
                <p className="text-gray-500">Active Projects</p>
              </div>

              <div className="bg-white rounded-2xl shadow p-5">
                <DollarSign className="mb-2" />
                <h3 className="text-3xl font-bold">$1,250</h3>
                <p className="text-gray-500">Total Earnings</p>
              </div>

              <div className="bg-white rounded-2xl shadow p-5">
                <Star className="mb-2" />
                <h3 className="text-3xl font-bold">4.9</h3>
                <p className="text-gray-500">Rating</p>
              </div>
            </div>

            {/* About */}
            <div className="bg-white rounded-3xl shadow p-6">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>

              <p className="text-gray-600 leading-7">
                Passionate frontend developer with experience building modern
                web applications using React, Next.js, Tailwind CSS, Node.js and
                MongoDB. I focus on creating responsive, scalable and
                user-friendly solutions for clients worldwide.
              </p>
            </div>

            {/* Portfolio */}
            <div className="bg-white rounded-3xl shadow p-6">
              <h2 className="text-2xl font-bold mb-5">Portfolio</h2>

              <div className="grid md:grid-cols-2 gap-4">
                {portfolio.map((project, index) => (
                  <div
                    key={index}
                    className="border rounded-2xl p-5 hover:shadow-md transition"
                  >
                    <h3 className="font-semibold text-lg">{project.title}</h3>

                    <p className="text-gray-500 mt-2">{project.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-3xl shadow p-6">
              <h2 className="text-2xl font-bold mb-5">Client Reviews</h2>

              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="border rounded-2xl p-5">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">{review.name}</h4>

                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="fill-yellow-400 text-yellow-400"
                          />
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 mt-2">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
