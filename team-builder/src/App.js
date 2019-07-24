import React, { useState } from "react";
import Form from "./components/Form";
import TeamDisplay from "./components/TeamDisplay";

const App = () => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: ""
  });
  const [currentTeam, setCurrentTeam] = useState(null);

  const handleEdit = individual => {
    setTeamMember({
      name: individual.name,
      email: individual.email,
      role: individual.role
    });
    setCurrentTeam(prevTeam => {
      prevTeam.splice(currentTeam.indexOf(individual), 1);
      return prevTeam;
    });
  };

  return (
    <div>
      <TeamDisplay currentTeam={currentTeam} handleEdit={handleEdit} />
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
