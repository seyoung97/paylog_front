import { AuthAction } from "../actions/actions";
import * as actionTypes from "../actions/actionTypes";

interface AuthState {
  isLoggedIn: boolean;
  user: null | {
    username: string;
    password: string;
  };
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: null,
};

const authReducer = (
  state: AuthState = initialState,
  action: AuthAction
): AuthState => {
  switch (action.type) {
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
