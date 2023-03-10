import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { getUser } from "../services/users-service";

const WrapperLi = styled.li`
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  max-width: 600px;
  margin: 2px auto;
  padding: 8px 16px;
  gap: 8px;
  background-color: #ffffff;
`;

const ContImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const Image = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

const ContTweet = styled.div`
  display: flex;
  flex-direction: column;
`;

const TweetInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const NameUser = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: #0F1419;
`

const UserName = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5B7083;
`

const CreateTime = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #5B7083;
`

const Tweet = styled.div`
  text-align: left;
  width: 515px;
`

const TweetBody = styled.div`
  text-align: left;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`

const TweetLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`

const CommentsTweet = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`
const CommentCount = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #5B7083;
`

const ActionTweet = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`

const PrimaryLink = {
  color: "#303036",
  border: "none",
  corsor: "pointer",
  textAlign: "center",
};

function CardTweet({id, tweet}){

    const [user, setUser] = useState({ 
      name:"",
      username:"",
      avatar:"",
    });

    useEffect(() => {
        getUser(tweet.user_id).then(setUser);
    },[])

    return (
        <WrapperLi key={id}>
            <ContImage>
              <Image src={user.avatar} alt={tweet.id}/>
            </ContImage>
            <ContTweet>
              <TweetInfo>
                <NameUser>{user.name}</NameUser>
                <UserName>@{user.username}</UserName>
                <CreateTime>{tweet.created_time}</CreateTime>
              </TweetInfo>
              <Tweet>
                <TweetBody>{tweet.body}</TweetBody>
              </Tweet>
              <TweetLinks>
                <CommentsTweet>
                  <Link to={"/commentsbytweet/" + tweet.id} style={PrimaryLink}>
                    <FaRegComment /> 
                  </Link>
                  <CommentCount>{tweet.comments_count}</CommentCount>
                </CommentsTweet>
                <ActionTweet>
                  <Link to={"/"} style={PrimaryLink}>
                    <HiOutlineTrash/>
                  </Link>
                  <Link to={"/edittweet/" + tweet.id} style={PrimaryLink}>
                    <FiEdit2/>
                  </Link>                 
                </ActionTweet>
              </TweetLinks>
            </ContTweet>
        </WrapperLi>
    )
}

export default CardTweet;