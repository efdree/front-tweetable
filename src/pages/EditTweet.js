import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { getTweet, updateTweet } from "../services/tweets-service";
import NavBar from "../components/Navbar";
import { useParams } from "react-router-dom";
import EditForm from "../components/EditForm";
import { useNavigate } from "react-router-dom";

const Content = styled.div`
  margin: 0 auto;
  background-color: #ebeef0;
`;

function EditTweet() {
  const navigate = useNavigate();

  const [tweet, setTweet] = useState({
    id: 1,
    created_time: "2023-03-10",
    comments_count: 0,
    body: "Put here your tweet",
    user_id: 1,
  });

  let params = useParams();

  useEffect(() => {
    getTweet(Number(params.id)).then(setTweet);
  }, [params.id]);

  const [formData, setFormData] = useState({
    created_time: "",
    comments_count: 0,
    body: "",
    user_id: tweet.user_id,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    formData.created_time = formData.created_time
      ? formData.created_time
      : tweet.created_time;
    formData.comments_count = formData.comments_count
      ? formData.comments_count
      : tweet.comments_count;
    formData.body = formData.body ? formData.body : tweet.body;
    formData.user_id = formData.user_id ? formData.user_id : tweet.user_id;
    updateTweet(params.id, formData);
    navigate(`/tweet/${tweet.id}`);
  }

  return (
    <Content>
      <NavBar />
      <Header>Edit Tweet</Header>
      <EditForm
        onsubmit={handleSubmit}
        name={"body"}
        value={formData.body ? formData.body : tweet.body}
        onchange={handleChange}
        nameButton={"Edit"}
        label={"Body"}
        placeholder={""}
      />
    </Content>
  );
}

export default EditTweet;
