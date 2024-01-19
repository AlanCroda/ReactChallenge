export interface User {
  id: number;
  name: string;
  email: string;
}

export function getUsers(): User[] {
  // Mock data for demonstration purposes
  return [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    { id: 3, name: "Bob Smith", email: "bob@example.com" },
  ];
}
