import React, { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import UserDetailModal from "./UserDetailModal";
import { useTranslation } from "react-i18next";

interface UserListProps {
  users: { id: string; name: string; email: string }[];
  onViewUser: (user: { id: string; name: string; email: string }) => void;
  onEditUser: (user: { id: string; name: string; email: string }) => void;
  onNewUser: () => void;
  onDeleteUser: (id: string) => void;
}

const UserList: React.FC<UserListProps> = ({
  users,
  onEditUser,
  onDeleteUser,
}) => {
  const { t } = useTranslation();

  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
    email: "",
  });
  const [showUserDetailModal, setShowUserDetailModal] = useState(false);

  const handleViewUser = (user: {
    id: string;
    name: string;
    email: string;
  }) => {
    setSelectedUser(user);
    setShowUserDetailModal(true);
  };

  const handleEditUser = (user: {
    id: string;
    name: string;
    email: string;
  }) => {
    onEditUser(user);
    navigate(`/users/edit/${user.id}`);
  };

  const handleDeleteUser = (userId: string) => {
    onDeleteUser(userId);
  };

  const handleCloseUserDetailModal = () => {
    setShowUserDetailModal(false);
  };

  return (
    <div className="userList-wrapper">
      <h2> {t("userList-title")}</h2>
      <ListGroup>
        {users.map((user) => (
          <ListGroup.Item key={user.id}>
            <div>
              {user.name} - {user.email}
            </div>
            <div>
              <Button
                variant="info"
                className="ml-2"
                onClick={() => handleViewUser(user)}
              >
                {t("view-btn")}
              </Button>
              <Button
                variant="primary"
                className="ml-2"
                onClick={() => handleEditUser(user)}
              >
                {t("edit-btn")}
              </Button>
              <Button
                variant="danger"
                className="ml-2"
                onClick={() => handleDeleteUser(user.id)}
              >
                {t("delete-btn")}
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Create User Button */}
      <Link to="/newuser">
        <Button variant="success" className="mt-3">
          {t("createUser-btn")}
        </Button>
      </Link>

      {/* User Detail Modal */}
      {selectedUser.id && (
        <UserDetailModal
          user={selectedUser}
          onClose={handleCloseUserDetailModal}
        />
      )}
    </div>
  );
};

export default UserList;
