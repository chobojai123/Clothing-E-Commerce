import { createSelector } from 'reselect'

export const getDirectory = state => state.directory

export const getDirectorySections = createSelector(
  getDirectory,
  directory => directory.sections
)
