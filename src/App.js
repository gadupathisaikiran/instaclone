import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./components/homePage";
import LandingPage from "./components/landingPage";
import PostForm from "./components/postForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/home/createpost" element={<PostForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//https://instaclone-frondend.onrender.com/
