import React from 'react';
import { Clock, Send, DollarSign, Calendar } from 'lucide-react';

const ActiveProjects = () => {
  // Mock data matching the screenshot
  const projects = [
    {
      id: 1,
      title: "aaaaaaaaaaaaaaaaaaaaaaaaa",
      description: "sdf",
      tag: "Marketing",
      budget: "40",
      dueDate: "Jun 25, 2026",
      client: "mesbahulislam2021@gmail.com",
      status: "In Progress"
    },
    {
      id: 2,
      title: "pppppp lllll nnnnnnn",
      description: "fdhfgvh",
      tag: "Marketing",
      budget: "40",
      dueDate: "Jun 25, 2026",
      client: "mesbahulislam2021@gmail.com",
      status: "In Progress"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 bg-white min-h-screen font-sans">
      {/* Header Section */}
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Active Projects</h1>
        <p className="text-sm text-gray-500 mt-1">2 in progress · 0 completed</p>
      </header>

      {/* Section Sub-heading */}
      <div className="flex items-center space-x-2 mb-6">
        <Clock className="w-5 h-5 text-blue-500" />
        <h2 className="text-lg font-semibold text-gray-900">In Progress</h2>
        <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
          {projects.length}
        </span>
      </div>

      {/* Grid Layout for Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="border border-gray-100 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between"
          >
            {/* Upper Content */}
            <div>
              {/* Title & Badge */}
              <div className="flex justify-between items-start space-x-4 mb-1">
                <h3 className="text-lg font-bold text-gray-900 break-all">
                  {project.title}
                </h3>
                <span className="bg-orange-50 text-orange-500 text-xs font-semibold px-2.5 py-1 rounded-full whitespace-nowrap border border-orange-100">
                  {project.status}
                </span>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm mb-4">{project.description}</p>

              {/* Metadata Badges */}
              <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500 mb-6">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {project.tag}
                </span>
                
                <span className="flex items-center text-emerald-500 font-semibold">
                  <DollarSign className="w-4 h-4 mr-0.5" />
                  {project.budget}
                </span>

                <span className="flex items-center text-gray-400">
                  <Calendar className="w-4 h-4 mr-1" />
                  {project.dueDate}
                </span>
              </div>
            </div>

            {/* Bottom Footer Section */}
            <div className="pt-4 border-t border-gray-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <span className="text-xs text-gray-400 truncate">
                Client: <span className="text-gray-500">{project.client}</span>
              </span>
              <button className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-sm px-4 py-2 rounded-lg transition-colors shadow-sm self-end sm:self-auto">
                <Send className="w-4 h-4 mr-2" />
                Submit Deliverable
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActiveProjects;