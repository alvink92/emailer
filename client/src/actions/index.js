import axios from "axios";
import FETCH_USER from "./types";

const fetchUser = () => dispatch => {
  axios
    .get("/api/current_user")
    .then(user => dispatch({ type: FETCH_USER, payload: user }));
};
