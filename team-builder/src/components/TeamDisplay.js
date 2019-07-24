import React from "react";

const TeamDisplay = ({ currentTeam }) => {
  return (
    <div>
      Current Team Members:
      {currentTeam
        ? currentTeam.map(member => {
            return <span> {member.name}</span>;
          })
        : null}
    </div>
  );
};

export default TeamDisplay;
