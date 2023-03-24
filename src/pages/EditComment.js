import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import { useNavigate } from "react-router-dom";
import { getComment, updateComment } from "../services/comments-service";
import { useAuth } from "../context/auth-context";

function EditComment() {
  const { user } = useAuth();

  const navigate = useNavigate();

  const [comment, setComment] = useState({
    created_time: "",
    body: "",
    user_id: 0,
    tweet_id: 0,
  });

  let params = useParams();

  useEffect(() => {
    getComment(Number(params.id)).then(setComment);
  }, [params.id]);

  const [formData, setFormData] = useState({
    created_time: comment.created_time,
    body: "",
    user_id: user.id,
    comment_id: comment.tweet_id,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    formData.created_time = formData.created_time
      ? formData.created_time
      : comment.created_time;
    formData.body = formData.body ? formData.body : comment.body;
    formData.user_id = user.id;
    formData.tweet_id = formData.tweet_id
      ? formData.tweet_id
      : comment.tweet_id;
    event.preventDefault();
    updateComment(params.id, formData);
    navigate(`/tweet/${comment.tweet_id}`);
  }

  return (
    <>
      <Header>Edit comment</Header>
      <EditForm
        onsubmit={handleSubmit}
        name={"body"}
        value={formData.body ? formData.body : comment.body}
        onchange={handleChange}
        nameButton={"Edit"}
        label={"Body"}
        placeholder={""}
      />
    </>
  );
}

export default EditComment;
