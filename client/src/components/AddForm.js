import React, { setState } from "react";
import { connect } from "react-redux";
import { addSmurf, fetchSmurfs } from "../actions";

class AddForm extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      nickname: "",
      position: "",
    };
  }

  //5. Build eventhandler and listener needed to change the state.
  //6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
  //7. Ensure that the included alert code only displays when error text is passed in from redux.
  //4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
  //8. Style as necessary.
  render() {
    const handleChange = (e) => {
      //   console.log("e event target ", e.target.value);
      return this.setState({ [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      return this.props.addSmurf(this.state);
    };

    return (
      <section>
        <h2>Add Smurf</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <br />
            <input onChange={handleChange} name="name" id="name" />
          </div>

          <div className="form-group">
            <label htmlFor="nickname">Nickname:</label>
            <br />
            <input onChange={handleChange} name="nickname" id="nickname" />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position:</label>
            <br />
            <input onChange={handleChange} name="position" id="position" />
          </div>

          <div
            data-testid="errorAlert"
            className="alert alert-danger"
            role="alert"
          >
            Error:{this.props.errors}
          </div>
          <button>Submit Smurf</button>
        </form>
      </section>
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

export default connect(mapStateToProps, { addSmurf, fetchSmurfs })(AddForm);

//Task List:
//1. Add in all necessary import components and library methods.
//2. Connect all needed redux state props and action functions to the component before exporting.
//3. Add state holding name, position, nickname and description to component.
//4. Build form DOM to include inputs for name, position and description of the component.
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//      - MAKE SURE TO CORRECTLY CONNECT LABELS TO YOUR FORM INPUTS. USE THE PATERN OF SHOWN FOR NAME.
//5. Build eventhandler and listener needed to change the state.
//6. Build eventhandler and listener needed to submit a new smurf and dispatch it's assosated action.
//7. Ensure that the included alert code only displays when error text is passed in from redux.
//4. DO NOT DELETE THE data-testid FIELD FROM THE ERROR ALERT! This is used for sprint grading.
//8. Style as necessary.
