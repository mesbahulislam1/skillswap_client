"use client"
import React, { useState } from 'react';
import { ChevronDown, Trash2 } from 'lucide-react';

export default function TaskManagement() {
  const [filterCategory, setFilterCategory] = useState('all');
  const [filterStatus, setFilterStatus] = useState('all');

  const tasks = [
    {
      id: 1,
      title: "Dignissimos quibusdam",
      category: "Writing",
      client: "hohi@mailinator.com",
      budget: "$58",
      status: "Open",
      proposals: 1,
      created: "Jun 21, 2026"
    },
    {
      id: 2,
      title: "ooooooopppp",
      category: "Marketing",
      client: "mesbahulislam2021@gmail.com",
      budget: "$45",
      status: "In Progress",
      proposals: 1,
      created: "Jun 21, 2026"
    },
    {
      id: 3,
      title: "sssssssssss",
      category: "Development",
      client: "mesbahulislam2021@gmail.com",
      budget: "$545",
      status: "Completed",
      proposals: 2,
      created: "Jun 21, 2026"
    },
    {
      id: 4,
      title: "ttttttttttttt",
      category: "Development",
      client: "mesbahulislam2021@gmail.com",
      budget: "$55",
      status: "Completed",
      proposals: 1,
      created: "Jun 20, 2026"
    },
    {
      id: 5,
      title: "ooooooooooo",
      category: "Development",
      client: "mesbahulislam2021@gmail.com",
      budget: "$400",
      status: "Completed",
      proposals: 2,
      created: "Jun 20, 2026"
    }
  ];

  const getStatusStyles = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-blue-50 text-blue-600 border border-blue-200';
      case 'In Progress':
        return 'bg-amber-50 text-amber-600 border border-amber-200';
      case 'Completed':
        return 'bg-emerald-50 text-emerald-600 border border-emerald-200';
      default:
        return 'bg-gray-50 text-gray-600 border border-gray-200';
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-white font-sans select-none">
      {/* Title Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-950 tracking-tight">Task Management</h1>
        <p className="text-gray-500 text-sm mt-1">21 total tasks</p>
      </div>

      {/* Filter Dropdowns */}
      <div className="flex gap-3 mb-6">
        <div className="relative w-28">
          <select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            className="w-full pl-3 pr-8 py-1.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 appearance-none focus:outline-none cursor-pointer"
          >
            <option value="all">all</option>
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
        </div>

        <div className="relative w-28">
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="w-full pl-3 pr-8 py-1.5 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700 appearance-none focus:outline-none cursor-pointer"
          >
            <option value="all">all</option>
          </select>
          <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
        </div>
      </div>

      {/* Table Container */}
      <div className="w-full border border-gray-100 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-100 text-gray-800 font-semibold text-sm">
              <th className="p-4 font-semibold">Title</th>
              <th className="p-4 font-semibold">Category</th>
              <th className="p-4 font-semibold">Client</th>
              <th className="p-4 font-semibold">Budget</th>
              <th className="p-4 font-semibold">Status</th>
              <th className="p-4 font-semibold text-center">Proposals</th>
              <th className="p-4 font-semibold">Created</th>
              <th className="p-4 font-semibold text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100/70">
            {tasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50/40 transition-colors text-sm text-gray-900">
                {/* Title */}
                <td className="p-4 font-semibold max-w-[200px] truncate">{task.title}</td>
                
                {/* Category Pill */}
                <td className="p-4">
                  <span className="bg-gray-100 text-gray-600 px-2.5 py-0.5 rounded-full text-xs font-medium">
                    {task.category}
                  </span>
                </td>
                
                {/* Client Email */}
                <td className="p-4 text-gray-400 font-normal">{task.client}</td>
                
                {/* Budget */}
                <td className="p-4 font-medium">{task.budget}</td>
                
                {/* Status Colored Pill */}
                <td className="p-4">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium inline-block ${getStatusStyles(task.status)}`}>
                    {task.status}
                  </span>
                </td>
                
                {/* Proposals Count */}
                <td className="p-4 text-center font-normal">{task.proposals}</td>
                
                {/* Created Date */}
                <td className="p-4 text-gray-400 font-normal whitespace-nowrap">{task.created}</td>
                
                {/* Actions Button */}
                <td className="p-4 text-center">
                  <button className="text-rose-400 hover:text-rose-600 transition-colors inline-flex items-center justify-center p-1">
                    <Trash2 className="w-4 h-4 stroke-[1.75]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}