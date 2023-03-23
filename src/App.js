import styled from "@emotion/styled";
import { colors } from "./styles/colors";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
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

const ButtonSecondary = styled(NavLink)`
  padding: 4px 16px;
  background: none;
  border: 1px solid ${colors.primary};
  border-radius: 100px;
  letter-spacing: 0.1em;
  color: ${colors.primary};
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

function App() {
  const { user, logout } = useAuth();
  console.log(user);
  return (
    <>
      <Nav>
        <StlyeNavLink to="/editProfile">Edit Profile</StlyeNavLink>
        <ButtonSecondary to={"/login"}>Login</ButtonSecondary>
        <ButtonNavLink to="/" onClick={logout}>
          Logout
        </ButtonNavLink>
      </Nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/tweet/:id" element={<TweetDetail />} />
        <Route path="/editTweet/:id" element={<EditTweet />} />
        <Route path="/editComment/:id" element={<EditComment />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
