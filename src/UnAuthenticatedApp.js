import styled from "@emotion/styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useState } from "react";
import HomePage from "./pages/HomePage";
import TweetDetail from "./pages/TweetDetail";
import NavbarLogout from "./components/NavbarLogout";

const Content = styled.div`
  background: #ebeef0;
`;

function UnAuthenticatedApp() {

   return (
    <Content>
      <BrowserRouter>
      <NavbarLogout />
        <Routes>
          <Route index path="/" element={<HomePage />} />
          <Route path="/tweet/:id" element={<TweetDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </Content>
  );
}

export default UnAuthenticatedApp;
