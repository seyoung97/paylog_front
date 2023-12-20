import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store/store";

import * as actionTypes from "./actionTypes";

interface User {
  username: string;
  password: string;
}

interface LoginSuccessAction extends Action<typeof actionTypes.LOGIN_SUCCESS> {
  payload: User;
}

interface LogoutAction extends Action<typeof actionTypes.LOGOUT> {}

export type AuthAction = LoginSuccessAction | LogoutAction;

export const loginSuccess = (user: User): AuthAction => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: user,
});

export const logout = (): AuthAction => ({
  type: actionTypes.LOGOUT,
});

// 비동기 액션을 처리하기 위한 Thunk 액션
export const asyncLogin = (
  user: User
): ThunkAction<void, RootState, unknown, AuthAction> => {
  return (dispatch) => {
    // 여기에서 비동기 작업 수행 (예: API 호출 등)
    // 로그인이 성공하면 loginSuccess 액션을 디스패치
    dispatch(loginSuccess(user));
  };
};
