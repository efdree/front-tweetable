import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { Link } from "react-router-dom";
import { FaRegComment } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { deleteTweet } from "../services/tweets-service";

const WrapperLi = styled.li`
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  max-width: 600px;
  margin: 2px auto;
  padding: 8px 16px;
  gap: 8px;
  background-color: ${colors.white};
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
`;

const NameUser = styled.p`
  font-weight: 700;
  color: ${colors.primaryText};
`;

const UserName = styled.p`
  color: ${colors.secondaryText};
`;

const CreateTime = styled.p`
  color: ${colors.secondaryText};
`;

const Tweet = styled.div`
  text-align: left;
  width: 515px;
`;

const TweetBody = styled.div`
  text-align: left;
  color: ${colors.black};
`;

const TweetLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 10px;
`;

const CommentsTweet = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
const CommentCount = styled.p`
  color: ${colors.secondaryText};
`;

const ActionTweet = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const StyleLink = styled(Link)`
  color: ${colors.secondaryText};
  border: none;
  text-align: center;
`;

function CardTweet({ id, tweet, user }) {
  function handleClick(event) {
    console.log(tweet.id);
    event.preventDefault();
    window.location.reload();
    deleteTweet(tweet.id);
  }
  return (
    <WrapperLi key={id}>
      <ContImage>
        <Image
          src={
            tweet.users_tweets.avatar
              ? tweet.users_tweets.avatar
              : "https://res.cloudinary.com/dw4vczbtg/image/upload/v1678486979/app_offix/pngwing.com_5_ggn8qz.png"
          }
          alt={tweet.id}
        />
      </ContImage>
      <ContTweet>
        <TweetInfo>
          <NameUser>{tweet.users_tweets.name}</NameUser>
          <UserName>@{tweet.users_tweets.username}</UserName>
          <CreateTime>{tweet.created_time}</CreateTime>
        </TweetInfo>
        <Tweet>
          <TweetBody>{tweet.body}</TweetBody>
        </Tweet>
        <TweetLinks>
          <CommentsTweet>
            <StyleLink to={"/tweet/" + tweet.id}>
              <FaRegComment />
            </StyleLink>
            <CommentCount>{tweet.comments_count}</CommentCount>
          </CommentsTweet>
          {user && tweet.user_id === user.id ? (
            <ActionTweet>
              <StyleLink to={"/"} onClick={handleClick}>
                <HiOutlineTrash />
              </StyleLink>
              <StyleLink to={"/editTweet/" + tweet.id}>
                <FiEdit2 />
              </StyleLink>
            </ActionTweet>
          ) : (
            ""
          )}
        </TweetLinks>
      </ContTweet>
    </WrapperLi>
  );
}

export default CardTweet;
