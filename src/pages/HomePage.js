import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { createTweet, getTweets } from "../services/tweets-service";
import CardListTweet from "../components/CardListTweet";
import TweetForm from "../components/TweetForm";

const Content = styled.div`
  margin: 0 auto;
  background-color: #ebeef0;
`;

function HomePage(showLogin) {
  const [formData, setFormData] = useState({
    body: "",
    comments_count: 0,
    created_time: "",
    user_id: 1,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    formData.created_time = Date.now();
    console.log(formData);
    createTweet(formData);
    event.preventDefault();
    window.location.reload();
  }

  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getTweets().then(setTweets);
  }, []);

  return (
    <Content>
      <Header>Home</Header>
      {showLogin ? <TweetForm
        onsubmit={handleSubmit}
        src={
          "https://res.cloudinary.com/dw4vczbtg/image/upload/v1678486979/app_offix/pngwing.com_5_ggn8qz.png"
        }
        user_id={1}
        value={formData.body}
        onchange={handleChange}
        nameButton="Tweet"
      /> : ""}
      <CardListTweet tweets={tweets} login={showLogin}/>
    </Content>
  );
}

export default HomePage;
