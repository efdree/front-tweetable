import styled from "@emotion/styled";
import Card from "./Card";

const WrapperUl = styled.ul`
  padding: 0px;
  margin: 0 auto;
  max-width: 600px;
`;

function CardList({ tweets }) {
  return (
    <WrapperUl>
      {tweets.map((tweet) => (
        <Card key={tweet.id} tweet={tweet} />
      ))}
    </WrapperUl>
  );
}

export default CardList;
