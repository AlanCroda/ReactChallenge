import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import NewsPage from "./pages/NewsPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "./locales/en.json";
import esTranslations from "./locales/es.json";
import { UserProvider } from "./components/users/data/UserContext";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <UserProvider>
        <Routes>
          <Route path="/users/*" element={<UsersPage key="usersPageKey" />} />
          <Route path="/news/*" element={<NewsPage />} />
          <Route path="*" element={<UsersPage />} />
        </Routes>
      </UserProvider>
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
