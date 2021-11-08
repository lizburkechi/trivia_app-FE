import React, { useState } from "react";


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
      }

    return (
        <div>
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
            <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={"single_host_origin"}
            />
        </div>
    )
}
