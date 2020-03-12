import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";
import groupsService from "./../lib/groups-service.js";
import "../css/join.css";



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
        <div className="allpage">
          {/* <div className="row"> */}
         <Link to="/private">
            {" "}
            <button className="backbutton">BACK</button>{" "}
            </Link>
        <h1 className="title">JOIN </h1>
        {/* </div> */}
      <div className="form">

        <form onSubmit={this.handleSubmit}>

          <label className="entercode">Enter Code</label>
          <br/>
            <input
              className="field"
              type="text"
              name="groupid"
              value={this.state.groupid}
              onChange={this.handleChange}
            />
            <br/>
            <br/>
            <button type="submit" className="joinbutton">JOIN</button>
          </form>
          </div>
          {/* {this.props.user.username} */}
      </div>

    );
  }
}

export default withAuth(Join);
