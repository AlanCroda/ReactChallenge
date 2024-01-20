import React, { useState } from "react";
import UserList from "../components/users/UserList";
import UserForm from "../components/users/UserForm";

const UsersPage: React.FC = () => {
  const [selectedUser, setSelectedUser] = useState<{
    id?: string;
    name: string;
    email: string;
  } | null>(null);

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
  };

  const handleSaveUser = (user: {
    id?: string;
    name: string;
    email: string;
  }) => {
    //TODO: Add save logic
    console.log("Save user:", user);

    // Clear the selected user after saving
    setSelectedUser(null);
  };

  return (
    <div>
      <UserList onViewUser={handleViewUser} onEditUser={handleEditUser} />
      <UserForm user={selectedUser} onSave={handleSaveUser} />
    </div>
  );
};

export default UsersPage;
