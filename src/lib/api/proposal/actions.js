import { serverMutation } from "../server/server"


export const proposalMutation = async(data)=>{
    const res = await serverMutation('/api/proposals', 'POST', data)

    return res
}

export const proposalUpdate = async(id, data)=>{
    const res = await serverMutation(`/api/manage-proposal-accepted/${id}`, 'PATCH', data)

    return res
}
