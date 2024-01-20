import React, { useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import UserList from "../components/users/UserList";
import UserForm from "../components/users/UserForm";

const UsersPage: React.FC = () => {
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
    // TODO: Add save logic
    console.log("Save user:", user);

    // Clear the selected user after saving
    setSelectedUser(null);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <UserList
              onViewUser={handleViewUser}
              onEditUser={handleEditUser}
              onNewUser={handleNewUser}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={<UserForm user={selectedUser} onSave={handleSaveUser} />}
        />
        <Route path="/newuser" element={<UserForm onSave={handleSaveUser} />} />
      </Routes>
    </div>
  );
};

export default UsersPage;
