import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { getTweet } from "../services/tweets-service";
import CardTweet from "../components/CardTweet";
import CardListComment from "../components/CardListComment";
import { useParams } from "react-router-dom";
import CommentForm from "../components/CommentForm";
import { createComment } from "../services/comments-service";
import { useAuth } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

const Content = styled.div`
  margin: 0 auto;
`;

const ContentComments = styled.div`
  padding: 12px;
`;

function TweetDetail() {
  const navigate = useNavigate();

  const { user } = useAuth();

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
          users_comments: {
            id: 1,
            name: "name",
            username: "username",
            email: "email",
            password: "password",
            avatar: "avatar",
          },
        },
      ],
      users_tweets: {
        id: 1,
        name: "name",
        username: "username",
        email: "email",
        password: "password",
        avatar: "avatar",
      },
    },
  ]);
  let params = useParams();
  useEffect(() => {
    getTweet(Number(params.id)).then(setTweet);
  }, [params.id]);

  const [formData, setFormData] = useState({
    body: "",
    created_time: "",
    user_id: 1,
    tweet_id: 1,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    formData.created_time = Date.now();
    formData.user_id = user.id;
    formData.tweet_id = tweet[0].id;
    console.log(formData);
    createComment(formData);
    navigate(`/tweet/${tweet[0].id}`);
    event.preventDefault();
    window.location.reload();
  }

  return (
    <Content>
      <Header>Tuit Details</Header>
      <CardTweet id={tweet[0].id} tweet={tweet[0]} />
      <ContentComments>
        {user ? (
          <CommentForm
            onsubmit={handleSubmit}
            src={user.avatar}
            user_id={user.id}
            value={formData.body}
            onchange={handleChange}
            nameButton="Comment"
          />
        ) : (
          ""
        )}
        <CardListComment comments={tweet[0].comments_tweets} user={user} />
      </ContentComments>
    </Content>
  );
}

export default TweetDetail;
