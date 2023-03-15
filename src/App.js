import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TweetDetail from "./pages/TweetDetail";
import EditTweet from "./pages/EditTweet";
import EditComment from "./pages/EditComment";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/editProfile" element={<EditProfile />} />
      <Route path="/tweet/:id" element={<TweetDetail />} />
      <Route path="/editTweet/:id" element={<EditTweet />} />
      <Route path="/editComment/:id" element={<EditComment />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  );
}

export default App;
