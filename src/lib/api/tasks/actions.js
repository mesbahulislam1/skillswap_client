"use server";

import { deleteTask, serverMutation } from "../server/server";

export const addTasks = async(data)=>{
    const resData = await serverMutation('/api/tasks', 'POST', data)
    return resData
}

export const updateTasks = async(id, data)=>{
    const resData = await serverMutation(`/api/tasks/${id}`, 'PATCH', data)
    return resData
}



export const taskDelete =async(id)=>{
    const res = await deleteTask(`/api/tasks/${id}`, 'DELETE')
    return res
}