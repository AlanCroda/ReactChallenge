import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserList from "../components/users/UserList";
import UserForm from "../components/users/UserForm";
import { useUserContext } from "../components/users/data/UserContext";

const UsersPage: React.FC = () => {
  const { initialUsers } = useUserContext();

  const [mockUsers, setMockUsers] = useState(initialUsers);

  const [selectedUser, setSelectedUser] = useState<{
    id?: string;
    name: string;
    email: string;
  } | null>(null);

  const navigate = useNavigate();

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
    setMockUsers((prevUsers: any) => {
      if (prevUsers) {
        if (user.id) {
          // If user.id exists, it means we are editing an existing user
          return prevUsers.map((prevUser: any) =>
            prevUser.id === user.id ? user : prevUser
          );
        } else {
          // If user.id doesn't exist, it means we are creating a new user
          return [...prevUsers, { ...user, id: String(prevUsers.length + 1) }];
        }
      } else {
        // If prevUsers is undefined or null, initialize it with an empty array
        return [user];
      }
    });

    // Clear the selected user after saving
    setSelectedUser(null);

    // Navigate back to the user list
    navigate("/users");
  };

  const handleDeleteUser = (id: string) => {
    // Filter out the user with the specified id
    const updatedUsers = mockUsers.filter((user) => user.id !== id);

    // Update users in state
    setMockUsers(updatedUsers);

    // Clear the selected user after deleting
    setSelectedUser(null);
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
              onDeleteUser={handleDeleteUser}
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
