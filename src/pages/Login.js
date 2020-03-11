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
      <div className="entire">
        <img src="/logoimin.png" alt="logo" className="logo"/>
        <h1 className="loginlogo">Login</h1>

        <form onSubmit={this.handleFormSubmit}>
          <label className="userpw">Username:</label>
          <br/>
          <input
            className="login-form"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <b></b>

          <label className="userpw">Password:</label>
          <br/>
          <input
            className="login-form"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br/>

          <input type="submit" value="Login" className="login-button" />
        </form>
        <br/>
        <p className="donthaveaccount">Don't have an account?
        <Link to={"/signup"} className='notaccountLink'> Signup</Link>
        </p>
      </div>

    );
  }
}

export default withAuth(Login);
