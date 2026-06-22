import React from "react";
import { Users, Briefcase, DollarSign, Activity } from "lucide-react";

import { TotalTasks } from "@/lib/api/tasks/data";
import { AllUsers } from "@/lib/api/user/session";
import { stripe } from "@/lib/stripe";

const MetricCard = ({ title, value, subtext, icon: Icon }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex justify-between items-start shadow-sm min-w-[240px] flex-1">
      <div className="flex flex-col gap-2">
        <span className="text-gray-500 font-medium text-sm">{title}</span>
        <span className="text-gray-900 font-bold text-4xl tracking-tight">
          {value}
        </span>
        <span className="text-gray-400 text-xs mt-1 whitespace-pre-line leading-relaxed">
          {subtext}
        </span>
      </div>

      <div className="bg-[#FFF4EB] p-3 rounded-xl flex items-center justify-center text-[#D97706]">
        <Icon className="w-6 h-6 stroke-[1.5]" />
      </div>
    </div>
  );
};

export default async function AdminDashboard() {
  const users = await AllUsers();
  const tasks = await TotalTasks();

  // ✅ Stripe data ONLY ONCE
  const sessions = await stripe.checkout.sessions.list({ limit: 100 });

  const totalRevenue =
    sessions.data.reduce((sum, s) => sum + (s.amount_total || 0), 0) / 100;

  const activeTasks =
    tasks?.filter((t) => t.status === "active")?.length || 0;

  const metrics = [
    {
      title: "Total Users",
      value: users?.length || 0,
      subtext: "Users in system",
      icon: Users,
    },
    {
      title: "Total Tasks",
      value: tasks?.length || 0,
      subtext: `${activeTasks} active`,
      icon: Briefcase,
    },
    {
      title: "Total Revenue",
      value: `$${totalRevenue}`,
      subtext: `${sessions.data.length} payments`,
      icon: DollarSign,
    },
    {
      title: "Active Tasks",
      value: activeTasks,
      subtext: "Currently in progress",
      icon: Activity,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-gray-50/50 min-h-screen font-sans">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-950 tracking-tight">
          Admin Dashboard
        </h1>
        <p className="text-gray-500 text-sm mt-1">
          Platform overview and management
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard key={index} {...metric} />
        ))}
      </div>
    </div>
  );
}