import { fetchOne, serverFetch } from "../server/server"




export const getTasksOne = async(id)=>{
    const res = await fetchOne(`/api/tasks/${id}`)
    return res;
   
}
export const getTasks = async(params)=>{
    const res = await serverFetch(`/api/tasks?${params.toString()}`)
    return res;
   
}
export const TotalTasks = async()=>{
    const res = await serverFetch(`/api/tasks`)
    return res;
   
}

export const TotalIprocess = async()=>{
    const res = await serverFetch(`/api/tasks/open-task`)
    return res;
   
}

