import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import "../css/login.css";


class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.login(username, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <img src="src/css/logoimin.png" alt="logo" className="logo"/>

        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <br/>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <b></b>

          <label>Password:</label>
          <br/>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br/>

          <input type="submit" value="Login" />
        </form>
        <br/>
        <p>Don't have an account?</p>
        <Link to={"/signup"}> Signup</Link>
      </div>
    );
  }
}

export default withAuth(Login);
