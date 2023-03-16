import styled from "@emotion/styled";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TweetDetail from "./pages/TweetDetail";
import EditTweet from "./pages/EditTweet";
import EditComment from "./pages/EditComment";
import EditProfile from "./pages/EditProfile";
import { useAuth } from "./context/auth-context";
import NavbarLogin from "./components/NavbarLogin";

const Content = styled.div`
  background: #ebeef0;
`;

function AuthenticatedApp() {
  const { logout } = useAuth();

  return (
    <Content>
      <NavbarLogin onClick={logout} />
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<HomePage />} />
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
