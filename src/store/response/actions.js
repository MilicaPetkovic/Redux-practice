import { createAction } from "redux-starter-kit";
import { postRequest } from "../api";

export const setResponses = createAction("SET_RESPONSES");

export const sendResponse = payload => async dispatch => {
  try {
    const res = await postRequest("/freedom-response", payload);
    console.log(res);
    // get all responses
    // update app state
  } catch (error) {
    console.error(error);
  }
};
