import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import NavBar from "../components/Navbar";

const Content = styled.div`
  margin: 0 auto;
  background-color: #ebeef0;
`;

function Login(){
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
      email:"",
      password: "",
    })

    function handleChange(event) {
      const { name, value } = event.target;
      setFormData({ ...formData, [name]: value });
    }

    function handleSubmit(event) {
      event.preventDefault();
      navigate(`/`);
    }

    return (
    <Content>
        <NavBar />
        <Header>Login</Header>
        <LoginForm 
        onsubmit={handleSubmit}
        valueEmail={formData.email}
        valuePassword={formData.password}
        onchange={handleChange}
        />
    </Content>
    )
}

export default Login;