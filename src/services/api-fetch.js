import { BASE_URI, tokenKey } from "../config";

export default async function apiFetch(
  endpoint,
  { method, headers, body } = {}
) {
  const token = sessionStorage.getItem(tokenKey);
  console.log("*********")
  console.log(token)
  if (token) {
    headers = {
      Authorization: `Bearer ${token}`,
      ...headers
    };
  }

  if (body) {
    headers = {
      "Content-Type": "application/json",
      ...headers
    };
  }

  const config = {
    method: method || (body ? "POST" : "GET"),
    headers,
    body: body ? JSON.stringify(body) : null
  };
  
  console.log(BASE_URI)
  console.log("-----------")
  console.log(endpoint)
  console.log("-----------")
  console.log(config)

  const response = await fetch(BASE_URI + endpoint, config);

  let data;
  if (!response.ok) {
    try {
      data = await response.json();
    } catch (error) {
      throw new Error(response.statusText);
    }
    throw new Error(data.errors);
  }

  try {
    data = await response.json();
  } catch (error) {
    data = response.statusText;
  }

  return data;
}