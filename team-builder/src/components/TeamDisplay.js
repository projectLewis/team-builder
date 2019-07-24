import React from "react";

const TeamDisplay = ({ currentTeam }) => {
  return (
    <div>
      Current Team Members:
      {currentTeam
        ? currentTeam.map(member => {
            return (
              <span key={member.email}>
                {member.name}
                <button>edit</button>
              </span>
            );
          })
        : null}
    </div>
  );
};

export default TeamDisplay;
