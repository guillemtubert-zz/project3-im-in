import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../css/home.css";
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
        <div className="header">
        <h1>HOMEPAGE</h1>
        <h2>hue </h2>
        <img src="/logoimin.png" alt="logo" className="logo"/>
        </div>

        <div>
        <Link to="/login">
              {" "}
              <button className="buttons">Login</button>{" "}
            </Link>
            <br />
            <br/>
            <Link to="/signup">
              {" "}
              <button className="buttons">Sign Up</button>{" "}
            </Link>
            </div>
      </div>
    );
  }
}

export default withAuth(Login);
