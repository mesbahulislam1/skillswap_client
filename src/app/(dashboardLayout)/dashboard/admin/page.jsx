import React from 'react';
import { Users, Briefcase, DollarSign, Activity } from 'lucide-react';

const MetricCard = ({ title, value, subtext, icon: Icon }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex justify-between items-start shadow-sm min-w-[240px] flex-1">
      <div className="flex flex-col gap-2">
        <span className="text-gray-500 font-medium text-sm">{title}</span>
        <span className="text-gray-900 font-bold text-4xl tracking-tight">{value}</span>
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

export default function AdminDashboard() {
  const metrics = [
    {
      title: "Total Users",
      value: "0",
      subtext: "1 admin, 45 clients, 30\nfreelancers",
      icon: Users,
    },
    {
      title: "Total Tasks",
      value: "0",
      subtext: "0 active",
      icon: Briefcase,
    },
    {
      title: "Total Revenue",
      value: "$0",
      subtext: "0 payments",
      icon: DollarSign,
    },
    {
      title: "Active Tasks",
      value: "0",
      subtext: "Currently in progress",
      icon: Activity,
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-gray-50/50 min-h-screen font-sans">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-950 tracking-tight">Admin Dashboard</h1>
        <p className="text-gray-500 text-sm mt-1">Platform overview and management</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <MetricCard
            key={index}
            title={metric.title}
            value={metric.value}
            subtext={metric.subtext}
            icon={metric.icon}
          />
        ))}
      </div>
    </div>
  );
}