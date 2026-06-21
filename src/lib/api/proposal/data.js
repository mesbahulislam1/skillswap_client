import { baseUrl } from "@/lib/baseUrl";
import { serverFetch } from "../server/server";



export const getProposol = async (email) => {
  const res = await fetch(`http://localhost:8080/api/proposals?email=${email}`);
  return res.json();
};

export const getManageProposol = async (email) => {
  const res = await fetch(`${baseUrl}/api/manage-proposal?email=${email}`);
  return res.json();
};

export const getAccepetedProposol = async(email)=>{
  const res = await fetch(`${baseUrl}/api/manage-proposal-accepted?email=${email}`)
  return res.json()
}
