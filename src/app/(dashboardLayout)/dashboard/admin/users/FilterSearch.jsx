"use client";
import { ChevronDown, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const FilterSearch = () => {
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("");

  useEffect(() => {
    const sParams = new URLSearchParams();
    if (roleFilter) {
      sParams.set("role", roleFilter);
    }
    if (searchQuery) {
      sParams.set("search", searchQuery);
    }
     router.push(`/dashboard/admin/users?${sParams.toString()}`);
  }, [searchQuery, roleFilter, router]);
 

  return (
    <div className="flex  flex-col sm:flex-row gap-3 items-center">
      {/* Search Input */}
      <div className="relative w-full max-w-sm">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search users..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-gray-50/70 border border-gray-200/80 rounded-xl text-sm placeholder-gray-400 text-gray-800 focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 transition-all"
        />
      </div>

      {/* Dropdown Filter */}
      <div className="relative w-full sm:w-32">
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
          className="w-full pl-4 pr-10 py-2 bg-gray-50/70 border border-gray-200/80 rounded-xl text-sm text-gray-700 appearance-none focus:outline-none focus:ring-1 focus:ring-gray-300 focus:border-gray-300 transition-all cursor-pointer"
        >
          <option value="">All</option>
          <option value="admin">Admin</option>
          <option value="client">Client</option>
          <option value="freelancer">Freelancer</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 pointer-events-none" />
      </div>
    </div>
  );
};

export default FilterSearch;
