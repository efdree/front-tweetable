import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Button from "./Button";
import TextArea from "./TextArea";

const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 2px auto;
  padding: 50px 0px 16px 0px;
  gap: 8px;
  background-color: ${colors.white};
`;

const ContTweet = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.p``;

const ContButton = styled.div``;

function EditForm({
  onsubmit,
  value,
  name,
  placeholder,
  onchange,
  nameButton,
  label,
}) {
  return (
    <ContentForm onSubmit={onsubmit}>
      <ContTweet>
        <SubTitle>{label}</SubTitle>
        <TextArea
          name={name}
          value={value}
          onChange={onchange}
          placeholder={placeholder}
        />
      </ContTweet>
      <ContButton>
        <Button type="submit">{nameButton}</Button>
      </ContButton>
    </ContentForm>
  );
}

export default EditForm;
