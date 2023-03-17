import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { getTweet, updateTweet } from "../services/tweets-service";
import NavBar from "../components/NavbarLogin";
import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import { useNavigate } from "react-router-dom";

const Content = styled.div`
  margin: 0 auto;
  background-color: #ebeef0;
`;

function EditTweet() {
  const navigate = useNavigate();

  const [tweet, setTweet] = useState([
    {
      created_time: "2024-12-12",
      comments_count: 0,
      body: "TWEETT",
      user_id: 1,
    },
  ]);

  let params = useParams();

  useEffect(() => {
    getTweet(Number(params.id)).then(setTweet);
  }, [params.id]);

  const [formData, setFormData] = useState({
    created_time: tweet[0].created_time,
    comments_count: tweet[0].comments_count,
    body: "",
    user_id: tweet[0].user_id,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    formData.created_time = formData.created_time
      ? formData.created_time
      : tweet[0].created_time;
    formData.comments_count = formData.comments_count
      ? formData.comments_count
      : tweet[0].comments_count;
    formData.body = formData.body ? formData.body : tweet[0].body;
    formData.user_id = formData.user_id ? formData.user_id : tweet[0].user_id;
    event.preventDefault();
    updateTweet(params.id, formData);
    navigate(`/tweet/${tweet[0].id}`);
  }

  return (
    <Content>
      <Header>Edit Tweet</Header>
      <EditForm
        onsubmit={handleSubmit}
        name={"body"}
        value={formData.body ? formData.body : tweet[0].body}
        onchange={handleChange}
        nameButton={"Edit"}
        label={"Body"}
        placeholder={""}
      />
    </Content>
  );
}

export default EditTweet;
