import React from "react";
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {

  function logout() {
    localStorage.removeItem("token")
    setUser(null);
  }

  return (
    <div className="nav">
      <div>
        <Link to="/versus-trivia">Home</Link>
      </div>
      <div>
        {user ? (
          <>
            <Link to="/gameboard">Play</Link>
            <Link to="/profile">Profile</Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/signup">Signup</Link>
            <Link to="/login">Login</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;