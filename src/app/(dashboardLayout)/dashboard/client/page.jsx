"use client";

import TaskCard from "@/components/TaskCard";
import { authClient } from "@/lib/auth-client";
import { ListTodo, Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ClientDashboard() {
  const { 
        data: session, 
        isPending, //loading state
        error, //error object
        refetch //refetch the session
    } = authClient.useSession()
    const user = session?.user; 


  const [tasksData, setTasksData] = useState([]);
  const getTasks = async () => {
      const res = await fetch(`http://localhost:8080/api/tasks/total/${user?.email}`);
      return res.json();
    };
  
    useEffect(() => {
      const loadTasks = async () => {
        const data = await getTasks();
        
        setTasksData(data);
      };
  
      loadTasks();
    }, []);

 
  return (
    <div className="max-w-5xl mx-auto p-6 font-sans text-[#1a1a1a]">
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
        <Card title="Total Tasks" value={tasksData?.length} desc="All tasks created" />
        <Card title="Open Tasks" value="0" desc="Awaiting proposals" />
        <Card title="In Progress" value="0" desc="Currently being worked on" />
        <Card title="Total Spent" value="$0" desc="Total money paid" />
      </div>

      {/* Recent Tasks */}
      <h2 className="text-lg font-semibold mb-4">Recent Tasks</h2>
      {
        tasksData ? <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {
          tasksData.slice(0,2).map(task=>  {
            return <TaskCard task={task} key={task?._id}></TaskCard>
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
      
        
      }
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
