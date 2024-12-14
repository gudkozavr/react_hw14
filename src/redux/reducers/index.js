import { SET_USER_INFO } from "../actions";
const initialState = {
  name: "John Doe",
  status: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  if (type === SET_USER_INFO) {
    return { ...state, name: payload.name, status: payload.status };
  }

  return state;
};

export default userReducer;
