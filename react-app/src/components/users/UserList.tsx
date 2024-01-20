import React, { useState } from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import UserDetailModal from "./UserDetailModal";

interface UserListProps {
  users: { id: string; name: string; email: string }[];
  onViewUser: (user: { id: string; name: string; email: string }) => void;
  onEditUser: (user: { id: string; name: string; email: string }) => void;
  onNewUser: () => void;
}

const UserList: React.FC<UserListProps> = ({ users, onEditUser }) => {
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
    // TODO: Add functionality to handle deleting user
    console.log(`Delete user with ID: ${userId}`);
  };

  const handleCloseUserDetailModal = () => {
    setShowUserDetailModal(false);
  };

  return (
    <div>
      <h2>User List</h2>
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
                View
              </Button>
              <Button
                variant="primary"
                className="ml-2"
                onClick={() => handleEditUser(user)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                className="ml-2"
                onClick={() => handleDeleteUser(user.id)}
              >
                Delete
              </Button>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Create User Button */}
      <Link to="/newuser">
        <Button variant="success" className="mt-3">
          Create User
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
