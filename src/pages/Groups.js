import React, { Component } from "react";
import { withAuth } from "./../lib/Auth";
import { Link } from "react-router-dom";
import groupsService from "./../lib/groups-service.js";


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
        <h1>GROUPS Private route</h1>
        <h1>Username:{this.props.user.username}</h1>
        <h2>Groups</h2>
        {
          this.state.loading ? 
          null
          :
          (this.state.groups.map(element => {
            return (
              <div>
                <Link to={`/groups/${element._id}`}>
                
                <h4>{element.name}</h4>
                </Link>
              <p>{element.description}</p>
              </div>
            )
          })
          )
        }
        


            <Link to="/private">
            {" "}
            <button className="private">Back</button>{" "}
            </Link>
    </div>
    );
  }
}

export default withAuth(Groups);
