

import Link from 'next/link';
import React from 'react';

const MainTaskCard = ({task}) => {
 
  return (
    <Link href={`/tasks/${task?._id}`} className="max-w-md bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col gap-4 font-sans">
      {/* Top Section: Category and Date */}
      <div className="flex justify-between items-center">
        <span className="bg-gray-100 capitalize text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
          {task?.category}
        </span>
        <span className="text-gray-500 text-xs font-medium">
          {task?.deadline}
        </span>
      </div>

      {/* Middle Section: Title and Description */}
      <div className="flex flex-col gap-1.5 mt-1">
        <h3 className="text-gray-900 font-bold text-lg leading-tight">
          {task?.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2">
          {task?.description}
        </p>
      </div>

      {/* Bottom Section: Price and Email */}
      <div className="flex justify-between items-center mt-3">
        <span className="text-[#089AFF] font-bold text-lg">
          ${task?.budget}
        </span>
        <span className="text-gray-500 text-xs font-normal">
          {task?.clientEmail}
        </span>
      </div>
    </Link>
  );
};

export default MainTaskCard;