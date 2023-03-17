import styled from "@emotion/styled";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useState } from "react";

import NavbarLogout from "./components/NavbarLogout";

const Content = styled.div`
  background: #ebeef0;
`;
const ContentLink = styled.div`
  margin: 0px auto;
  text-align: center;
  width: 600px;
  background: white;
  padding-bottom: 16px;
`;
const CustomLink = styled.a`
  margin: 0 auto;
  text-align: center;
  letter-spacing: 0.1em;
  color: #1da1f2;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
`;

function UnAuthenticatedApp() {
  const [showLogin, setShowLogin] = useState(true);

  function handleClick(event) {
    setShowLogin(!showLogin);
  }

  return (
    <Content>
      <NavbarLogout />
      {showLogin ? <Login /> : <SignUp />}
      <ContentLink>
        <CustomLink onClick={handleClick}>
          {showLogin ? "Sign Up" : "Log in"}
        </CustomLink>
      </ContentLink>
    </Content>
  );
}

export default UnAuthenticatedApp;
