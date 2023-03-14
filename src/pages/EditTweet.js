import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Header from "../components/Header";
import { getTweet } from "../services/tweets-service";
import NavBar from "../components/Navbar";
import { useParams } from "react-router-dom";
import TextArea from "../components/TextArea";

const Content = styled.div`
  margin: 0 auto;
  background-color: #EBEEF0;
`;

const ContentEdit = styled.div`
    margin: 0 auto;
    display:flex;
    flex-direction: column;
`;

function EditTweet(){
    const [tweet, setTweet] = useState([
        {
            created_time:"0",
            comments_count: 0,
            body: "",
            user_id:1,
        },[
            {body: "",
            created_time: "",
            tweet_id: 1,
            id: 1,
            user_id: 1}
        ]
    ]);

    let params = useParams();

    useEffect(() => {
        getTweet(Number(params.id)).then(setTweet);
    },[params.id])

    const [formData, setFormData] = useState({
        created_time:"",
        comments_count: 0,
        body: "",
        user_id:tweet.id,
      });
    
      function handleChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
      }

      console.log(tweet)

    return (
        <Content>
            <NavBar />
            <Header>Edit Tweet</Header>
            <ContentEdit>
            <TextArea 
                name="body"
                value={tweet.body}
                onChange={handleChange}
                placeholder={""}
                label="body"
            />
            </ContentEdit>
        </Content>
    );
}

export default EditTweet;