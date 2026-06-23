import { baseUrl } from "@/lib/baseUrl";

export const serverMutation = async (path, method, data) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return res.json();
};

export const deleteTask = async (path, method) => {
  const res = await fetch(`${baseUrl}${path}`, {
    method: method,
  });

  return res.json();
};

// export const serverFetch = async (path) => {
//   const res = await fetch(`${baseUrl}${path}`);
//   const text = await res.text();

//   return text ? JSON.parse(text) : null;
// };


export const serverFetch = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);
  const data = await res.json();

  return data;
};

export const fetchOne = async (path) => {
  const res = await fetch(`${baseUrl}${path}`);

  return res.json();
};
