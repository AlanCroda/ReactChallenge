function UsersList() {
  return (
    <>
      <h1>UsersList</h1>
      <ListGroup />
    </>
  );
}

function ListGroup() {
  const items = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    { id: 3, name: "Bob Smith", email: "bob@example.com" },
  ];
  return (
    <ul className="list-group">
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

export default UsersList;
