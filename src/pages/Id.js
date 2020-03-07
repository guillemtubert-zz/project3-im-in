import React, { Component } from "react";
import { withAuth } from "../lib/Auth";
import { Link } from "react-router-dom";
import groupsService from "./../lib/groups-service.js";



class Id extends Component {

  state = {
    group:null
  }

  componentDidMount(){
    groupsService.getOneGroup()
    .then( (group) => {
      console.log(group)
      this.setState({group})})
    .catch( (err) => console.log(err));
  }

  render() {
            return (
              <div>
           <h1>GROUP id </h1>
           <h1>Username:{this.props.user.username}</h1>
          

           <Link to="/private">
            {" "}
            <button className="private">Back</button>{" "}
            </Link>
    </div>
    );
  }
}

export default withAuth(Id);
