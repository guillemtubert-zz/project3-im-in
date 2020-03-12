import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import "../css/signup.css";


class Signup extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;

    this.props.signup(username, password);
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className='entire'>
        <h1 className="signuptext">SIGN UP</h1>
<br/>
        <form onSubmit={this.handleFormSubmit}>
          <br/>
          <label className="userpw">Username:</label>
          <br/>
          <input
            className="formulari"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <br/>

          <label className="userpw">Password:</label>
          <br/>
          <input
            className="formulari"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <br/>
          <input type="submit" value="Signup" className="signup-button" />
        </form>
        <br/>
        <p className="haveaccount">Already have account?
        <Link to={"/login"} className="accountLink"> Login</Link>
        </p>
      </div>
    );
  }
}

export default withAuth(Signup);// ara el signup té tota la info de withAuth
