import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NewsList from "../components/news/NewsList";
import NewsDetail from "../components/news/NewsDetail";
import image1 from "../assets/images/1.jpg";
import image2 from "../assets/images/2.jpg";
import image3 from "../assets/images/3.jpg";
import image4 from "../assets/images/4.jpg";
import image5 from "../assets/images/5.jpg";
import image6 from "../assets/images/6.jpg";

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
      image: image1,
      summary: "A brief summary of the exciting news.",
      text: "The full text of the exciting news goes here. It can be quite detailed.\n\n What is Lorem Ipsum?\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.\n\n Why do we use it?\n It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    },
    {
      id: "2",
      title: "Breaking News",
      image: image2,
      summary: "A brief summary of the breaking news.",
      text: "This is the breaking news that everyone needs to know about. It's important and timely.",
    },
    {
      id: "3",
      title: "Latest Updates",
      image: image3,
      summary: "Stay updated with the latest news in this summary.",
      text: "Get the latest updates on various topics. Stay informed and engaged with the world.",
    },
    {
      id: "4",
      title: "Tech Innovations",
      image: image4,
      summary:
        "Discover the latest technological innovations shaping the future.",
      text: "Explore cutting-edge technologies and their impact on various industries.",
    },
    {
      id: "5",
      title: "Health & Wellness Tips",
      image: image5,
      summary: "Tips for a healthy lifestyle and overall well-being.",
      text: "Learn about health-conscious habits, fitness routines, and mental well-being strategies.",
    },
    {
      id: "6",
      title: "Travel Adventures",
      image: image6,
      summary:
        "Embark on virtual journeys with exciting travel stories and destinations.",
      text: "Experience the wonders of different places and cultures through captivating travel narratives.",
    },
  ]);

  return (
    <Routes>
      <Route path="/" element={<NewsList news={news} />} />
      <Route path=":newsId" element={<NewsDetail news={news} />} />
    </Routes>
  );
};

export default NewsPage;
