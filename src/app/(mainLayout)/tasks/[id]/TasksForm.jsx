"use client";

import React, { useEffect, useState } from "react";
import {
  DollarSign,
  Calendar,
  Clock,
  User,
  Send,
  AlertCircle,
} from "lucide-react";
import { proposalMutation } from "@/lib/api/proposal/actions";
import { baseUrl } from "@/lib/baseUrl";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const TasksForm = ({ user, task }) => {

  const [proposedBudget, setProposedBudget] = useState("");
  const [estimatedDays, setEstimatedDays] = useState("");
  const [coverNote, setCoverNote] = useState("");

  const [alreadyApplied, setAlreadyApplied] = useState(false);
  const router = useRouter()

  console.log(task)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      taskTitle: task?.title,
      proposedBudget,
      estimatedDays,
      coverNote,
      freelancerEmail: user?.email,
      clientEmail: task?.clientEmail,
      freelancerName: user?.name,
      taskBudget: task?.budget,
      taskId: task?._id,
      taskCategory: task?.category,
      status: "pending",

    };

    const res = await proposalMutation(formData);
    if (res) {
      toast.success("Proposal Successful Submited")
    }
    window.location.reload()
    
  };

  useEffect(() => {
    const checkProposol = async () => {
      const res = await fetch(
        `${baseUrl}/api/proposals/check?taskId=${task._id}&freelancerEmail=${user?.email}`,
      );
      const data = await res.json();
      setAlreadyApplied(data);
    };

    if (task?._id && user?.email) {
      checkProposol();
    }
  }, [task._id, user?.email]);


  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Send className="w-5 h-5 text-[#0072f5] transform rotate-45" />
        <h2 className="text-lg font-bold text-gray-900">Submit a Proposal</h2>
      </div>

      {alreadyApplied ? (
        <div className="flex items-center gap-3 w-full max-w-4xl px-5 py-4 bg-[#FFF8F2] border border-[#FFE2C8] rounded-2xl text-[#E29543] font-medium selection:bg-amber-200">
          {/* Icon */}
          <AlertCircle className="w-5 h-5 flex-shrink-0 stroke-[2]" />

          {/* Message Text */}
          <span className="text-base tracking-wide">
            You have already submitted a proposal for this task.
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Proposed Budget */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-800">
                Proposed Budget (USD)
              </label>
              <input
                type="number"
                placeholder="e.g. 50.00"
                value={proposedBudget}
                onChange={(e) => setProposedBudget(e.target.value)}
                className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 placeholder-gray-400 text-sm"
              />
            </div>

            {/* Estimated Days */}
            <div>
              <label className="block text-sm font-semibold mb-2 text-gray-800">
                Estimated Days
              </label>
              <input
                type="number"
                placeholder="e.g. 3"
                value={estimatedDays}
                onChange={(e) => setEstimatedDays(e.target.value)}
                className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 placeholder-gray-400 text-sm"
              />
            </div>
          </div>

          {/* Cover Note */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-800">
              Cover Note
            </label>
            <textarea
              rows="4"
              placeholder="Explain why you're the best fit for this task..."
              value={coverNote}
              onChange={(e) => setCoverNote(e.target.value)}
              className="w-full px-4 py-3 bg-[#f8f9fa] border border-gray-200 rounded-xl focus:outline-none focus:border-gray-400 placeholder-gray-400 text-sm resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#00a7f5]  text-white font-medium py-3 rounded-xl transition duration-200 shadow-sm text-sm"
          >
            Submit Proposal
          </button>
        </form>
      )}
    </div>
  );
};

export default TasksForm;
