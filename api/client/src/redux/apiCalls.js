import { loginFailure, loginSuccess, loginStart, logout } from "./userRedux";
import { registerStart, registerSuccess, registerFailure } from "./registerRedux";
import { publicRequest } from "../assets/utilities/requestMethods";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
    } catch (err) {
        dispatch(loginFailure());
    }
}

export const logoutUser = (dispatch) => {
    dispatch(logout());
}

export const registerUser = async (dispatch, newUser) => {
    dispatch(registerStart());
    try {
        const res = await publicRequest.post("/auth/register", newUser);
        dispatch(registerSuccess(res.data));
    } catch (err) {
        dispatch(registerFailure());
    }
}