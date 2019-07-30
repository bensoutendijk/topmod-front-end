import { SystemState, SystemActionTypes, UPDATE_LOADED } from "./types";

const initialState: SystemState = {
  isLoaded: true
};

export function systemReducer(
  state = initialState,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    default:
      return state;
  }
}
