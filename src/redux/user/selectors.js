import { createSelector } from 'reselect'

export const getUser = state => state.user

export const getCurrentUser = createSelector(
  getUser,
  user => user.currentUser
)
