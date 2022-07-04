import React, { useState } from "react";
import UserTable from "./tables/UserTable";

const App = () => {
  const userData = [
    { id: 1, name: "Phil", username: "philly" },
    { id: 2, name: "Scott", username: "scotty" },
    { id: 3, name: "Nick", username: "nicki" },
  ];

  const [users, setUsers] = useState(userData);

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
        </div>
        <UserTable users={users} />
      </div>
    </div>
  );
};

export default App;
