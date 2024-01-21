import React from "react";
import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="footer">
      <Button
        variant="outline-primary"
        className="mr-2"
        onClick={() => changeLanguage("en")}
      >
        EN
      </Button>
      <Button variant="outline-primary" onClick={() => changeLanguage("es")}>
        ES
      </Button>
    </div>
  );
};

export default Footer;
