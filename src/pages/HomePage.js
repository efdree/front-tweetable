import { useState, useEffect } from "react";
import Header from "../components/Header";
import { createTweet, getTweets } from "../services/tweets-service";
import CardListTweet from "../components/CardListTweet";
import TweetForm from "../components/TweetForm";
import { useAuth } from "../context/auth-context";

function HomePage() {
  const { user } = useAuth();

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
    formData.user_id = user.id;
    console.log(formData);
    createTweet(formData);
  }

  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getTweets().then(setTweets);
  }, []);

  return (
    <>
      <Header>Home</Header>
      {user ? (
        <TweetForm
          onsubmit={handleSubmit}
          src={user.avatar}
          user_id={user.id}
          value={formData.body}
          onchange={handleChange}
          nameButton="Tweet"
        />
      ) : (
        ""
      )}
      <CardListTweet tweets={tweets} user={user} />
    </>
  );
}

export default HomePage;
