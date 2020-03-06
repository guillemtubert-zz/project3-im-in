import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";
import groupsService from "./../lib/groups-service.js";


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
      <div>
        <h1>Create</h1>
        <h1>{this.props.user.username}</h1>

        <form onSubmit={this.handleSubmit}>

        <label>Group name:</label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />

          <label>Duration:</label>
          <input
            type="number"
            name="duration"
            value={this.state.duration}
            onChange={this.handleChange}
          />

          <label>Max Participants:</label>
          <input
            type="number"
            name="maxParticipants"
            value={this.state.maxParticipants}
            onChange={this.handleChange}
          />

          <button type="submit">Create group</button>
        </form>

        <Link to="/private">
            {" "}
            <button className="private">Back</button>{" "}
            </Link>
      </div>
    );
  }
}

export default withAuth(Create);
