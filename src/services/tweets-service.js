import apiFetch from "./api-fetch";

export function getTweets(){
    return apiFetch("/tweets");
}

export function getTweet(id){
    return apiFetch(`/tweet/${id}`);
}

export function createTweet(tweet){
    return apiFetch("/tweet", {body:tweet});
}

export function updateTweet(id, tweet){
    return apiFetch(`/tweet/${id}`,{method: "PATCH", body: tweet});
}

export function deleteTweet(id){
    return apiFetch(`/tweet/${id}`,{method: "DELETE"});
}