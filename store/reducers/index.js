import { ADD_PROPERTY } from "../actions_type";

const defaultState = {
  property: [],
};

export default function PropertyReducer(
  state = defaultState,
  { type, payload }
) {
  switch (type) {
    case ADD_PROPERTY:
      return { ...state, property: state.property.concat(payload.data) };
    default:
      return state;
  }
}
