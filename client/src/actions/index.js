import axios from "axios";

export const ADD_SMURF_SUCCESS = "ADD_SMURF_SUCCESS";
export const ADD_SMURF_FAIL = "ADD_SMURF_FAIL";
export const ADD_SMURF_ERROR = "ADD_SMURF_ERROR";

export const FETCH_SMURFS_START = "FETCH_SMURFS_START";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";

export const fetchSmurfs = () => (dispatch) => {
  console.log("fetchSmurfs!");
  dispatch({ type: FETCH_SMURFS_START });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => {
      dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data });
      console.log("got then!");
    })
    .catch((err) => {
      dispatch({ type: FETCH_SMURFS_FAIL, payload: err.message });
      console.log("found err");
    });
};

export const addSmurf = (newSmurf) => (dispatch) => {
  console.log("addsmurf newSmurf: ", newSmurf);

  newSmurf.name && newSmurf.age && newSmurf.height
    ? axios
        .post("http://localhost:3333/smurfs", newSmurf)
        .then((res) => {
          console.log("add smurf res: ", res);
          dispatch({ type: ADD_SMURF_SUCCESS, payload: res.data });
        })
        .catch((err) => {
          console.log("add smurf err: ", err);
          dispatch({ type: ADD_SMURF_FAIL, payload: err.message });
        })
    : dispatch({
        type: "ADD_SMURF_ERROR",
        payload: "must include a name, nickname, and position",
      });
};

//Task List:
//1. Add fetch smurfs action:
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.
