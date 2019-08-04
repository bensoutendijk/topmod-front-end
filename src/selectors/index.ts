import { createSelector } from 'reselect';
import { AppState } from '../store';

export const selectUserByUsername = (provider: string, username: string) => createSelector(
  (state: AppState) => state.users.byId,
  users => (
    Object.keys(users)
    .map(key => (users[key]))
    .filter(user => (
      user.provider.toLowerCase() === provider.toLowerCase() &&
      user.data.username.toLowerCase() === username.toLowerCase()
    ))
  ),
);
