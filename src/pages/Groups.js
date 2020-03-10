import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";
import groupsService from "./../lib/groups-service.js";
import "../css/groups.css";

class Groups extends Component {
state={
  groups:[], 
  loading: true
}

componentDidMount(){
  groupsService.getAllGroups()
  .then( (groups) => {this.setState({groups, loading: false})})
  .catch( (err) => console.log(err));
}

  render() {

    return (
      <div>
        <Link to="/private">
            {" "}
            <button className="backbutton">Back</button>{" "}
            </Link>
        <h1 className="title">Private route:{this.props.user.username}</h1>
        <div>
        {
          this.state.loading ? 
          null
          :
          (this.state.groups.map(element => {
            return (
              <div className="groupschart">
                <Link to={`/groups/${element._id}`}>
                
                <h4 className="element-name">{element.name}</h4>
                </Link>
              <p className="element-description">{element.description}</p>
              </div>
            )
          })
          )
        }
        </div>
        


            
    </div>
    );
  }
}

export default withAuth(Groups);
