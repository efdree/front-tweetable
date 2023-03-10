import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { getTweets } from "../services/tweets-service";

const Content = styled.div`
  margin: 0 auto;
  background-color: #EBEEF0;
`;

function HomePage(){
    const [tweets, setTweets] = useState([]);
    useEffect(() => {
        getTweets().then(setTweets);
    },[])

    return (
        <Content>
            <Header>Home</Header>
        </Content>
    );
}

export default HomePage;