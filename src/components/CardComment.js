import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { deleteComment } from "../services/comments-service";

const WrapperLi = styled.li`
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  max-width: 580px;
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

const ContComment = styled.div`
  display: flex;
  flex-direction: column;
`;

const CommentInfo = styled.div`
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

const Comment = styled.div`
  text-align: left;
  width: 495px;
`;

const CommentBody = styled.div`
  text-align: left;
  color: ${colors.black};
`;

const CommentLinks = styled.div`
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
const ActionComment = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
`;

const StyleLink = styled(Link)`
  color: ${colors.secondaryText};
  border: none;
  text-align: center;
`;

function CardComment({ comment, user }) {
  function handleClick(event) {
    console.log(comment.id);
    event.preventDefault();
    window.location.reload();
    deleteComment(comment.id);
  }

  return (
    <WrapperLi key={comment.id}>
      <ContImage>
        <Image
          src={
            comment.users_comments.avatar
              ? comment.users_comments.avatar
              : "https://res.cloudinary.com/dw4vczbtg/image/upload/v1678486979/app_offix/pngwing.com_5_ggn8qz.png"
          }
          alt={comment.id}
        />
      </ContImage>
      <ContComment>
        <CommentInfo>
          <NameUser>{comment.users_comments.name}</NameUser>
          <UserName>@{comment.users_comments.username}</UserName>
          <CreateTime>{comment.created_time}</CreateTime>
        </CommentInfo>
        <Comment>
          <CommentBody>{comment.body}</CommentBody>
        </Comment>
        <CommentLinks>
          <CommentsTweet></CommentsTweet>
          {user && comment.user_id === user.id ? (
            <ActionComment>
              <StyleLink to={"/"} onClick={handleClick}>
                <HiOutlineTrash />
              </StyleLink>
              <StyleLink to={"/editComment/" + comment.id}>
                <FiEdit2 />
              </StyleLink>
            </ActionComment>
          ) : (
            ""
          )}
        </CommentLinks>
      </ContComment>
    </WrapperLi>
  );
}

export default CardComment;
