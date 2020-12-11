import React, { Component } from "react";

import AddForm from "./components/AddForm";
import SmurfDisplay from "./components/SmurfDisplay";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { fetchSmurfs } from "./actions/index";
import { connect } from "react-redux";

import axios from "axios";

class App extends Component {
  componentDidMount() {
    return this.props.fetchSmurfs();
  }

  componentDidUpdate() {
    console.log("props update: ", this.props);
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-primary">
          <a className="navbar-brand">Smurf Village Database</a>
        </nav>
        <main>
          <AddForm />
          <SmurfDisplay />
        </main>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    smurfs: state.smurfs,
    isLoading: state.isLoading,
    errors: state.errors,
  };
};
export default connect(mapStateToProps, { fetchSmurfs })(App);

//Task List:
//1. Add in SmurfDisplay and AddForm into your application.
