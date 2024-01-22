import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";

interface UserFormProps {
  users: { id: string; name: string; email: string }[];
  onSave: (user: { id?: string; name: string; email: string }) => void;
  user?: { id?: string; name: string; email: string } | null;
}

const UserForm: React.FC<UserFormProps> = ({ onSave, user }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  useEffect(() => {
    // If there's a user prop, populate the form fields
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
      });
    }
  }, [user]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email) {
      // Handle form validation error
      return;
    }

    // If there's a user prop, it means we are editing an existing user
    if (user) {
      onSave({
        id: user.id,
        name: formData.name,
        email: formData.email,
      });
    } else {
      // If there's no user prop, it means we are creating a new user
      onSave({
        name: formData.name,
        email: formData.email,
      });
    }

    // Navigate back to the user list page
    navigate("/users");
  };

  const editUserTrans = t("editUser-btn");
  const createUserTrans = t("createUser-btn");

  return (
    <Form className="user-form" onSubmit={handleSubmit}>
      <Form.Group controlId="formName">
        <Form.Label>{t("name-text")}</Form.Label>
        <Form.Control
          type="text"
          placeholder={t("name-placeholder")}
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formEmail">
        <Form.Label>{t("email-text")}</Form.Label>
        <Form.Control
          type="email"
          placeholder={t("email-placeholder")}
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button className="form-submit-btn" variant="primary" type="submit">
        {user ? editUserTrans : createUserTrans}
      </Button>
    </Form>
  );
};

export default UserForm;
