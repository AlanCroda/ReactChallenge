import React, { useEffect, useState } from "react";
import { User, getUsers } from "../User/User"; // Import the User type

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    // Fetch users when the component mounts (ideally would be an API call)
    const fetchData = async () => {
      const fetchedUsers = getUsers();
      setUsers(fetchedUsers);
    };

    // const deleteUser = (selectedUser) => {

    // };

    fetchData();
  }, []);

  return (
    <div id="users-list-container">
      <h2>Users List</h2>
      <div>
        <ul className="list-group">
          {users.map((user) => (
            <li className="list-group-item" key={user.id}>
              <div className="user-info">
                {user.name} - {user.email}
              </div>
              <div className="user-buttons">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UsersList;
