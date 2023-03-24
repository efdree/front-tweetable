import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import HomePage from "./pages/HomePage";
import TweetDetail from "./pages/TweetDetail";
import EditTweet from "./pages/EditTweet";
import EditComment from "./pages/EditComment";
import EditProfile from "./pages/EditProfile";
import { AuthRoute, useAuth } from "./context/auth-context";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/editProfile" element={
          <AuthRoute>
            <EditProfile />
          </AuthRoute>
          } />
        <Route path="/tweet/:id" element={<TweetDetail />} />
        <Route path="/editTweet/:id" element={
        <AuthRoute>
          <EditTweet />
        </AuthRoute>
          } />
        <Route path="/editComment/:id" element={
        <AuthRoute>
          <EditComment />
        </AuthRoute>
          } />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<h1 style={{textAlign:"center", margin:"32px"}}>Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
