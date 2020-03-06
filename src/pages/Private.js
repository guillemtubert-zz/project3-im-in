import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../lib/Auth";

class Private extends Component {
  render() {
    const { 
      // user, 
      logout, 
      // isLoggedIn 
    } = this.props;

    return (
      <div>
        <h1>Private Route</h1>
        <h1>Welcome {this.props.user.username}</h1>

            <Link to="/groups">
              {" "}
              <button className="groups">Groups</button>{" "}
            </Link>

            <Link to="/create">
              {" "}
              <button className="create">Create</button>{" "}
            </Link>

            <Link to="/join">
              {" "}
              <button className="join">Join</button>{" "}
            </Link>

            <button onClick={logout}>Logout</button>

      </div>
    );
  }
}

export default withAuth(Private);
