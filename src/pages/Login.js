import styled from "@emotion/styled";
import { useState } from "react";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import { useAuth } from "../context/auth-context";

const Content = styled.div`
  margin: 0 auto;
  background-color: #ebeef0;
`;

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(formData);
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
    </Content>
  );
}

export default Login;
