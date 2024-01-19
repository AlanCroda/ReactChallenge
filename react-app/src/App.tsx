import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import NewsPage from "./pages/NewsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/users/*" element={<UsersPage />} />
        <Route path="/news/*" element={<NewsPage />} />
        <Route path="*" element={<UsersPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
