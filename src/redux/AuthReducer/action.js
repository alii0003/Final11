import axios from "axios";
import { setToast } from "../../components/Other/CheckProperty";
import { saveLocalData } from "../../utils/localStorage";
import * as types from "./actionType";

const register = (payload, toast) => (dispatch) => {
  dispatch({ type: types.REGISTER_R });
  return axios
    .post("https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp", payload)
    .then((r) => {
      console.log(r.data)
      setToast(toast, "Registered Successful", "success");
      dispatch({ type: types.REGISTER_S, payload: r.data });
    })
    .catch((e) => {
      setToast(toast, e.response.data.message, "error");
      dispatch({ type: types.REGISTER_F, payload: e });
    });
};

const login = (payload, toast) => (dispatch) => {
  console.log(payload)
  saveLocalData("userInfo", payload.email)
  dispatch({ type: types.LOGIN_R });
  return axios
    .post("https://myaccount.google.com/?utm_source=sign_in_no_continue&pli=1", payload)
    .then((r) => {
      setToast(toast, "Login Successful", "success");
      dispatch({ type: types.LOGIN_S, payload: r.data.token });
    })
    .catch((e) => {
      setToast(toast, e.response.data.message, "error");
      dispatch({ type: types.LOGIN_F, payload: e });
    });
};

const profile = (payload) => (dispatch) => {
  dispatch({ type: types.PROFILE_R });
  const options = {
    method: "GET",
    url: `https://myaccount.google.com/?hl=tr&utm_source=OGB&utm_medium=act/${payload.email}`,
    headers: { Authorization: `Bearer ${payload.token}` },
  };
  return axios(options)
    .then((r) => {
      dispatch({
        type: types.PROFILE_S,
        payload: r.data,
      });
    })
    .catch((e) => dispatch({ type: types.PROFILE_F, payload: e }));
};

export { login, register, profile };


// const login = (payload,toast) => (dispatch) => {
//   //console.log(payload)
//   dispatch({ type: types.LOGIN_R });

//   return axios({
//     method: "post",
//     url: "/api/login",
//     baseURL: "https://reqres.in",
//     data: payload,
//   })
//     .then((res) => {
//       setToast(toast, "Login Successful", "success");
//       return dispatch({
//         type: types.LOGIN_S,
//         payload: res.data.token,
//       });
//     })
//     .catch((err) => {
//       setToast(toast, err.response.data.message, "error");
//       dispatch({ type: types.LOGIN_F });
//     });
// };
// export {login,register,profile}
//================================================

// const profile = (payload) => (dispatch) => {
//   const config = {
//     headers: { Authorization: `Bearer ${payload.token}` },
//   };
//   dispatch({ type: types.PROFILE_R });
//   axios
//     .get(
//       `https://masai-api-mocker.herokuapp.com/user/${payload.username}`,
//       config
//     )
//     .then((r) => {
//       console.log(r);
//       dispatch({ type: types.PROFILE_S, paylaod: r.data });
//     })
//     .catch((e) => dispatch({ type: types.PROFILE_F, payload: e }));
// };
