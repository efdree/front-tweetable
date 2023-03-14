import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import TuitDetail from "./pages/TuitDetail";
import EditTweet from "./pages/EditTweet";
import EditComment from "./pages/EditComment";

function App() {
  return (
    <Routes>
      <Route index path="/" element={<HomePage />} />
      <Route path="/tweet/:id" element={<TuitDetail />} />
      <Route path="/editTweet/:id" element={<EditTweet />} />
      <Route path="/editComment/:id" element={<EditComment />} />
    </Routes>
  );
}

export default App;
