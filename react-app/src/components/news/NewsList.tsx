import React from "react";
import { useTranslation } from "react-i18next";
import { NewsCard } from "./NewsCard";
import { News } from "../../pages/NewsPage";

interface NewsListProps {
  news: News[];
}

const NewsList: React.FC<NewsListProps> = ({ news }) => {
  const { t } = useTranslation();

  return (
    <div>
      <h2>{t("newsList-title")}</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {news.map((item) => (
          <NewsCard key={item.id} newsItem={item} />
        ))}
      </div>
    </div>
  );
};

export default NewsList;
