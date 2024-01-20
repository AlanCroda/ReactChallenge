import React from "react";
import { Modal, Button } from "react-bootstrap";

interface UserDetailModalProps {
  user: { id: string; name: string; email: string };
  onClose: () => void;
}

const UserDetailModal: React.FC<UserDetailModalProps> = ({ user, onClose }) => {
  return (
    <Modal show onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
      </Modal.Body>
    </Modal>
  );
};

export default UserDetailModal;
