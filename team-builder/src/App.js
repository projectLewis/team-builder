import React, { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });

  return (
    <div>
      <div>{teamMember.name}</div>
      <Form setTeamMember={setTeamMember} teamMember={teamMember} />
    </div>
  );
};

export default App;
