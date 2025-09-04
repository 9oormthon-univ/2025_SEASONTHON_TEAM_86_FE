import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import VotePage from "../pages/vote/VotePage";
import VoteCompletePage from "../pages/vote/VoteCompletePage";
import VoteDetailPage from "../pages/vote/VoteDetailPage";
import SurveyPage from "../pages/vote/SurveyPage";
import SearchPage from "../pages/search/SearchPage";
// import ResultsPage from '../pages/ResultsPage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 홈 */}
        <Route path="/" element={<HomePage />} />

        {/* 투표 */}
        <Route path="/vote" element={<VotePage />} />
        <Route path="/vote/complete" element={<VoteCompletePage />} />
        <Route path="/vote/:id" element={<VoteDetailPage />} />
        <Route path="/vote/:id/survey" element={<SurveyPage />} />

        {/* 결과 */}
        {/* <Route path="/results" element={<ResultsPage />} /> */}

        {/* 검색 */}
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
