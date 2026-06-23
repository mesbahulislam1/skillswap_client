import { getProposol } from "@/lib/api/proposal/data";
import { getUser } from "@/lib/api/user/session";
import React from "react";

const MyProposals = async () => {
  // Mock data matching the details from Screenshot_20-6-2026_104936_taskhive-eight-phi.vercel.app.jpeg

  const user = await getUser();

  const proposals = await getProposol(user?.email);


  return (
    <div className="w-[90%] mx-auto p-8 bg-white min-h-screen font-sans">
      {/* Header section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
          My Proposals
        </h1>
        <p className="text-sm text-gray-400 mt-1">0 proposals submitted</p>
      </header>

      {/* Proposals list stacked vertically */}
      <div className="space-y-4">
        {proposals.map((proposal) => (
          <div
            key={proposal?._id}
            className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm flex justify-between items-start"
          >
            {/* Left Side Content */}
            <div className="space-y-1.5">
              <h2 className="text-lg font-bold text-gray-900 break-all">
                {proposal?.taskTitle}
              </h2>
              <p className="text-gray-400 text-sm font-normal">
                {proposal?.coverNote}
              </p>

              {/* Proposal Metadata Line */}
              <div className="flex flex-wrap items-center gap-3 pt-2 text-sm text-gray-400">
                <span className="font-bold text-gray-900">
                  ${proposal?.proposedBudget}
                </span>
                <span>{proposal.duration}</span>
                <span>{proposal?.createdAt}</span>
                <span className="font-medium">
                  Task budget: ${proposal.taskBudget}
                </span>
              </div>
            </div>

            {/* Right Side Status Badge */}
            <div>
              <span
                className={`capitalize ${proposal?.status === "pending" && "bg-yellow-600/12 text-yellow-600 border-yellow-400"} ${proposal?.status === "accepted" && "bg-[#0092B8]/10 text-[#0092B8] border-[#0092B8]"} ${proposal?.status === "completed" && "bg-green-600/10 text-green-400 border-green-500"}  border text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap`}
              >
                {proposal?.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyProposals;
