import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";
import groupsService from "./../lib/groups-service.js";
import "../css/create.css";


class Create extends Component {
  state={
    name:"", 
    description:"", 
    duration:"", 
    maxParticipants:""
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event =>{
    event.preventDefault();
    const { name, description, duration, maxParticipants } = this.state;
    groupsService.create({ name, description, duration, maxParticipants })
    .then(createdGroup => {
      this.props.history.push(`/groups/${createdGroup._id}`);
    })
    .catch(err=> console.log(err))
  }
  
  render() {
    return (
      <div className="entire">
        <Link to="/private">
            {" "}
            <button className="backbuttonX">Back</button>{" "}
            </Link>
        <h1 className="createtitle">Create a group</h1>

        {/* {this.props.user.username} */}

        <form onSubmit={this.handleSubmit}>

        <div className="form">

        <label className="form-titles">Group name:</label>
          <input
          className="cells"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label className="form-titles">Description:</label>

          <input
          className="cells"

            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <label className="form-titles">Duration:</label>

          <input
          className="cells"

            type="number"
            name="duration"
            value={this.state.duration}
            onChange={this.handleChange}
          />

          <label className="form-titles">Max Participants:</label>

          <input
          className="cells"

            type="number"
            name="maxParticipants"
            value={this.state.maxParticipants}
            onChange={this.handleChange}
          />
          </div>

          <button type="submit" className="createbuttons">Create group</button>
        </form>
      </div>
    );
  }
}

export default withAuth(Create);
