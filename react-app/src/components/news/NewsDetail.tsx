import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NewsList: React.FC = () => {
  const { t } = useTranslation();

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
