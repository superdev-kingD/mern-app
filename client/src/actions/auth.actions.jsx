import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index";

export const signin = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signIn(formData);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    console.log(data);
    dispatch({ type: AUTH, data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const googleAuth = (token, isSignUp, history) => async (dispatch) => {
  try {
    const { data } = await api.googleAuth({ token_id: token, isSignUp: isSignUp });
    dispatch({ type: "AUTH", data });
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
