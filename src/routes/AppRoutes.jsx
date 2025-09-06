import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import OwnerHomePage from "../pages/OwnerHomePage";
import VotePage from "../pages/vote/VotePage";
import VoteCompletePage from "../pages/vote/VoteCompletePage";
import VoteDetailPage from "../pages/vote/VoteDetailPage";
import SurveyPage from "../pages/vote/SurveyPage";
import ResultsPage from "../pages/ResultsPage";
import SearchPage from "../pages/search/SearchPage";
import SearchResultPage from "../pages/search/SearchResultPage";
import RegisterPage from "../pages/register/RegisterPage";
import RegisterCompletePage from "../pages/register/RegisterCompletePage";
import RegisterCheckPage from "../pages/register/RegisterCheckPage";
import ResultsSurveyPage from "../pages/ResultsSurveyPage";
import ConfirmPage from "../pages/ConfirmPage";
import RejectPage from "../pages/RejectPage";
import LoginPage from "../pages/login/LoginPage";
import OAuthRedirectPage from "../pages/OAuthRedirectPage";
import SignUpPage from "../pages/login/SignUpPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 */}
        <Route path="/" element={<HomePage />} />
        <Route path="/ownerhomepage" element={<OwnerHomePage />} />

        {/* 투표 */}
        <Route path="/vote" element={<VotePage />} />
        <Route path="/vote/:categoryId" element={<VotePage />} />
        <Route path="/vote/:categoryId/:id" element={<VoteDetailPage />} />
        <Route
          path="/vote/:categoryId/:id/complete"
          element={<VoteCompletePage />}
        />
        <Route path="/vote/:categoryId/:id/survey" element={<SurveyPage />} />

        {/* 등록 */}
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register/complete" element={<RegisterCompletePage />} />
        <Route path="/register/check" element={<RegisterCheckPage />} />

        {/* 결과 */}
        <Route path="/results" element={<ResultsPage />} />
        <Route path="/results/:restaurantId" element={<ResultsSurveyPage />} />
        <Route
          path="/results/:restaurantId/confirm"
          element={<ConfirmPage />}
        />
        <Route path="/results/:restaurantId/reject" element={<RejectPage />} />

        {/* 검색 */}
        <Route path="/search" element={<SearchPage />} />
        <Route path="/search/:keyword" element={<SearchResultPage />} />

        {/* 로그인 */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/oauth/redirect" element={<OAuthRedirectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
