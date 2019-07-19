import { createSelector } from 'reselect'

export const selectCurrentUser = createSelector(
  state => state.user
)