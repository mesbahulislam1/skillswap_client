"use client";

import { ListTodo } from "lucide-react";

export default function ClientDashboard() {
  return (
    <div className="max-w-6xl mx-auto p-6 font-sans text-[#1a1a1a]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            Client Dashboard
          </h1>
          <p className="text-sm text-[#71717a] mt-1">
            Manage your tasks and find talented freelancers
          </p>
        </div>

        <button className="flex items-center gap-2 bg-[#0090B5] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-[#b45309]">
          <span className="text-lg">＋</span>
          Post New Task
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        <Card title="Total Tasks" value="0" desc="All tasks created" />
        <Card title="Open Tasks" value="0" desc="Awaiting proposals" />
        <Card title="In Progress" value="0" desc="Currently being worked on" />
        <Card title="Total Spent" value="$0" desc="Total money paid" />
      </div>

      {/* Recent Tasks */}
      <h2 className="text-lg font-semibold mb-4">Recent Tasks</h2>

      <div className="border border-dashed border-[#e4e4e7] rounded-2xl p-12 text-center">
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
    </div>
  );
}

/* Reusable Card Component */
function Card({ title, value, desc }) {
  return (
    <div className="border border-[#f4f4f5] rounded-xl p-5 bg-white shadow-sm flex justify-between items-start">
      <div>
        <p className="text-sm text-[#71717a]">{title}</p>
        <h3 className="text-2xl font-bold mt-1">{value}</h3>
        <p className="text-xs text-[#a1a1aa] mt-1">{desc}</p>
      </div>

      <div className="w-10 h-10 bg-[#d0f2ff] text-[#07a4ff] rounded-lg flex items-center justify-center text-sm">
        <ListTodo></ListTodo>
      </div>
    </div>
  );
}