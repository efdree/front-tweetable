import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineTrash } from "react-icons/hi";
import { getUser } from "../services/users-service";
import { deleteComment } from "../services/comments-service";

const WrapperLi = styled.li`
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  max-width: 580px;
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
  font-size: 16px;
  line-height: 24px;
  color: #0f1419;
`;

const UserName = styled.p`
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #5b7083;
`;

const CreateTime = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #5b7083;
`;

const Comment = styled.div`
  text-align: left;
  width: 495px;
`;

const CommentBody = styled.div`
  text-align: left;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
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

const PrimaryLink = {
  color: "#303036",
  border: "none",
  corsor: "pointer",
  textAlign: "center",
};

function CardComment({ comment }) {
  const [user, setUser] = useState({
    name: "",
    username: "",
    avatar: "",
  });

  useEffect(() => {
    getUser(comment.user_id).then(setUser);
  }, []);

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
            user.avatar
              ? user.avatar
              : "https://res.cloudinary.com/dw4vczbtg/image/upload/v1678486979/app_offix/pngwing.com_5_ggn8qz.png"
          }
          alt={comment.id}
        />
      </ContImage>
      <ContComment>
        <CommentInfo>
          <NameUser>{user.name}</NameUser>
          <UserName>@{user.username}</UserName>
          <CreateTime>{comment.created_time}</CreateTime>
        </CommentInfo>
        <Comment>
          <CommentBody>{comment.body}</CommentBody>
        </Comment>
        <CommentLinks>
          <CommentsTweet></CommentsTweet>
          <ActionComment>
            <Link to={"/"} style={PrimaryLink} onClick={handleClick}>
              <HiOutlineTrash />
            </Link>
            <Link to={"/editComment/" + comment.id} style={PrimaryLink}>
              <FiEdit2 />
            </Link>
          </ActionComment>
        </CommentLinks>
      </ContComment>
    </WrapperLi>
  );
}

export default CardComment;
