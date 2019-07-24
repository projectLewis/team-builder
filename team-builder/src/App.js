import React, { useState } from "react";
import Form from "./components/Form";

const App = () => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });
  const [currentTeam, setCurrentTeam] = useState();

  return (
    <div>
      <div>{teamMember.name}</div>
      <Form
        teamMember={teamMember}
        setTeamMember={setTeamMember}
        currentTeam={currentTeam}
        setCurrentTeam={setCurrentTeam}
      />
    </div>
  );
};

export default App;
