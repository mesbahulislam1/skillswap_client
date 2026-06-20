import { serverFetch } from "../server/server";



export const getProposol = async (email) => {
  const res = await fetch(`http://localhost:8080/api/proposals?email=${email}`);
  return res.json();
};