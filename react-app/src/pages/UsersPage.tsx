import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import UserList from "../components/users/UserList";
import UserForm from "../components/users/UserForm";

interface User {
  id: string;
  name: string;
  email: string;
}

interface UsersPageProps {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>; // Assuming you have a setUsers function
}

const UsersPage: React.FC<UsersPageProps> = ({ users, setUsers }) => {
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
    navigate(`/user/edit/${user.id}`);
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
    setUsers((prevUsers: any) => {
      if (user.id) {
        // If user.id exists, it means we are editing an existing user
        return prevUsers.map((prevUser: any) =>
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

  const handleDeleteUser = (id: string) => {
    // Filter out the user with the specified id
    const updatedUsers = users.filter((user) => user.id !== id);

    // Update users in state
    setUsers(updatedUsers);

    // Clear the selected user after deleting
    setSelectedUser(null);
  };

  return (
    <div className="userPage-wrapper">
      <Routes>
        <Route
          path="/"
          element={
            <UserList
              users={users}
              onEditUser={handleEditUser}
              onDeleteUser={handleDeleteUser}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <UserForm
              users={users}
              onSave={handleSaveUser}
              user={selectedUser}
            />
          }
        />
        <Route
          path="/newuser"
          element={<UserForm users={users} onSave={handleSaveUser} />}
        />
      </Routes>
    </div>
  );
};

export default UsersPage;
