import React from 'react';
import { ArrowLeft, Pencil, Trash2, Calendar, DollarSign } from 'lucide-react';
import { getTasksOne } from '@/lib/api/tasks/data';

const TaskDetailsPage = async({params}) => {
  const {id} = await params;
  const task = {
    title: "fvgh",
    status: "Open",
    category: "Development",
    budget: "45",
    deadline: "Jul 1, 2026",
    description: "sxdfdxfg",
    proposalsCount: 0
  };

  const tasks = await getTasksOne(id)
  console.log(tasks)

  return (
    <div className="w-[70%] mx-auto  p-6 bg-white min-h-screen font-sans text-slate-800">
      
      {/* Header / Navigation Section */}
      <div className="flex items-center gap-4 mb-6">
        <button className="p-1 hover:bg-slate-100 rounded-full transition-colors" aria-label="Go back">
          <ArrowLeft className="w-6 h-6 text-slate-900" />
        </button>
        <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
          {task.title}
        </h1>
      </div>

      {/* Main Task Details Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm mb-6">
        {/* Meta Badges & Info Row */}
        <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 mb-5">
          <span className="px-3 py-1 bg-blue-50 text-blue-600 font-medium rounded-full text-xs border border-blue-100">
            {task.status}
          </span>
          
          <span className="px-3 py-1 bg-slate-100 text-slate-700 font-medium rounded-full text-xs">
            {task.category}
          </span>
          
          <div className="flex items-center gap-1 ml-2">
            <span className="text-slate-400 font-semibold">$</span>
            <span className="font-medium text-slate-600">${task.budget}</span>
          </div>
          
          <div className="flex items-center gap-1.5 ml-2">
            <Calendar className="w-4 h-4 text-slate-400" />
            <span className="font-medium text-slate-600">{task.deadline}</span>
          </div>
        </div>

        {/* Task Description */}
        <div className="text-slate-600 text-sm mb-6 min-h-[40px]">
          {task.description}
        </div>

        {/* Divider */}
        <hr className="border-slate-100 my-5" />

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium text-sm rounded-xl transition-colors">
            <Pencil className="w-4 h-4" />
            Edit
          </button>
          
          <button className="flex items-center gap-2 px-4 py-2 border border-red-100 bg-red-50 hover:bg-red-100/70 text-red-500 font-medium text-sm rounded-xl transition-colors">
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>
      </div>

      {/* Proposals Section Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
        <h2 className="text-base font-bold text-slate-900 mb-4">
          Proposals ({task.proposalsCount})
        </h2>
        
        {task.proposalsCount === 0 && (
          <p className="text-sm text-slate-400 font-normal">
            No proposals yet. Freelancers will apply soon!
          </p>
        )}
      </div>

    </div>
  );
};

export default TaskDetailsPage;