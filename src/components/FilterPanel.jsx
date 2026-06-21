"use client";
import { Button } from "@heroui/react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const FilterPanel = () => {
  const [category, setCategory] = useState();
  const [search, setSearch] = useState();
  const [status, setStatus] = useState();

  console.log(status)
  
 const router = useRouter()
  const handelApplyFilter = async () => {
    const params = new URLSearchParams();
  
    if(search){
      params.set('search', search)
    }
    if (category) {
      params.set('category',category)
    }
    if(status){
      params.set('status', status)
    }

    router.push(`/dashboard/client/tasks?${params.toString()}`)
    
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 ">
      <div className="relative flex-1 max-w-md">
        <Search
          size={18}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />

        <input
        onChange={(e)=> setSearch(e.target.value)}
          type="text"
          placeholder="Search tasks..."
          className="w-full pl-11 pr-4 py-4 bg-white border rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none"
        />
      </div>

      <select
        onChange={(e) => setStatus(e.target.value)}
        name="category"
        required
        className="w-full px-4 py-3 bg-[#f4f4f5] border border-[#e4e4e7] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:bg-white"
      >
        <option value="">All Status</option>
        <option value="open">Open</option>
        <option value="in progress">In Progress</option>
        <option value="completed">Completed </option>
        
      </select>

      <select
        onChange={(e) => setCategory(e.target.value)}
        name="category"
        required
        className="w-full px-4 py-3 bg-[#f4f4f5] border border-[#e4e4e7] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#d97706] focus:bg-white"
      >
        <option value="">Select a category</option>
        <option value="design">Design</option>
        <option value="writing">Writing</option>
        <option value="development">Development </option>
        <option value="marketing">Marketing</option>
        <option value="other">Other</option>
      </select>

      <Button
        onClick={handelApplyFilter}
        className={"py-6 rounded-[9px]  px-8 bg-[#2a9fb4] "}
      >
        Search
      </Button>
    </div>
  );
};

export default FilterPanel;
