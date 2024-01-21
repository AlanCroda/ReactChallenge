import React from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

interface UserDetailModalProps {
  user: { id: string; name: string; email: string };
  onClose: () => void;
}

const UserDetailModal: React.FC<UserDetailModalProps> = ({ user, onClose }) => {
  const { t } = useTranslation();

  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{t("userDetails-title")}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>ID: {user.id}</p>
        <p>
          {t("name-text")}: {user.name}
        </p>
        <p>
          {t("email-text")}: {user.email}
        </p>
      </Modal.Body>
    </Modal>
  );
};

export default UserDetailModal;
