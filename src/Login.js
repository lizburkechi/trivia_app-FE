import React, { useState } from "react";

export default function Login({ setUser }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
      });

      function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
      
      function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
            method: "POST"
        })
        .then((r) => r.json())
        .then((user) =>{
            setUser(user);
        });
      }

    return (
        <div>
            <form className="login" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  autoComplete="off"
                  value={formData.username}
                  onChange={handleChange}
                  className="login-input"
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  className="login-input"
                />
                <input type="submit" value="Login" />
            </form>
            <hr />
        </div>
    )
}
