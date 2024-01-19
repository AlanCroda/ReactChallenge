import React from "react";
import { ListGroup, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

// Mock users data
const mockUsers = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com" },
];

const UserList: React.FC = () => {
  const handleEditUser = (userId: string) => {
    //TODO: Add functionality to handle editing user
    console.log(`Edit user with ID: ${userId}`);
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
            {user.name} - {user.email}
            <Button
              variant="primary"
              className="ml-2"
              onClick={() => handleEditUser(user.id)}
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
            <Link to={`/users/${user.id}`}>
              <Button variant="info" className="ml-2">
                View
              </Button>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserList;
