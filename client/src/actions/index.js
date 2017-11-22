import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => dispatch => {
  return axios
    .get("/api/current_user")
    .then(
      res => dispatch({ type: FETCH_USER, payload: res.data }),
      error => dispatch({type: "ERROR_PLACEHOLDER", payload: error})
    );
};
