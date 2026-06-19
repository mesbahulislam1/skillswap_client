"use client"

import React, { useState } from 'react'
import { DollarSign, Calendar, Clock, User, Send } from 'lucide-react';

const TasksForm = () => {

  const [proposedBudget, setProposedBudget] = useState('');
  const [estimatedDays, setEstimatedDays] = useState('');
  const [coverNote, setCoverNote] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log({ proposedBudget, estimatedDays, coverNote });
    // Handle submission logic here
  };

  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <Send className="w-5 h-5 text-[#0072f5] transform rotate-45" />
              <h2 className="text-lg font-bold text-gray-900">Submit a Proposal</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Proposed Budget */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-800">
                    Proposed Budget (USD)
                  </label>
                  <input
                    type="text"
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
                    type="text"
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
          </div>
  )
}

export default TasksForm