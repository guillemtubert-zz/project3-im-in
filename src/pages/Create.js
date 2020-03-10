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
      <div>
        <Link to="/private">
            {" "}
            <button className="backbuttons">Back</button>{" "}
            </Link>
            <br/>
            <br/>
        <h1>Create a group{this.props.user.username}</h1>

        <form onSubmit={this.handleSubmit}>

        <div className="form">

        <label>Group name:</label>
        <br/>
          <input
          className="cells"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        <br/>


          <label>Description:</label>
        <br/>

          <input
          className="cells"

            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
        <br/>

          <label>Duration:</label>
        <br/>

          <input
          className="cells"

            type="number"
            name="duration"
            value={this.state.duration}
            onChange={this.handleChange}
          />
        <br/>


          <label>Max Participants:</label>
        <br/>

          <input
          className="cells"

            type="number"
            name="maxParticipants"
            value={this.state.maxParticipants}
            onChange={this.handleChange}
          />
          </div>
          <br/>

          <button type="submit" className="createbuttons">Create group</button>
        </form>
        <br/>
      </div>
    );
  }
}

export default withAuth(Create);
