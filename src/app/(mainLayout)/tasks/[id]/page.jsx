import { DollarSign, Calendar, Clock, User, Send } from 'lucide-react';
import TasksForm from './TasksForm';
import { getTasksOne } from '@/lib/api/tasks/data';
import { getUser } from '@/lib/api/user/session';

const TaskDetails = async({params}) => {
  const {id} = await params;
  const task = await getTasksOne(id)
 
  const user = await getUser()
 
  return (
    <div className="max-w-5xl mx-auto p-6 bg-[#fcfdfd] min-h-screen font-sans text-gray-800">
      {/* Top Badges */}
      <div className="flex gap-2 mb-4">
        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
          Writing
        </span>
        <span className="px-3 py-1 bg-[#e6f7f0] text-[#20c997] rounded-full text-xs font-medium">
          open
        </span>
      </div>

      {/* Task Title */}
      <h1 className="text-3xl font-bold mb-6 text-black">{task?.title}</h1>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Left Column: Description & Proposal Form */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Description Section */}
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h2 className="text-lg font-bold mb-4 text-gray-900">Description</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {task?.description}
            </p>
          </div>

          {/* Submit a Proposal Form */}
          {
            user?.role === 'client' ? <div></div>:<TasksForm></TasksForm> 
          }
        </div>

        {/* Right Column: Meta Details Sidebar */}
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm h-fit space-y-6">
          
          {/* Budget */}
          <div className="flex items-start gap-4">
            <div className="p-2 bg-amber-50 rounded-lg">
              <DollarSign className="w-5 h-5 text-[#0087f5]" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Budget</p>
              <p className="text-xl font-bold text-[#06abdd]">${task?.budget}</p>
            </div>
          </div>

          {/* Deadline */}
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gray-50 rounded-lg">
              <Calendar className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Deadline</p>
              <p className="text-sm font-semibold text-gray-800">{task?.deadline}</p>
            </div>
          </div>

          {/* Posted Date */}
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gray-50 rounded-lg">
              <Clock className="w-5 h-5 text-gray-500" />
            </div>
            <div>
              <p className="text-xs text-gray-400 font-medium">Posted</p>
             <p className="text-sm font-semibold text-gray-800">
  {new Date(task?.postedDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  })}
</p>
            </div>
          </div>

          {/* Client Info */}
          <div className="flex items-start gap-4">
            <div className="p-2 bg-gray-50 rounded-lg">
              <User className="w-5 h-5 text-gray-500" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs text-gray-400 font-medium">Client</p>
              <p className="text-sm font-semibold text-gray-800 truncate">
                {task?.clientEmail}
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default TaskDetails;