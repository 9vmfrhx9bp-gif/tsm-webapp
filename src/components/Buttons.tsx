import React from "react";
import "./Buttons.css";

interface ButtonProps {
  id: number;
  onDelete: (id: number) => void;
}

export const DeleteButton = ({ id, onDelete }: ButtonProps) => {
  return (
    <div>
      <button
        onClick={() => onDelete(id)}
        type="button"
        className="btn btn-danger"
      >
        Delete
      </button>
    </div>
  );
};

export const SettingsButton = () => {
  const onChange = () => console.log("changed");
  return (
    <div>
      <button
        onClick={onChange}
        type="button"
        className="btn btn-outline-secondary"
      >
        Change
      </button>
    </div>
  );
};
