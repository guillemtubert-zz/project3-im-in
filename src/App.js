import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Private from "./pages/Private";
import Groups from "./pages/Groups";
import Create from "./pages/Create";
import Join from "./pages/Join";
import Id from "./pages/Id";




import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />

          <AnonRoute exact path="/signup" component={Signup} />
          <AnonRoute exact path="/login" component={Login} />

          <PrivateRoute exact path="/private" component={Private} />
          <PrivateRoute exact path="/groups" component={Groups} />
          <PrivateRoute exact path="/create" component={Create} />
          <PrivateRoute exact path="/join" component={Join} />
          <PrivateRoute exact path="/groups/:id" component={Id} />



        </Switch>
      </div>
    );
  }
}

export default App;
