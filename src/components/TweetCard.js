import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";

const WrapperLi = styled.li`
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  max-width: 600px;
  margin: 32px 0px;
  padding: 8px 16px;
  gap: 8px;
  background-color: #FFFFFF;
  border: 1px solid black;
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
  justify-content: center;
`;

const TweetInfo = styled.div`
  text-align: left;
  display: flex;
  align-items: left;
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
`

const ActionTweet = styled.div`
`

const Button = styled.button`
`

function TweetCard(){
    const tweet = {};
    const id = 1;
    tweet.id = 1
    tweet.avatar = "avatar"
    tweet.name = "name"
    tweet.username = "username"
    tweet.time = "2023-02-28"
    tweet.body = "Lorem asd asda123123123123123123123123123123123123123 123333 1 sdasd asdsadasdasdasd asd"
    tweet.comments_count = 10

    return (
        <WrapperLi key={id}>
            <ContImage>
              <Image src={tweet.avatar} alt={tweet.id}/>
            </ContImage>
            <ContTweet>
              <TweetInfo>
                <NameUser>{tweet.name}</NameUser>
                <UserName>{tweet.username}</UserName>
                <CreateTime>{tweet.time}</CreateTime>
              </TweetInfo>
              <Tweet>
                <TweetBody>{tweet.body}</TweetBody>
              </Tweet>
              <TweetLinks>
                <CommentsTweet>
                  <Link to={"/commentsbytweet/" + tweet.id}>
                    <FaRegComment /> {tweet.comments_count}
                  </Link>
                </CommentsTweet>
                <ActionTweet>
                  <Button type="submit">
                    <HiOutlineTrash/>
                  </Button>
                  <Link to={"/edittweet/" + tweet.id}>
                    <FiEdit2/>
                  </Link>                 
                </ActionTweet>
              </TweetLinks>
            </ContTweet>
        </WrapperLi>
    )
}

export default TweetCard;