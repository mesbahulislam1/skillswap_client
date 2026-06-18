
import React from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";

const FreelancerDashboard = () => {
  return (
    <div className="pt-5 w-full pr-5">
      <div className="flex items-center justify-between ">
        <div>
          <h2 className="font-bold text-4xl">Freelancer Dashboard</h2>
          <p className="text-[18px] font-medium text-gray-600">
            Track your proposals and earnings
          </p>
        </div>
        <Link href={''} className="bg-[#0092B8] px-4 py-1 text-white font-medium flex items-center gap-2 w-fit rounded-full"><FaSearch></FaSearch>Browse Tasks</Link>
      </div>
      <div></div>
    </div>
  );
};

export default FreelancerDashboard;
