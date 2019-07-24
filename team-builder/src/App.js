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
      Test
      <Form setTeamMembers={setTeamMember} />
    </div>
  );
};

export default App;
