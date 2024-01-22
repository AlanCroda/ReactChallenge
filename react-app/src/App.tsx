import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import NewsPage from "./pages/NewsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en.json";
import esTranslations from "./locales/es.json";
import UserDetailPage from "./pages/UserDetailPage";

const App: React.FC = () => {
  const [users, setUsers] = useState([
    { id: "1", name: "John Doe", email: "john@example.com" },
    { id: "2", name: "Jane Smith", email: "jane@example.com" },
    { id: "3", name: "Bob Johnson", email: "bob@example.com" },
  ]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/users/*"
          element={<UsersPage users={users} setUsers={setUsers} />}
        />
        <Route
          path="/user/:userId"
          element={<UserDetailPage users={users} />}
        />
        <Route path="/news/*" element={<NewsPage />} />
        <Route
          path="*"
          element={<UsersPage users={users} setUsers={setUsers} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
};

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    es: {
      translation: esTranslations,
    },
  },
  lng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default App;
