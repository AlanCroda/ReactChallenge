import React, { createContext, useContext, ReactNode, useState } from "react";

interface UserContextProps {
  children: ReactNode;
}

interface User {
  id: string;
  name: string;
  email: string;
}

interface UserContextValue {
  initialUsers: User[];
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider: React.FC<UserContextProps> = ({ children }) => {
  const [initialUsers, setInitialUsers] = useState<User[]>([
    { id: "1", name: "John Doe", email: "john@example.com" },
    { id: "2", name: "Jane Smith", email: "jane@example.com" },
    { id: "3", name: "Bob Johnson", email: "bob@example.com" },
  ]);

  // You can fetch or set the initialUsers data here as needed

  const contextValue: UserContextValue = {
    initialUsers,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};
