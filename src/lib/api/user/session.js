import { auth } from "@/lib/auth";
import { serverFetch } from "../server/server";

export const getUser = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  return session?.user || null;
};

export const getFreelancerUser = async()=>{
  const res = await serverFetch('/api/freelancers');
  return res;
}
export const getFreelancerUserDetails = async(id)=>{
  const res = await serverFetch(`/api/freelancers/${id}`);
  return res;
}

export const getAllUsers =async(query)=>{
  const res = await serverFetch(`/api/admin/users?${query}`);
  return res
}


