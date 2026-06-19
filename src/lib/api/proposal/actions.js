import { serverMutation } from "../server/server"


export const proposalMutation = async(data)=>{
    const res = await serverMutation('/api/proposals', 'POST', data)

    return res
}