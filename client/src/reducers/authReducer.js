import { SET_CURRENT_USER, GET_USERS, USERS_LOADING } from "../actions/types";
import isEmpty from "../validations/is-empty";

const initialState = {
  isAuthenticated: false,
  user: {},
  users: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };

    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    case USERS_LOADING:
      return {
        ...state,
        loading: true
      };

    default:
      return state;
  }
}
