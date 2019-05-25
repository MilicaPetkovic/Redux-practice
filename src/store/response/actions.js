import { createAction } from "redux-starter-kit";
import { postRequest, getRequest } from "../api";

export const setResponses = createAction("SET_RESPONSES");

export const getResponses = () => async dispatch => {
  try {
    const res = await getRequest("/freedom-response?sort=created,DESC");
    dispatch(setResponses(res));
  } catch (error) {
    console.error(error);
  }
};

export const sendResponse = payload => async dispatch => {
  try {
    await postRequest("/freedom-response", payload);
    dispatch(getResponses());
  } catch (error) {
    console.error(error);
  }
};
