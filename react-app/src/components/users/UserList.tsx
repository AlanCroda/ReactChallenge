import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface UserListProps {
  users: { id: string; name: string; email: string }[];
  onEditUser: (user: { id: string; name: string; email: string }) => void;
  onDeleteUser: (id: string) => void;
}

const UserList: React.FC<UserListProps> = ({
  users,
  onEditUser,
  onDeleteUser,
}) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

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

  return (
    <div className="userList-wrapper">
      <ListGroup>
        {users.map((user) => (
          <ListGroup.Item key={user.id}>
            <div>
              {user.name} - {user.email}
            </div>
            <div>
              <Link to={`/user/${user.id}`} className="mr-2">
                <Button variant="info">{t("view-btn")}</Button>
              </Link>
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
    </div>
  );
};

export default UserList;
