import apiFetch from "./api-fetch";

export function getComment(id) {
  return apiFetch(`/comment/${id}`);
}

export function createComment(comment) {
  return apiFetch("/comment", { body: comment });
}

export function updateComment(id, comment) {
  return apiFetch(`/comment/${id}`, { method: "PATCH", body: comment });
}

export function deleteComment(id) {
  return apiFetch(`/comment/${id}`, { method: "DELETE" });
}
