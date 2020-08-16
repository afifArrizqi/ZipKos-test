import { ADD_PROPERTY } from "../actions_type";

export function addProperty(data) {
  return {
    type: ADD_PROPERTY,
    payload: { data },
  };
}
