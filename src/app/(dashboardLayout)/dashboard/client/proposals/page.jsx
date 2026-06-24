import React from "react";
import { DollarSign, Clock, Calendar } from "lucide-react"; // Optional: Use any icon library you prefer
import { getManageProposol } from "@/lib/api/proposal/data";





const ManageProposals = async () => {
  // Mock data based on your screenshot
  // const proposals = [
  //   {
  //     id: 1,
  //     title: 'tttttttttttt',
  //     status: 'Accepted',
  //     email: 'ms7623908@gmail.com',
  //     description: 'Submit a Proposal',
  //     bidAmount: 50,
  //     duration: '5 days',
  //     date: 'Jun 20, 2026',
  //   },
  //   {
  //     id: 2,
  //     title: 'oooooooooooo',
  //     status: 'Accepted',
  //     email: 'qisykapa@mailinator.com',
  //     description: 'Aliquid dolores dolo',
  //     bidAmount: 4,
  //     duration: '23 days',
  //     date: 'Jun 20, 2026',
  //   },
  // ];

  const user = await getUser();
  const proposals = await getManageProposol(user?.email);

  return (
    <div className="w-full p-8 font-sans antialiased text-[#111827]">
      {/* Header Section */}
      <div className=" w-full mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-black mb-1">
          Manage Proposals
        </h1>
        <p className="text-gray-500 text-sm">
          Review and respond to freelancer proposals
        </p>
      </div>

      {/* Proposals List */}
      {
        proposals.length > 0 ? <div className=" space-y-6">
        {proposals.map((proposal) => (
          <div
            key={proposal._id}
            className="bg-white border border-[#f0f0f0] rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            {/* Title & Status */}
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-lg font-bold text-black tracking-wide break-all">
                {proposal?.taskTitle}
              </h2>
              <span className={` ${proposal?.status === 'pending' && 'bg-[#ff6600dc]/10 border-[#ff6600dc] text-[#ff6600dc]'}  ${proposal?.status === 'completed' && 'bg-[#e6f7ed] border-[#d1f2e0] text-[#10b981]'} ${proposal?.status === 'rejected' && 'bg-[#ff0202]/7 text-[#ff0202] border-[#ff0202]/7'} capitalize text-xs font-semibold px-2.5 py-0.5 rounded-full border `}>
                {proposal?.status}
              </span>
            </div>

            {/* Email */}
            <p className="text-sm font-medium text-gray-700 mb-4">
              from{" "}
              <span className="font-semibold text-black">
                {proposal?.freelancerEmail}
              </span>
            </p>

            {/* Description Box */}
            <div className="bg-[#fcfcfc] border border-[#f5f5f5] rounded-xl p-4 mb-5 min-h-[50px] flex items-center">
              <p className="text-gray-500 text-sm">{proposal?.coverNote}</p>
            </div>

            {/* Footer Metrics */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
              {/* Bid */}
              <div className="flex items-center gap-1.5">
                <DollarSign className="w-4 h-4 text-gray-400" />
                <span>Bid:</span>
                <span className="text-[#10b981] font-bold">
                  ${proposal?.proposedBudget}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-gray-400" />
                <span>{proposal?.estimatedDays} days</span>
              </div>

              {/* Date */}
              <div className="flex items-center gap-1.5">
                {/* Optional: You can add an icon here if needed */}
                <span>
                  {new Date(proposal?.createdAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div> : <div className="text-2xl font-medium text-center mt-29 text-gray-500">
        Proposals Not Found
      </div>
      }
      
    </div>
  );
};

export default ManageProposals;
