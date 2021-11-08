import React, { useState } from "react";
// import GoogleLogin from "react-google-login";

export default function Login() {
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
            console.log(user);
        });
      }

    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  autoComplete="off"
                  value={formData.username}
                  onChange={handleChange}
                />
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="current-password"
                />
                <input type="submit" value="Login" />
            </form>
            <hr />
            {/* <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
            /> */}
        </div>
    )
}
