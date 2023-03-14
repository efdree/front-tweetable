import styled from "@emotion/styled";
import Button from "./Button";

const ContentForm = styled.form`
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  display: flex;
  max-width: 600px;
  margin: 32px 0px;
  padding: 8px 16px;
  gap: 8px;
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

const ContTweet = styled.div``;

const TweetBody = styled.input`
  text-align: left;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #000000;
`;
const ContButton = styled.div``;

function CardForm({
  onsubmit,
  src,
  tweet_id,
  value,
  name,
  onchange,
  nameButton,
}) {
  return (
    <ContentForm onSubmit={onsubmit}>
      <ContImage>
        <Image src={src} alt={tweet_id} />
      </ContImage>
      <ContTweet>
        <TweetBody
          placeholder="Remember to thing before write..."
          value={value}
          name={name}
          onChange={onchange}
        />
      </ContTweet>
      <ContButton>
        <Button type="submit">{nameButton}</Button>
      </ContButton>
    </ContentForm>
  );
}

export default CardForm;
