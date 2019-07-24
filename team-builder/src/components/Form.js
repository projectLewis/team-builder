import React from "react";

const Form = ({ setTeamMember, teamMember }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = e => {
    console.log(e.target.value);
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
          onChange={handleChange}
        />
        <br />
        <label>Email:</label>
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <br />
        <label>Role:</label>
        <br />
        <input
          type="text"
          name="role"
          placeholder="team members role"
          onChange={handleChange}
        />
      </fieldset>
    </form>
  );
};

export default Form;
