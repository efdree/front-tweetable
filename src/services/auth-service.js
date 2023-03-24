import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export function login(credentials) {
  return apiFetch(`/login?email=${credentials.email}&password=${credentials.password}`,{ method: "POST" }).then((u) => {
    const token = u[1]['token']
    const user = u[0]
    sessionStorage.setItem("user-auth", user.id);
    sessionStorage.setItem(tokenKey, token);
    return user;
  });
}