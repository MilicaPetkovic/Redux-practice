import { createReducer } from "redux-starter-kit";

const initialState = [];

export const responseReducer = createReducer(initialState, {
  SET_RESPONSES: (state, action) => (state = action.payload)
});
