"use client";

import TaskCard from "@/components/TaskCard";
import { getTasks } from "@/lib/api/tasks/data";
import { Search, Plus, Calendar } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const tasksDatas = [
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
 const [tasksData, setTasksData] = useState([]);

  // const getStatusStyle = (status) => {
  //   if (status === "In Progress") return "bg-amber-50 text-amber-600";
  //   if (status === "Completed") return "bg-green-50 text-green-600";
  //   return "bg-blue-50 text-blue-600";
  // };


const getTasks = async () => {
    const res = await fetch("http://localhost:8080/api/tasks");
    return res.json();
  };

  useEffect(() => {
    const loadTasks = async () => {
      const data = await getTasks();
      
      setTasksData(data);
    };

    loadTasks();
  }, []);

  console.log(tasksData)
  

  return (
    <div className="min-h-screen w-full p-6 sm:p-10">
      <div className="max-w-9xl mx-auto ">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Tasks</h1>
            <p className="text-gray-500 text-sm">
              Manage all your posted tasks
            </p>
          </div>

          
            
          
          <Link href={'/dashboard/client/tasks/new'} className="bg-[#2ea6bb] text-white flex items-center gap-1 rounded-full font-medium cursor-pointer text-[13px] px-5 py-1 h-fit">
          <Plus size={18} />
            Post New Task
          </Link>
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
              className="w-full pl-11 pr-4 py-2.5 bg-white border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <div className="flex gap-3 ">
            <select className="px-4 w-[150px] py-2.5 border rounded-xl text-sm">
              <option>All</option>
            </select>

            <select className="px-4 w-[150px] py-2.5 border rounded-xl text-sm">
              <option>All</option>
            </select>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tasksData.map((task, index) => (
            <TaskCard task={task} key={index}></TaskCard>
          ))}
        </div>
      </div>
    </div>
  );
}
