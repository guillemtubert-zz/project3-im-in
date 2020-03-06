import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

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
    // const { username, password } = this.state;

    return (
      <div>
        <h1>HOMEPAGE</h1>
        <h2>LOGO HERE</h2>

        <Link to="/login">
              {" "}
              <button className="navbar-button">Login</button>{" "}
            </Link>
            <br />
            <Link to="/signup">
              {" "}
              <button className="navbar-button">Sign Up</button>{" "}
            </Link>
      </div>
    );
  }
}

export default withAuth(Login);
