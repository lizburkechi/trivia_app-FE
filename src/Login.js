import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Login({ setUser }) {
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });
    const [errors, setErrors] = useState([]);
    const history = useHistory();

      function handleChange(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }
      
      function handleSubmit(e) {
        e.preventDefault();
        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then((r) => {
          return r.json().then((data) => {
          if (r.ok) {
            return data;
          } else {
            throw data;
          }
        });
      })
        .then((data) => {
          const { user, token } = data;
          localStorage.setItem("token", token);
            setUser(user);
            history.push("/profile");
          })
          .catch((error) => {
            setErrors(error.errors);
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
                {errors.map((error) => (
                <p style={{ color: "blue" }} key={error}>
                  {error}
                </p>
                ))}
                <input type="submit" value="Login" />
            </form>
        </div>
    )
}
