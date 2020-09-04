import { FETCH_DRUGS } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_DRUGS:
      return action.payload;
    default:
      return state;
  }
}
