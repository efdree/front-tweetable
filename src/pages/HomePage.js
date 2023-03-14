import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { getTweets } from "../services/tweets-service";
import CardList from "../components/CardList";
import NavBar from "../components/Navbar";

const Content = styled.div`
  margin: 0 auto;
  background-color: #ebeef0;
`;

function HomePage() {
  const [tweets, setTweets] = useState([]);
  useEffect(() => {
    getTweets().then(setTweets);
  }, []);

  console.log(tweets);
  return (
    <Content>
      <NavBar />
      <Header>Home</Header>
      <CardList tweets={tweets} />
    </Content>
  );
}

export default HomePage;
