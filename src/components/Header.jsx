import React from "react";
import "./style.css"; // Import the CSS file for styling

function Header({ count }) {
  return (
    <div className="header-container">
      <h1 className="header-title">Clicky Game</h1>
      <p className="header-score">Score: {count}</p>
    </div>
  );
}

export default Header;
