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
      <div className="page">
        <br/>
        <h1>Private </h1>
        <br/>
        <h1>Welcome {this.props.user.username}</h1>
        <br/>

            <Link to="/groups">
              {" "}
              <button className="buttons">Groups</button>{" "}
            </Link>
            <br/>
            <br/>


            <Link to="/create">
              {" "}
              <button className="buttons">Create</button>{" "}
            </Link>
            <br/>
            <br/>

            <Link to="/join">
              {" "}
              <button className="buttons">Join</button>{" "}
            </Link>
            <br/>
            <br/>


            <button onClick={logout} className="buttons">Logout</button>

      </div>
    );
  }
}

export default withAuth(Private);
