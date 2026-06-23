import React from "react";
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
import { Plus } from "lucide-react";
import { getProposol, getProposolPending } from "@/lib/api/proposal/data";
import { getUser } from "@/lib/api/user/session";

const FreelancerDashboard = async() => {
  const user = await getUser()
  const proposol = await getProposol(user?.email)
  const proposolPending = await getProposolPending(user?.email)
  return (
    <div className="max-w-5xl mx-auto p-6 font-sans text-[#1a1a1a]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
        <div>
          <h2 className="font-bold text-4xl">Freelancer Dashboard</h2>
          <p className="text-[18px] font-medium text-gray-600">
            Track your proposals and earnings
          </p>
        </div>

        <Link
          href={"/dashboard/client/tasks/new"}
          className="bg-[#2ea6bb] text-white flex items-center gap-1 rounded-full font-medium cursor-pointer text-[13px] px-5 py-1 h-fit"
        >
          <Plus size={18} />
          Post New Task
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        <Card title="Total Proposals" value={proposol?.length} desc="All tasks created" />
        <Card title="Pending" value={proposolPending?.length} desc="Awaiting proposals" />
        <Card title="Accepted" value="0" desc="Currently being worked on" />
        <Card title="Total Earned" value="$0" desc="Total money paid" />
      </div>

      {/* Recent Tasks */}
      <h2 className="text-lg font-semibold mb-4">Recent Tasks</h2>
      {/* {
                tasksData ? <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {
                  tasksData.slice(0,2).map(task=>  {
                    return <ProposlCard task={task} key={task?._id}></ProposlCard>
                  })
                }
              </div> : <div className="border border-dashed border-[#e4e4e7] rounded-2xl p-12 text-center">
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-[#f4f4f5] flex items-center justify-center">
                  📋
                </div>
        
                <h3 className="text-lg font-semibold mb-1">No tasks yet</h3>
                <p className="text-sm text-[#71717a] mb-5">
                  Post your first task to find talented freelancers
                </p>
        
                <button className="bg-[#d97706] text-white px-5 py-2 rounded-xl text-sm hover:bg-[#b45309]">
                  Post a Task
                </button>
              </div> 
              
                
              } */}
    </div>
  );
};

export default FreelancerDashboard;

function Card({ title, value, desc }) {
  return (
    <div className="border border-[#f4f4f5] rounded-xl p-5 bg-white shadow-sm flex justify-between items-start">
      <div>
        <p className="text-sm text-[#71717a]">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <p className="text-xs text-[#a1a1aa] mt-1">{desc}</p>
      </div>

      <div className="w-10 h-10 bg-[#d0f2ff] text-[#07a4ff] rounded-lg flex items-center justify-center text-sm"></div>
    </div>
  );
}
