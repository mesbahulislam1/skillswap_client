import { auth } from "@/lib/auth";
import { serverFetch } from "../server/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const getUser = async () => {
  const session = await auth.api.getSession({
    headers: await headers(), // you need to pass the headers object.
  });

  return session?.user || null;
};

export const getFreelancerUser = async () => {
  const res = await serverFetch("/api/freelancers");
  return res;
};
export const getFreelancerUserDetails = async (id) => {
  const res = await serverFetch(`/api/freelancers/${id}`);
  return res;
};

export const getAllUsers = async (query) => {
  const res = await serverFetch(`/api/admin/users?${query}`);
  return res;
};

export const AllUsers = async () => {
  const res = await serverFetch(`/api/admin/users`);
  return res;
};

export const ProctetedRole = async (role) => {
  const user = await getUser();
  if (user?.role !== role) {
    return redirect("/unauthorized");
  }
};
