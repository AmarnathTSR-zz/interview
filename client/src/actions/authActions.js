// Register User
import axios from "axios";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  GET_USERS,
  USERS_LOADING
} from "./types";
import setAuthToken from "../utils/setAuthToken";

//  register user

export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/user/register", userData)
    .then(res => history.push("/users"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//  Login - Get user token

export const loginUser = userData => dispatch => {
  axios
    .post("/api/user/login", userData)
    .then(res => {
      //  save to local storage
      const token = res.data.token;
      // set token to ls

      localStorage.setItem("jwtToken", token);

      // set header

      setAuthToken(token);

      //   decode Bearer token

      const decoded = jwt_decode(token);

      // set current users

      dispatch(setCurrentUser(decoded));
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from localStorage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};

export const contactForm = (contactData, history) => dispatch => {
  dispatch(setProfileLoading());
  axios
    .post("/api/email/contact", contactData)
    .then(res => history.push("/success"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get all profiles
export const getProfiles = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/user/all")
    .then(res =>
      dispatch({
        type: GET_USERS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err
      })
    );
};

// Profile loading
export const setProfileLoading = () => {
  return {
    type: USERS_LOADING
  };
};
