import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { getTweet } from "../services/tweets-service";
import CardTweet from "../components/CardTweet";
import CardListComment from "../components/CardListComment";
import NavBar from "../components/Navbar";
import { useParams } from "react-router-dom";

const Content = styled.div`
  margin: 0 auto;
  background-color: #ebeef0;
`;

const ContentComments = styled.div`
  padding: 12px;
`;

function TuitDetail() {
  const [tweet, setTweet] = useState([
    {
      id: 1,
      created_time: "2023-03-10",
      comments_count: 0,
      body: "Put here your tweet",
      user_id: 1,
      comments_tweets: [
        {
          body: "Put here your comment",
          created_time: "2023-03-10",
          tweet_id: 1,
          id: 1,
          user_id: 1,
        },
      ],
    },
  ]);
  let params = useParams();
  useEffect(() => {
    getTweet(Number(params.id)).then(setTweet);
  }, [params.id]);

  
  return (
    <Content>
      <NavBar />
      <Header>Tuit Details</Header>
      <CardTweet id={tweet[0].id} tweet={tweet[0]} />
      <ContentComments>
        <CardListComment comments={tweet[0].comments_tweets} />
      </ContentComments>
    </Content>
  );
}

export default TuitDetail;
