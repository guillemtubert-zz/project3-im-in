import React, { Component } from "react";
import { withAuth } from "../lib/Auth";
import { Link } from "react-router-dom";
import groupsService from "./../lib/groups-service.js";
import Chat from "../components/Chat/Chat";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "../css/id.css";



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
              <div className="entire">

           
                <Link to="/private">
                {" "}
                <button className="backbuttonG">BACK</button>{" "}
                </Link>

            <CopyToClipboard text={this.state.group && this.state.group._id}>
              <button className="copybtn">COPY CODE</button>
            </CopyToClipboard>


            <h3 className="groupname"> {this.state.group.name}</h3>


            
              <p className="description">{this.state.group.description}</p>
            <h3 className="participantsTitle">Participants</h3> {this.state.group.participants.map(
              element => {
                return <p className="participants">- {element.username}</p>
              }
            )}

          

              {/* <h1>Username:{this.props.user._id}</h1> */}

              

               <Chat username={this.props.user.username} room={this.state.group.name}/>

              <div className="lastbuttons">
               <form onSubmit={this.handleSubmit}>
                <button type='submit' className="leavegroup">LEAVE</button>
              </form>
              { 
                (this.props.user._id == this.state.group.creator) ?
              <form onSubmit={this.handleDelete}>
                <button type='submit' className="deletebtn">DELETE</button>
              </form>
              :
              null
               }
               </div>
           
    </div>
    );
  }
}

export default withAuth(Id);
