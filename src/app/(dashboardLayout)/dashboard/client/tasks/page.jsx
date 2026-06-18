"use client";

import { Search, Plus, Calendar } from "lucide-react";

const tasksData = [
  {
    id: 1,
    title: "cl task",
    description: "cl",
    category: "Writing",
    budget: 200,
    dueDate: "Jun 19, 2026",
    status: "In Progress",
    proposals: 1,
  },
  {
    id: 2,
    title: "02 change",
    description: "0000",
    category: "Development",
    budget: 200,
    dueDate: "Jun 19, 2026",
    status: "Open",
    proposals: 0,
  },
];

export default function MyTasks() {
  const getStatusStyle = (status) => {
    if (status === "In Progress") return "bg-amber-50 text-amber-600";
    if (status === "Completed") return "bg-green-50 text-green-600";
    return "bg-blue-50 text-blue-600";
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 sm:p-10">
      <div className="max-w-8xl mx-auto">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Tasks</h1>
            <p className="text-gray-500 text-sm">
              Manage all your posted tasks
            </p>
          </div>

          <button className="flex items-center gap-2 bg-[#2ea6bb] text-white px-5 py-2.5 rounded-xl text-sm font-medium">
            <Plus size={18} />
            Post New Task
          </button>
        </div>

        {/* FILTERS */}
        <div className="flex flex-col md:flex-row gap-3 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search tasks..."
              className="w-full pl-11 pr-4 py-2.5 bg-white border rounded-xl text-sm focus:ring-2 focus:ring-amber-500 outline-none"
            />
          </div>

          <div className="flex gap-3">
            <select className="px-4 py-2.5 border rounded-xl text-sm">
              <option>All</option>
            </select>

            <select className="px-4 py-2.5 border rounded-xl text-sm">
              <option>All</option>
            </select>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tasksData.map((task) => (
            <div
              key={task.id}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* TOP */}
              <div className="mb-5">
                <div className="flex justify-between">
                  <h3 className="font-semibold text-lg">{task.title}</h3>

                  <span
                    className={`px-3 py-1 text-xs rounded-full font-medium ${getStatusStyle(
                      task.status,
                    )}`}
                  >
                    {task.status}
                  </span>
                </div>

                <p className="text-sm text-gray-400 mt-1">{task.description}</p>
              </div>

              {/* BOTTOM */}
              <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
                <div className="flex items-center gap-3">
                  <span className="bg-gray-100 px-3 py-1 rounded-full text-xs">
                    {task.category}
                  </span>

                  <span className="font-semibold text-gray-700">
                    ${task.budget}
                  </span>

                  <span className="flex items-center gap-1">
                    <Calendar size={14} />
                    {task.dueDate}
                  </span>
                </div>

                <span className="text-xs">{task.proposals} proposals</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
