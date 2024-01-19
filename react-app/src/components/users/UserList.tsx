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
  return (
    <div>
      <h2>User List</h2>
      <ListGroup>
        {mockUsers.map((user) => (
          <ListGroup.Item key={user.id}>
            {user.name} - {user.email}
            <Link to={`/users/${user.id}`}>
              <Button variant="primary">View</Button>
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default UserList;
