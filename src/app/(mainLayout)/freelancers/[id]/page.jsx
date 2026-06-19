import React from "react";
import { Briefcase, DollarSign, Calendar } from "lucide-react";
import { getFreelancerUserDetails } from "@/lib/api/user/session";
import Image from "next/image";

const FreelancerDetails = async ({ params }) => {
  const { id } = await params;
  // Fallback mock data matching Screenshot_19-6-2026_222617_taskhive-eight-phi.vercel.app.jpeg
  const data = await getFreelancerUserDetails(id);

  return (
    <div className="max-w-5xl mx-auto p-6 border rounded-2xl bg-slate-50/50 min-h-screen dynamic-font">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-8">
        {/* Initials Avatar */}
        <Image src={data?.image} width={90} height={90} className="h-[80px] w-[80px] rounded-full object-cover" alt="profile image"></Image>

        {/* Name and Meta Stats */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
            {data?.name}
          </h1>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-gray-500 text-sm font-medium">
            <div className="flex items-center gap-1.5">
              <Briefcase className="w-4 h-4" />
              <span>0 jobs completed</span>
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="w-4 h-4 -mr-0.5" />
              <span>${data?.hourlyRate}/hr</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              <span>
                Joined{" "}
                {new Date(data?.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Two-Column Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Columns (About & Reviews) */}
        <div className="md:col-span-2 flex flex-col gap-6">
          {/* About Section Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100/80 shadow-sm/5">
            <h2 className="text-xl font-bold text-gray-900 mb-4">About</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              {data?.bio}
            </p>
          </div>

          {/* Reviews Section Card */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100/80 shadow-sm/5">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Reviews (0)</h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              No reviews yet
            </p>
          </div>
        </div>

        {/* Right Column (Skills Card) */}
        <div className="md:col-span-1">
          <div className="bg-white p-6 rounded-2xl border border-gray-100/80 shadow-sm/5">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {data?.skill?.split(",").map((skill, index)=>{
                return <span
                  key={index}
                  className="bg-gray-100/80 text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full"
                >
                  {skill.trim()}
                </span>
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerDetails;
