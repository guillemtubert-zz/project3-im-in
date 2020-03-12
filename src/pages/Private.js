import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";
import "../css/private.css";



class Private extends Component {
  render() {
    const { 
      // user, 
      logout, 
      // isLoggedIn 
    } = this.props;

    return (
      <div className="full-page">
        <div className="welcome">
        <h1>Welcome back,</h1>
        <h2>{this.props.user.username}</h2>
        </div>

            <Link to="/groups">
              {" "}
              <button className="seegroups">See groups</button>{" "}
            </Link>
        
            <div className="row">
            <Link to="/create">
              {" "}
              <button className="create-btn">Create</button>{" "}
            </Link>
           
            <Link to="/join">
              {" "}
              <button className="join-btn">Join</button>{" "}
            </Link>
            </div>

            <button onClick={logout} className="logout">Logout</button>

      </div>
    );
  }
}

export default withAuth(Private);
