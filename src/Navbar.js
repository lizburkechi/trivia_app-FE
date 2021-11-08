import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="nav">
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <button>Logout</button>
      </div>
    </div>
  );
}

export default NavBar;