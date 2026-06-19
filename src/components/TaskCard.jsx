import { Calendar } from "lucide-react";
import React from "react";
import Link from "next/link";

const TaskCard = ({ task }) => {
  return (
    <Link href={`/dashboard/client/tasks/${task?._id}`}>
    <div className="bg-white border rounded-2xl cursor-pointer p-6 shadow-sm hover:shadow-md transition">
      {/* TOP */}
      <div className="mb-5">
        <div className="flex justify-between">
          <h3 className="font-semibold text-lg">{task?.title}</h3>

          <span
            className={`px-3 py-1 bg-cyan-500/10 text-cyan-700 text-xs rounded-full font-medium `}
          >
            Status
          </span>
        </div>

        <p className="text-sm text-gray-400 mt-1">{task?.description}</p>
      </div>

      {/* BOTTOM */}
      <div className="flex justify-between items-center text-sm text-gray-500 border-t pt-4">
        <div className="flex items-center gap-3">
          <span className="bg-gray-100 capitalize px-3 py-1 rounded-full text-xs">
            {task?.category}
          </span>

          <span className="font-semibold text-gray-700">${task?.budget}</span>

          <span className="flex items-center gap-1">
            <Calendar size={14} />
            {task?.deadline}
          </span>
        </div>

        <span className="text-xs"> proposals</span>
      </div>
    </div>
    </Link>
  );
};

export default TaskCard;
