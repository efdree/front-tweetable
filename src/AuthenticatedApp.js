import styled from "@emotion/styled";
import { colors } from "./styles/colors";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TweetDetail from "./pages/TweetDetail";
import EditTweet from "./pages/EditTweet";
import EditComment from "./pages/EditComment";
import EditProfile from "./pages/EditProfile";
import { useAuth } from "./context/auth-context";
import { NavLink } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  padding: 8px 16px;
  width: 600px;
  margin: 4px auto;
`;
const ButtonNavLink = styled(NavLink)`
  padding: 4px 16px;
  background: none;
  border: 1px solid ${colors.primary};
  border-radius: 100px;
  letter-spacing: 0.1em;
  color: ${colors.primary};
`;

const StlyeNavLink = styled(NavLink)`
  padding: 4px 16px;
  background-color: none;
  border: none;
  border-radius: 100px;
  letter-spacing: 0.1em;
  color: ${colors.primary};
`;

function AuthenticatedApp() {
  const { logout } = useAuth();

  return (
    <BrowserRouter>
      <Nav>
        <StlyeNavLink to="/editProfile">Edit Profile</StlyeNavLink>
        <ButtonNavLink onClick={logout}>Logout</ButtonNavLink>
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
  );
}

export default AuthenticatedApp;
