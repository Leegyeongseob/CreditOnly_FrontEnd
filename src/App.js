import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import FindEmail from "./pages/login/FindEmail";
import FindPassword from "./pages/login/FindPassword";
import GlobalStyle from "./global/GlobalStyle";
import ErrorPage from "./error/ErrorPage";
import MainForm from "./common/commonForm/MainForm";
import LoginPage from "./pages/login/LoginPage";
import SignUp from "./pages/login/SignUp";
import FindByForm from "./common/commonForm/FindByForm";
import Mypage from "./pages/settingpage/Mypage";
import HelpPage from "./pages/help/HelpPage";
import CreditNews from "./pages/news/CreditNews";
import NewsList from "./pages/news/NewsList";
import NewsDetail from "./pages/news/NewsDetail";
import CreditStyle from "./CreditStyle";
import RendingPage from "./pages/main/RendingPage";
<<<<<<< HEAD
import Evaluation from "./pages/evaluation/Evaluation";
=======
import Announcement from "./pages/announcement/AnnouncementMain";
>>>>>>> 1bf35f4eb1f39b698d096108ef41de40b60c49d6
const App = () => {
  return (
    <>
      {/* 전역스타일적용 */}
      <GlobalStyle />
      <CreditStyle />
      <Router>
        <Routes>
          <Route path="/" element={<RendingPage />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route element={<MainForm />}>
            <Route path="/mainpage" element={<MainPage />} />
            <Route path="/setting" element={<Mypage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/information" element={<CreditNews />} />
            <Route path="/information-list" element={<NewsList />} />
            <Route path="/informaition-list/:id" element={<NewsDetail />} />
<<<<<<< HEAD
            <Route path="/evaluation" element={<Evaluation/>}/>
=======
            <Route path="/announcement" element={<Announcement />} />
>>>>>>> 1bf35f4eb1f39b698d096108ef41de40b60c49d6
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route element={<FindByForm />}>
            <Route path="/findbyemail" element={<FindEmail />} />
            <Route path="/findbypwd" element={<FindPassword />} />
          </Route>
          {/* <Route element={<OpenBook />}>
            <Route path="/board-guestbook" element={<GuestBoardGuestbook />} />
            <Route path="/board-details/:id" element={<BoardDetails />} />
            <Route path="/board-write" element={<BoardWrite />} />
            <Route path="/board-update" element={<BoardUpdate />} />
          </Route> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;
