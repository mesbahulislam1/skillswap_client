import { baseUrl } from "@/lib/baseUrl";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BrowseFreelancers = async () => {
  const res = await fetch(`${baseUrl}/api/freelancers`);
  const FreelancerUser = await res.json()
  

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 font-sans">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-extrabold text-black mb-2">
          Browse Freelancers
        </h1>

        <div className="flex items-center justify-between">
          <p className="text-gray-500 text-lg">
            Find skilled professionals for your tasks
          </p>

          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-semibold border border-gray-200">
            Total Freelancers: {FreelancerUser?.length}
          </span>
        </div>
      </div>

      {/* Freelancers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FreelancerUser?.map((freelancer) => (
          <div
            key={freelancer?._id}
            className="
              group
              border border-gray-100
              hover:border-blue-300
              rounded-2xl
              p-6
              bg-white
              flex flex-col justify-between
              h-64
              shadow-sm
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
              ease-in-out
              cursor-pointer
            "
          >
            <div>
              {/* Avatar + Name */}
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={freelancer?.image || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'}
                  width={80}
                  height={80}
                  alt={freelancer?.name || "Freelancer"}
                  className="
                    w-[60px]
                    h-[60px]
                    rounded-full
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <div>
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-gray-900
                      transition-colors
                      duration-300
                      group-hover:text-blue-600
                    "
                  >
                    {freelancer?.name}
                  </h3>

                  <div className="flex items-center text-xs text-gray-400 mt-1">
                    <svg
                      className="w-3.5 h-3.5 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4.674 12a3 3 0 004.652 0M3 10.25a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8z"
                      />
                    </svg>

                    {freelancer?.jobs || 0} jobs completed
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-500 text-sm mb-4 line-clamp-2">
                {freelancer?.bio || "No bio available"}
              </p>

              {/* Skill */}
              <span
                className="
                  inline-block
                  border
                  border-gray-200
                  text-gray-700
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  bg-gray-50
                  transition-all
                  duration-300
                  group-hover:bg-blue-50
                  group-hover:border-blue-200
                  group-hover:text-blue-600
                "
              >
                {freelancer?.skill || "General"}
              </span>
            </div>

            {/* Rate */}
            <div className="mt-4 flex items-center justify-between">
              <span
                className="
                  text-blue-600
                  font-bold
                  text-lg
                  transition-all
                  duration-300
                  group-hover:scale-105
                "
              >
                ${freelancer?.hourlyRate || 0}/hr
              </span>

              <Link href={`/freelancers/${freelancer?._id}`}
                className="
                  opacity-0
                  translate-x-3
                  group-hover:opacity-100
                  group-hover:translate-x-0
                  transition-all
                  duration-300
                  bg-blue-600
                  text-white
                  px-4
                  py-2
                  rounded-lg
                  text-sm
                  font-medium
                "
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseFreelancers;