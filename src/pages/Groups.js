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

// formatDate = d => {
//   let date = new Date(d);
//   let dd = date.getDate(); 
//   let mm = date.getMonth()+1;
//   let yyyy = date.getFullYear(); 
//   let hh = date.getHours();
//   let min = date.getMinutes()
//   if(dd<10){dd='0'+dd} ;
//   if(mm<10){mm='0'+mm};
//   return d = yyyy+'-'+mm+'-'+dd+' '+hh+':'+min;
// } 

componentDidMount(){
  groupsService.getAllGroups()
  .then( (groups) => {
    groups.forEach(group => {
      // let current_datetime = new Date()
      // let formatted_date = current_datetime.getFullYear() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getDate() + " " + current_datetime.getHours() + ":" + current_datetime.getMinutes()
      // console.log("now", formatted_date)

      // console.log("created at", this.formatDate(group.created_at));
      // console.log('difference', diff);
      // console.log("DATE NOW", );
  })
    // if(groups)
    this.setState({groups, loading: false})})
  .catch( (err) => console.log(err));
}

  render() {

    return (
      <div className="full-website">
        <Link to="/private">
            {" "}
            <button className="backbutton">BACK</button>{" "}
            </Link>
        {/* <h1 className="title">{this.props.user.username}</h1> */}
        <h2 className="h2text">GROUPS</h2>
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
              {/* <p className="element-description">{element.description}</p> */}
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
