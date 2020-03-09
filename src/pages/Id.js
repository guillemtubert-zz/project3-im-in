import React, { Component } from "react";
import { withAuth } from "../lib/Auth";
import { Link } from "react-router-dom";
import groupsService from "./../lib/groups-service.js";



class Id extends Component {

  state = {
    group:null,
    isLoading: true
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    groupsService.getOneGroup(id)
    .then( (group) => {
      console.log(group)
      this.setState({group, isLoading:false})})
    .catch( (err) => console.log(err));
  }

  handleSubmit = event =>{
    event.preventDefault();
    const { _id} = this.state.group;
    groupsService.leaveGroup( _id )
    .then( ()=> {
      this.props.history.push(`/groups`);
    })
    .catch(err=> console.log(err))
  }

  handleDelete = event => {
    event.preventDefault();
    const {_id} = this.state.group;
    groupsService.deleteGroup(_id)
    .then( () =>{
      this.props.history.push('/groups');
    })
    .catch(err => console.log(err))
  }


  render() {
            return (

              this.state.isLoading ?
              null :
              <div>
           <h1>GROUP id </h1>
            <h3>groupinfo: {this.state.group.name}</h3>
            <h3>participants:</h3> {this.state.group.participants.map(
              element => {
                return <p>{element.username}</p>
              }
            )}

              <form onSubmit={this.handleSubmit}>
                <button type='submit'>Leave group</button>
              </form>

              <form onSubmit={this.handleDelete}>
                <button type='submit'>DELETE group</button>
              </form>

           <Link to="/private">
            {" "}
            <button className="private">Back</button>{" "}
            </Link>
    </div>
    );
  }
}

export default withAuth(Id);
