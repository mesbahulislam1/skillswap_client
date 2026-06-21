import MainTaskCard from "@/components/MainTasksCard";
import FilterItems from "./FilterItems";
import { getTasks } from "@/lib/api/tasks/data";

const TasksPage = async({searchParams}) => {
 const sParams = await searchParams;
  const params = new URLSearchParams()

  if (sParams?.search) {
    params.set('search', sParams?.search)
  }
  if (sParams?.category) {
    params.set('category', sParams?.category)
  }
  if(sParams?.status){
    params.set('status', sParams?.status)
  }

  const tasksData = await getTasks(params)
  
  return (
    <div className="px-5">
      <h2 className="text-3xl font-bold mt-3 mb-2">Browse Tasks</h2>
      <p className="mb-4">Find open tasks that match your skills</p>

      <FilterItems></FilterItems>

      <div className="grid grid-cols-1 mt-9 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {
          tasksData.map((task)=> <MainTaskCard key={task?._id} task={task}></MainTaskCard>)
        }
      </div>
  
    </div>
  );
};

export default TasksPage;
