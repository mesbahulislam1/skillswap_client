import React from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';

const OverviewCard = ({ title, value, subtext, icon: Icon }) => {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex justify-between items-start shadow-sm flex-1 min-w-[280px]">
      <div className="flex flex-col gap-1">
        <span className="text-gray-500 font-medium text-sm">{title}</span>
        <span className="text-gray-900 font-bold text-4xl tracking-tight my-1">{value}</span>
        <span className="text-gray-400 text-xs">{subtext}</span>
      </div>
      <div className="bg-[#FFF4EB] p-3 rounded-xl flex items-center justify-center text-[#D97706]">
        <Icon className="w-5 h-5 stroke-[2]" />
      </div>
    </div>
  );
};

export default function PaymentOverview() {
  return (
    <div className="w-full max-w-7xl mx-auto p-8 bg-white font-sans select-none">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-950 tracking-tight">Payment Overview</h1>
        <p className="text-gray-500 text-sm mt-1">All platform transactions</p>
      </div>

      {/* Top Cards Row */}
      <div className="flex flex-col md:flex-row gap-6 mb-6">
        <OverviewCard
          title="Total Revenue"
          value="$0"
          subtext="0 transactions"
          icon={DollarSign}
        />
        <OverviewCard
          title="Average Transaction"
          value="$0"
          subtext="Per completed payment"
          icon={TrendingUp}
        />
      </div>

      {/* Empty State / Bottom Area */}
      <div className="w-full border border-dashed border-gray-200 rounded-2xl bg-[#FAFAFA]/50 py-16 flex flex-col items-center justify-center text-center">
        {/* Circle Icon Badge */}
        <div className="bg-gray-100 text-gray-400 w-14 h-14 rounded-full flex items-center justify-center mb-4">
          <DollarSign className="w-7 h-7 stroke-[1.5]" />
        </div>
        
        {/* Message texts */}
        <h3 className="text-gray-900 font-bold text-base mb-1">No payments yet</h3>
        <p className="text-gray-400 text-sm max-w-sm px-4">
          Payments will appear here once transactions are processed
        </p>
      </div>
    </div>
  );
}