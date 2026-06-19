"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const FreelancerUserCard = ({freelancer}) => {

  return (
    <Link href={`/freelancers/${freelancer?._id}`}>
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-lg mx-auto bg-white border border-gray-100 rounded-2xl shadow-md p-8 flex flex-col items-center text-center font-sans hover:shadow-xl"
    >
      {/* Avatar */}
       <Image src={freelancer?.image} width={100} height={100} alt="image" className="rounded-full h-[90px] w-[90px] object-cover"></Image>

      {/* Name */}
      <h2 className="text-[18px] font-bold text-gray-900 ">
        {freelancer?.name}
      </h2>

      {/* Bio */}
      <p className="text-gray-500 text-sm  line-clamp-2 mt-1 ">
        {freelancer?.bio}
      </p>

      {/* Skill */}
      

      <div className="flex gap-1 flex-wrap my-1">
        {
        freelancer?.skill?.split(",").map(i=> {
          return  <motion.div key={i}
        whileHover={{ scale: 1.08 }}
        className=" border border-green-100 bg-green-50 text-green-700 rounded-full px-3 capitalize py-1 text-[10px] font-medium"
      >
        {i}
      </motion.div>
        })
      }
      </div>

      {/* Rate */}
      <div className="text-[#029CFF] font-bold text-xl">
        ${freelancer?.hourlyRate}/hr
      </div>
    </motion.div>
    </Link>
  );
};

export default FreelancerUserCard;