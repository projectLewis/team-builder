import React, { useState } from "react";
import Form from "./components/Form";
import TeamDisplay from "./components/TeamDisplay";

const App = () => {
  const [teamMember, setTeamMember] = useState({
    name: "",
    email: "",
    role: "",
    index: ""
  });
  const [currentTeam, setCurrentTeam] = useState(null);

  const handleEdit = () => {
    setCurrentTeam(currentTeam ? [...currentTeam, teamMember] : [teamMember]);
    setTeamMember({ name: "", email: "", role: "" });
  };

  return (
    <div>
      <TeamDisplay currentTeam={currentTeam} handleEdit={handleEdit} />
      {/* TODO: Make component to display current team members and edit them */}
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
