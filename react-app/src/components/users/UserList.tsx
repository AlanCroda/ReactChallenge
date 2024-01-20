import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface UserListProps {
  onViewUser: (user: { id: string; name: string; email: string }) => void;
  onEditUser: (user: { id: string; name: string; email: string }) => void;
}

const mockUsers = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com" },
];

const UserList: React.FC<UserListProps> = ({ onViewUser, onEditUser }) => {
  const navigate = useNavigate();

  const handleViewUser = (user: {
    id: string;
    name: string;
    email: string;
  }) => {
    // TODO: Handle View functionality
    // Navigate to the UserForm with the userId for viewing
    onViewUser(user);
    navigate(`/users/${user.id}`);
  };

  const handleEditUser = (user: {
    id: string;
    name: string;
    email: string;
  }) => {
    // Call the onEditUser prop to handle the edit action
    onEditUser(user);
    // Navigate to the UserForm with the userId for editing
    navigate(`/users/edit/${user.id}`);
  };

  const handleDeleteUser = (userId: string) => {
    //TODO: Add functionality to handle deleting user
    console.log(`Delete user with ID: ${userId}`);
  };

  return (
    <div>
      <h2>User List</h2>
      <ListGroup>
        {mockUsers.map((user) => (
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
    </div>
  );
};

export default UserList;
