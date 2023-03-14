import styled from "@emotion/styled";
import CardComment from "./CardComment";

const WrapperUl = styled.ul`
  padding: 0px;
  margin: 0 auto;
  max-width: 580px;
`;

function CardListComment({ comments }) {
  return (
    <WrapperUl>
      {comments.map((comment) => (
        <CardComment key={comment.id} comment={comment} />
      ))}
      
    </WrapperUl>
  );
}

export default CardListComment;
