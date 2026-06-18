"use server";

import { serverMutation } from "../server/server";

export const addTasks = async(data)=>{
    const resData = await serverMutation('/api/tasks', 'POST', data)
    return resData
}
