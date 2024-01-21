import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NewsList from "../components/news/NewsList";
import NewsDetail from "../components/news/NewsDetail";

export interface News {
  id: string;
  title: string;
  image: string;
  summary: string;
  text: string;
}

const NewsPage: React.FC = () => {
  const [news] = useState<News[]>([
    {
      id: "1",
      title: "Exciting News",
      image: "https://example.com/image1.jpg",
      summary: "A brief summary of the exciting news.",
      text: "The full text of the exciting news goes here. It can be quite detailed.",
    },
    {
      id: "2",
      title: "Breaking News",
      image: "https://example.com/image2.jpg",
      summary: "A brief summary of the breaking news.",
      text: "This is the breaking news that everyone needs to know about. It's important and timely.",
    },
    {
      id: "3",
      title: "Latest Updates",
      image: "https://example.com/image3.jpg",
      summary: "Stay updated with the latest news in this summary.",
      text: "Get the latest updates on various topics. Stay informed and engaged with the world.",
    },
    {
      id: "4",
      title: "Tech Innovations",
      image: "https://example.com/image4.jpg",
      summary:
        "Discover the latest technological innovations shaping the future.",
      text: "Explore cutting-edge technologies and their impact on various industries.",
    },
    {
      id: "5",
      title: "Health & Wellness Tips",
      image: "https://example.com/image5.jpg",
      summary: "Tips for a healthy lifestyle and overall well-being.",
      text: "Learn about health-conscious habits, fitness routines, and mental well-being strategies.",
    },
    {
      id: "6",
      title: "Travel Adventures",
      image: "https://example.com/image6.jpg",
      summary:
        "Embark on virtual journeys with exciting travel stories and destinations.",
      text: "Experience the wonders of different places and cultures through captivating travel narratives.",
    },
  ]);

  return (
    <Routes>
      <Route path="/" element={<NewsList news={news} />} />
      <Route path=":newsId/*" element={<NewsDetail news={news} />} />
    </Routes>
  );
};

export default NewsPage;
