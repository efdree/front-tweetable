import styled from "@emotion/styled";
import { useState } from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../context/auth-context";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Content = styled.div`
  margin: 0 auto;
  background-color: #ebeef0;
`;

const ContentLink = styled.div`
  margin: 0px auto;
  text-align: center;
  width: 600px;
  background: white;
  padding-bottom: 16px;
`;
const CustomLink = styled(Link)`
  margin: 0 auto;
  text-align: center;
  letter-spacing: 0.1em;
  color: #1da1f2;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
`;

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate(); 

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(formData);
    navigate(`/`);
  }

  return (
    <Content>
      <Header>Login</Header>
      <LoginForm
        onsubmit={handleSubmit}
        valueEmail={formData.email}
        valuePassword={formData.password}
        onchange={handleChange}
      />
      <ContentLink>
        <CustomLink to={"/signup"}>
          Sign Up
        </CustomLink>
      </ContentLink>
    </Content>
  );
}

export default Login;
