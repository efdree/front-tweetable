import apiFetch from "./api-fetch";

export function getUsers(){
    return apiFetch("/users");
}

export function getUser(id){
    return apiFetch(`/user/${id}`);
}

export function createUser(user){
    return apiFetch(`/user`, {body: user});
}

export function updateUser(id, user){
    return apiFetch(`/user/${id}`,{method:"PATCH", body: user});
}