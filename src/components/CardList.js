import styled from "@emotion/styled";
import CardTweet from "./CardTweet";

const WrapperUl = styled.ul`
  padding: 0px;
  margin: 0 auto;
  max-width: 600px;
`;

function CardList({ tweets }) {
  return (
    <WrapperUl>
      {tweets.map((tweet) => (
        <CardTweet key={tweet.id} tweet={tweet} />
      ))}
    </WrapperUl>
  );
}

export default CardList;
