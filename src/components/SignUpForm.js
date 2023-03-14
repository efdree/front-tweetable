import styled from "@emotion/styled";
import Button from "./Button";
import FileInput from "./FileInput";
import { Link } from "react-router-dom";


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

const ContButton = styled.div``;

const PrimaryLink = {
    padding: "4px 16px",
    background: "none",
    border: "none",
    borderRadius: "100px",
    letterSpacing: "0.1em",
    color: "#1DA1F2",
    fontWeight: "400",
    fontSize: "16px",
    lineHeight: "24px",
    corsor: "pointer",
  };

function SignUpForm({
  onsubmit,
  valueEmail,
  valueUsername,
  valuePassword,
  valuePasswordConfirm,
  onChangeFile,
  onchange,
}) {
  return (
    <ContentForm onSubmit={onsubmit}>
        <FileInput  
            name="email"
            value={valueEmail}
            onChange={onchange}
            placeholder=""
            label="Email"
            type="email"
        />
        <FileInput  
            name="username"
            value={valueUsername}
            onChange={onchange}
            placeholder=""
            label="Username"
        />
        <FileInput  
            name="avatar"
            onChange={onChangeFile}
            placeholder=""
            label="Avatar"
            type="file"
        />
        <FileInput  
            name="password"
            value={valuePassword}
            onChange={onchange}
            placeholder=""
            label="Password"
            type="password"
        />
        <FileInput  
            name="password_confirm"
            value={valuePasswordConfirm}
            onChange={onchange}
            placeholder=""
            label="Password Confirmation"
            type="password"
        />
      <ContButton>
        <Button type="submit">Login</Button>
       
      </ContButton> 
      <Link to="/signup" style={PrimaryLink}>
            Sign Up
      </Link>
    </ContentForm>
  );
}

export default SignUpForm;
