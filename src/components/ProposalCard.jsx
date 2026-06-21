"use client"
import { baseUrl } from '@/lib/baseUrl';
import React, { useState } from 'react';

const FreelancerProposalCard = ({task}) => {
   
  // Simple state management to handle actions
 


  const getTimeAgo = (date) => {
  const diff = Date.now() - new Date(date).getTime();

  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  if (minutes > 0) return `${minutes} min${minutes > 1 ? "s" : ""} ago`;

  return "Just now";
};




const [status, setStatus] = useState(task?.status || "pending");

const handleReject = () => {
  setStatus("rejected");
};

const handleAccept = async () => {
   

  try {
    const res = await fetch(`${baseUrl}/api/proposals/${task?._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "accepted",
      }),
    });

   

    if (res.ok) {
      setStatus("accepted");
      window.location.reload()
    }
  } catch (error) {
    console.log("ERROR:", error);
  }
};

  return (
    <div className="max-w-4xl mx-auto my-6 p-6 bg-white border border-gray-100 rounded-xl shadow-sm font-sans">
      {/* Top Row: User details and Status badge */}
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2 text-gray-700">
          {/* User Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
          <span className="font-medium text-base">{task?.freelancerEmail}</span>
        </div>

        {/* Dynamic Status Badge */}
        <span className={`${ task?.status === 'pending' && 'border-[#FE9C06] text-[#FE9C06]  bg-[#FE9C06]/9'} ${ task?.status === 'accepted' && 'border-[#01a74c] text-[#01a74c]  bg-[#01a74c]/9'}  ${ task?.status === 'rejected' && 'border-[#ff0000] text-[#ff0000]  bg-[#ff0000]/9'}  text-sm font-medium border capitalize rounded-full px-5 py-1`}>
  {task?.status}
</span>
      </div>

      {/* Second Row: Pricing and Date details */}
      <div className="flex gap-3 text-sm text-gray-500 mb-4 ml-7">
        <span>${task?.proposedBudget}</span>
       <span>{getTimeAgo(task?.createdAt)}</span>
        <span>
  {new Date(task?.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })}
</span>
      </div>

      {/* Third Row: Proposal Message Description */}
      <div className="text-gray-600 text-sm mb-6 ml-7 break-words">
        {task?.coverNote}
      </div>

      {/* Fourth Row: Action Buttons */}
      {task?.status === 'pending' && (
        <div className="flex gap-3 ml-7">
          <button
            onClick={()=>handleAccept('accept')}
            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg text-sm transition-colors duration-200"
          >
            Accept
          </button>
          <button
            onClick={handleReject}
            className="px-6 py-2 bg-gray-50 hover:bg-gray-100 text-rose-600 border border-gray-200 font-medium rounded-lg text-sm transition-colors duration-200"
          >
            Reject
          </button>
        </div>   
      )}
    </div>
  );
};

export default FreelancerProposalCard;