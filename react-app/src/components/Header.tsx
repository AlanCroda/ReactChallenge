import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Header: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand className="btn btn-outline-dark" as={Link} to="/users">
        React Challenge App
      </Navbar.Brand>
      <div className="separator"></div>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="btn btn-outline-dark" as={Link} to="/users">
            {t("user-navBtn")}
          </Nav.Link>
          <Nav.Link className="btn btn-outline-dark" as={Link} to="/news">
            {t("news-navBtn")}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
