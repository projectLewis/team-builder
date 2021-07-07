import React from "react";

const TeamDisplay = ({ currentTeam, handleEdit }) => {
  return (
    <div>
      Current Team Members:
      {currentTeam
        ? currentTeam.map(member => {
            return (
              <span key={member.email}>
                {member.name}
                <button
                  onClick={() => {
                    handleEdit(member);
                  }}
                >
                  edit
                </button>
              </span>
            );
          })
        : null}
    </div>
  );
};

export default TeamDisplay;
