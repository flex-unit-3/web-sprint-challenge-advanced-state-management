import React from "react";
import { connect } from "react-redux";
import Smurf from "./Smurf";
import { fetchSmurfs } from "../actions";

export class SmurfDisplay extends React.Component {
  componentDidMount() {
    return this.props.fetchSmurfs();
  }
  render() {
    console.log("smurfDisplay props: ", this.props);

    return (
      <div>
        <div>
          {this.props.isLoading === true ? (
            <h1>"LOADING..."</h1>
          ) : (
            this.props.smurfs.map((smurf) => {
              return <Smurf smurf={smurf} />;
            })
          )}
        </div>
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

export default connect(mapStateToProps, { fetchSmurfs })(SmurfDisplay);

//Task List:
//1. Import in all needed components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Fetch all smurfs when the component first mounts.
//4. Render loading text or graphic if the application is currently loading.
//5. Render a list of all Smurfs using the Smurf component if the application is not currently loading.
