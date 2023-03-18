import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Button from "./Button";

const ContentForm = styled.form`
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1),
    0px 4px 6px -2px rgba(0, 0, 0, 0.05);
  display: flex;
  max-width: 600px;
  margin: 2px auto 12px auto;
  padding: 8px 16px;
  gap: 8px;
  background-color: white;
`;

const ContImage = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 50%;
`;

const Image = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

const ContTweet = styled.div`
  width: 510px;
`;

const TweetBody = styled.input`
  text-align: left;
  color: ${colors.black};
  width: 510px;
  border: none;
  margin-bottom: 16px;
`;
const ContButton = styled.div`
  display: flex;
  justify-content: right;
`;

function TweetForm({ onsubmit, src, user_id, value, onchange, nameButton }) {
  return (
    <ContentForm onSubmit={onsubmit}>
      <ContImage>
        <Image
          src={
            src
              ? src
              : "https://res.cloudinary.com/dw4vczbtg/image/upload/v1678486979/app_offix/pngwing.com_5_ggn8qz.png"
          }
          alt={user_id}
        />
      </ContImage>
      <ContTweet>
        <TweetBody
          placeholder="Remember to thing before write..."
          value={value}
          name="body"
          onChange={onchange}
        />
        <ContButton>
          <Button type="submit">{nameButton}</Button>
        </ContButton>
      </ContTweet>
    </ContentForm>
  );
}

export default TweetForm;
