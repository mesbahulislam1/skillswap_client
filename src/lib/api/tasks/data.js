import { fetchOne, serverFetch } from "../server/server"




export const getTasksOne = async(id)=>{
    const res = await fetchOne(`/api/tasks/${id}`)
   return res
}
