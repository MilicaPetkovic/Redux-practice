import { createAction } from "redux-starter-kit";
import { postRequest, getRequest } from "../api";

export const setResponses = createAction("SET_RESPONSES");

export const getResponses = () => async dispatch => {
  try {
    const res = await getRequest("/freedom-response");
    dispatch(setResponses(res));
  } catch (error) {
    console.error(error);
  }
};

export const sendResponse = payload => async () => {
  try {
    await postRequest("/freedom-response", payload);
    getResponses();
  } catch (error) {
    console.error(error);
  }
};