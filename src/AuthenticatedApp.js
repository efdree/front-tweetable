import styled from "@emotion/styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TweetDetail from "./pages/TweetDetail";
import EditTweet from "./pages/EditTweet";
import EditComment from "./pages/EditComment";
import EditProfile from "./pages/EditProfile";
import { useAuth } from "./context/auth-context";
import { NavLink } from "react-router-dom";

const Content = styled.div`
  background: #ebeef0;
`;


const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 16px;
  gap: 0px;
  width: 600px;
  margin: 4px auto;
`;
const ButtonSecondary = {
  padding: "4px 16px",
  background: "none",
  border: "1px solid #1DA1F2",
  borderRadius: "100px",
  letterSpacing: "0.1em",
  color: "#1DA1F2",
  fontWeight: "400",
  fontSize: "16px",
  lineHeight: "24px",
  corsor: "pointer",
};

const ButtonPrimary = {
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


function AuthenticatedApp() {
  const { logout } = useAuth();

  return (
    <Content>
      <BrowserRouter>
      <Nav>
        <NavLink to="/editProfile" style={ButtonPrimary}>
          Edit Profile
        </NavLink>
        <NavLink style={ButtonSecondary} onClick={logout}>
          Logout
        </NavLink>
      </Nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/editProfile" element={<EditProfile />} />
          <Route path="/tweet/:id" element={<TweetDetail />} />
          <Route path="/editTweet/:id" element={<EditTweet />} />
          <Route path="/editComment/:id" element={<EditComment />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </Content>
  );
}

export default AuthenticatedApp;
