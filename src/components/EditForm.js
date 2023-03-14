import styled from "@emotion/styled";
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
  background-color: white;
`;

const ContTweet = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubTitle = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
`;

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
