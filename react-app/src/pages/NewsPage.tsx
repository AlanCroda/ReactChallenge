import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsList from "../components/news/NewsList";
import NewsDetail from "../components/news/NewsDetail";

const NewsPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<NewsList />} />
      <Route path=":newsId" element={<NewsDetail />} />
    </Routes>
  );
};

export default NewsPage;
