import React from "react";
import { useParams } from "react-router-dom";

interface UserDetailProps {
  userId?: string;
}

const UserDetail: React.FC<UserDetailProps> = ({ userId }) => {
  const { userId: routeUserId } = useParams();

  // Use userId from props if available, otherwise use the one from the route params
  const selectedUserId = userId || routeUserId;

  if (!selectedUserId) {
    return <div>No user selected</div>;
  }

  // Fetch user details based on selectedUserId and display them
  return <div>User Detail for ID: {selectedUserId}</div>;
};

export default UserDetail;
