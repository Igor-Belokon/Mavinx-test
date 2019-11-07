import { USER_LOGIN, USER_REG, successAction, failureAction } from "../types";
import axios from "axios";

import { tokenRead, instance } from "../../instance/instance";
export function loginUser(user) {
  return dispatch =>
    instance
      .post("http://68.183.119.148/api/test/login", user) // Redux Thunk handles these

      .then(data => {
        tokenRead(data.token);
        dispatch({ type: successAction(USER_LOGIN), data });
      })

      .catch(err => dispatch({ type: failureAction(USER_LOGIN), err }));
}
export function regUser(card) {
  return dispatch =>
    fetch("http://68.183.119.148/api/test/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(card)
    }) // Redux Thunk handles these
      .then(res => res.json())
      .then(data => dispatch({ type: successAction(USER_REG), data }))
      .catch(err => dispatch({ type: failureAction(USER_REG), err }));
}
export function editUser(user) {
  return dispatch =>
    instance
      .post("http://68.183.119.148/api/test/edit-user", user) // Redux Thunk handles these

      .then(data => {
        tokenRead(data.token);
      })
      .catch(err => dispatch({ type: failureAction(USER_LOGIN), err }));
}
