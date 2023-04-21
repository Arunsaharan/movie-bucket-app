import React from "react";
import "./Button.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Button = ({ content }) => {
  return (
    <button className="btn-red">
      <PlayArrowIcon /> {content}
    </button>
  );
};

export default Button;
