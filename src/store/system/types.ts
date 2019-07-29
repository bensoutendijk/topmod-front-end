export const UPDATE_LOADED = 'UPDATE_LOADED'

export interface SystemState {
  isLoaded: boolean;
}

interface UpdateLoadedAction {
  type: typeof UPDATE_LOADED
  payload: boolean
}

export type SystemActionTypes = (
  UpdateLoadedAction
)