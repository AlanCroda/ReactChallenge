import React from "react";
import { Routes, Route, useParams } from "react-router-dom";
import UserList from "../components/users/UserList";
import UserDetail from "../components/users/UserDetail";
import UserForm from "../components/users/UserForm";

const UsersPage: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="new" element={<UserForm />} />
      <Route
        path=":userId"
        element={<UserDetail userId={useParams().userId} />}
      />
    </Routes>
  );
};

export default UsersPage;
