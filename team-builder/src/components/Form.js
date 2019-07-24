import React from "react";

const Form = ({ setTeamMember }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };
  const handleChange = e => {
    console.log(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Form</legend>
        <label>Add Team Member</label>
        <input type="text" onChange={handleChange} />
      </fieldset>
    </form>
  );
};

export default Form;
