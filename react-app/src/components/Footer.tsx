import React from "react";
import { Button } from "react-bootstrap";

const Footer: React.FC = () => {
  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <Button variant="outline-primary" className="mr-2">
        English
      </Button>
      <Button variant="outline-primary">Español</Button>
    </div>
  );
};

export default Footer;
