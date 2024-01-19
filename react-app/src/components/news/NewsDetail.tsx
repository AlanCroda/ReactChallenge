import React from "react";
import { Link } from "react-router-dom";

const NewsList: React.FC = () => {
  // Fetch news data and display the list
  return (
    <div>
      <h2>News List</h2>
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
