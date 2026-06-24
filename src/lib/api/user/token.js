import { authClient } from "@/lib/auth-client";


export const getUserToken = async () => {
  const { data: session } = authClient.useSession();

  return session?.session?.token || null;
};

export const authHeader = async () => {
  const token = await getUserToken();

  return token
    ? {
        authorization: `Bearer ${token}`,
      }
    : {};
};