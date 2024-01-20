import React, { useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import UserList from "../components/users/UserList";
import UserForm from "../components/users/UserForm";

const UsersPage: React.FC = () => {
  const [mockUsers, setMockUsers] = useState([
    { id: "1", name: "John Doe", email: "john@example.com" },
    { id: "2", name: "Jane Smith", email: "jane@example.com" },
    { id: "3", name: "Bob Johnson", email: "bob@example.com" },
  ]);

  const [selectedUser, setSelectedUser] = useState<{
    id?: string;
    name: string;
    email: string;
  } | null>(null);

  const navigate = useNavigate();
  const params = useParams();

  const handleViewUser = (user: {
    id: string;
    name: string;
    email: string;
  }) => {
    setSelectedUser(user);
  };

  const handleEditUser = (user: {
    id: string;
    name: string;
    email: string;
  }) => {
    setSelectedUser(user);
    navigate(`/users/edit/${user.id}`);
  };

  const handleNewUser = () => {
    // Clear the selected user when creating a new user
    setSelectedUser(null);
    navigate("/newuser");
  };

  const handleSaveUser = (user: {
    id?: string;
    name: string;
    email: string;
  }) => {
    // Update users in state
    setMockUsers((prevUsers) => {
      if (user.id) {
        // If user.id exists, it means we are editing an existing user
        return prevUsers.map((prevUser) =>
          prevUser.id === user.id ? user : prevUser
        );
      } else {
        // If user.id doesn't exist, it means we are creating a new user
        return [...prevUsers, { ...user, id: String(prevUsers.length + 1) }];
      }
    });

    // Clear the selected user after saving
    setSelectedUser(null);

    // Navigate back to the user list
    navigate("/users");
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <UserList
              users={mockUsers}
              onViewUser={handleViewUser}
              onEditUser={handleEditUser}
              onNewUser={handleNewUser}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <UserForm
              users={mockUsers}
              onSave={handleSaveUser}
              user={selectedUser}
            />
          }
        />
        <Route
          path="/newuser"
          element={<UserForm users={mockUsers} onSave={handleSaveUser} />}
        />
      </Routes>
    </div>
  );
};

export default UsersPage;
