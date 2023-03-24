import { tokenKey } from "../config";
import apiFetch from "./api-fetch";

export function getUsers(){
    return apiFetch("/users");
}

export function getUser(){
    const id = sessionStorage.getItem("user-auth");
    console.log("AQUI" , id)
    return apiFetch(`/user/${id}`).then((usr) => {
        const user = usr
        return user;
      });;
}

export function createUser(user){
    return apiFetch(`/user`, {body: user}).then((usr) => {
        const token = usr[1]['token']
        const user = usr[0]
        sessionStorage.setItem(tokenKey, token);
        return user;
    });
}

export function updateUser(id, user){
    return apiFetch(`/user/${id}`,{method:"PATCH", body: user}).then((usr) => {
        const user = usr
        return user;
    });;
}