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

function LoginForm({
  onsubmit,
  valueEmail,
  valuePassword,
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
        />
        <FileInput  
            name="password"
            value={valuePassword}
            onChange={onchange}
            placeholder=""
            label="Password"
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

export default LoginForm;
