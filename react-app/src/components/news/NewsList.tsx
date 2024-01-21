import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const NewsList: React.FC = () => {
  const { t } = useTranslation();
  // Fetch news data and display the list
  return (
    <div>
      <h2> {t("newsList-title")}</h2>
      <ul>
        <li>
          <Link to="/news/1">News 1</Link>
        </li>
        <li>
          <Link to="/news/2">News 2</Link>
        </li>
      </ul>
    </div>
  );
};

export default NewsList;
