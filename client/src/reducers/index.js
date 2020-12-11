import {
  ADD_SMURF_SUCCESS,
  ADD_SMURF_FAIL,
  ADD_SMURF_ERROR,
  FETCH_SMURFS_START,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
} from "../actions";

export const initialState = {
  smurfs: [],
  isLoading: false,
  errors: "",
  newSmurf: {
    name: "",
    nickname: "",
    position: "",
  },
};

const reducer = (state = initialState, action) => {
  console.log("----------------------");
  switch (action.type) {
    case "ADD_SMURF_SUCCESS":
      console.log("addsmurf success");
      return { ...state, smurfs: [...state.smurfs, action.payload] };
    case "ADD_SMURF_FAIL":
      console.log("addsmurf fail");
      return { ...state, errors: action.payload };
    case "ADD_SMURF_ERROR":
      console.log("addsmurf error");
      return { ...state, errors: action.payload };
    case FETCH_SMURFS_START:
      return { ...state, isLoading: true };
    case FETCH_SMURFS_SUCCESS:
      return { ...state, isLoading: false, smurfs: action.payload };
    case FETCH_SMURFS_FAIL:
      return { ...state, isLoading: false, errors: action.payload };
    default:
      return state;
  }
};

export default reducer;

//Task List:
//1. Add in the initialState needed to hold:
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary
