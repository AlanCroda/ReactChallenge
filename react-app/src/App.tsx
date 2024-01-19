import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import NewsPage from "./pages/NewsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/users" Component={UsersPage} />
        <Route path="/news" Component={NewsPage} />
        <Route path="*" element={<UsersPage />} /> {/* Default route */}
      </Routes>
    </Router>
  );
};

export default App;
