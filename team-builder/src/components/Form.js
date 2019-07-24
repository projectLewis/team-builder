import React from "react";

const Form = ({ setTeamMember, teamMember, setCurrentTeam, currentTeam }) => {
  const handleSubmit = e => {
    e.preventDefault();
    if (currentTeam) {
      currentTeam.forEach(member => {
        if (teamMember.email === member.email) {
          return;
        }
      });
    } else {
      setCurrentTeam(currentTeam ? [...currentTeam, teamMember] : [teamMember]);
      setTeamMember({ name: "", email: "", role: "" });
    }
    // console.log(currentTeam);
  };
  const handleChange = e => {
    // console.log(e.target.value);
    setTeamMember({ ...teamMember, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Add A Team Member</legend>
        <label>Name:</label>
        <br />
        <input
          type="text"
          name="name"
          placeholder="name"
          value={teamMember.name}
          onChange={handleChange}
          required
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={teamMember.email}
          onChange={handleChange}
          required
        />
        <br />
        <label>Role:</label>
        <br />
        <select name="role" value={teamMember.role} onChange={handleChange}>
          <option value="">--Select your role--</option>
          <option value="frontend">Front End Developer</option>
          <option value="backend">Back End Developer</option>
          <option value="fullstack">Fullstack Developer</option>
        </select>
        {/* <input
          type="text"
          name="role"
          placeholder="team members role"
          onChange={handleChange}
        /> */}
        <br />
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  );
};

export default Form;
