import styled from "@emotion/styled";
import { colors } from "../styles/colors";
import Button from "./Button";
import TextInput from "./TextInput";

const ContentForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin: 2px auto 0px auto;
  padding: 50px 0px 16px 0px;
  gap: 8px;
  background-color: ${colors.white};
`;

const ContButton = styled.div``;

function LoginForm({ onsubmit, valueEmail, valuePassword, onchange }) {
  return (
    <ContentForm onSubmit={onsubmit}>
      <TextInput
        name="email"
        value={valueEmail}
        onChange={onchange}
        placeholder=""
        label="Email"
      />
      <TextInput
        name="password"
        value={valuePassword}
        onChange={onchange}
        placeholder=""
        label="Password"
      />
      <ContButton>
        <Button type="submit">Login</Button>
      </ContButton>
    </ContentForm>
  );
}

export default LoginForm;
