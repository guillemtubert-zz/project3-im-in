import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";
import groupsService from "./../lib/groups-service.js";


class Join extends Component {
state = {
  groupid: ""
}

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event =>{
    event.preventDefault();
    const { groupid} = this.state;
    groupsService.join({ groupid })
    .then( ()=> {
      this.props.history.push(`/groups/${groupid}`);
    })
    .catch(err=> console.log(err))
  }

  render() {
    return (
      <div>
        <h1>JOIN PRIVATE ROUTE</h1>
        <h1>Join {this.props.user.username}</h1>

        <form onSubmit={this.handleSubmit}>

          <label>Insert code here:</label>
            <input
              type="text"
              name="groupid"
              value={this.state.groupid}
              onChange={this.handleChange}
            />
            <button type="submit">Join group</button>
          </form>

            <Link to="/private">
            {" "}
            <button className="private">Back</button>{" "}
            </Link>
      </div>

    );
  }
}

export default withAuth(Join);
