import {
  FILTER_BY_PROGRESS_PAST,
  FILTER_BY_PROGRESS_CURRENT,
  FILTER_BY_PROGRESS_FUTURE,
  ADD_RESOURCE_OPEN_DIALOG,
  ADD_RESOURCE_CLOSE_DIALOG,
  ADD_RESOURCE_SUBMIT_DIALOG,
  ADD_RESOURCE_PRIORITY_EDIT,
  ADD_RESOURCE_PROGRESS_EDIT } from '../constants/actions';

  const filterCodes = {
    previous: FILTER_BY_PROGRESS_PAST,
    current: FILTER_BY_PROGRESS_CURRENT,
    future: FILTER_BY_PROGRESS_FUTURE
  };

export const filterByProgress = (progress) => {
  return {
    type: filterCodes[progress]
  }
}
export const addResourceOpenDialog = () => {
  return {
    type: ADD_RESOURCE_OPEN_DIALOG
  }
}
export const addResourceCloseDialog = () => {
  return {
    type: ADD_RESOURCE_CLOSE_DIALOG
  }
}
export const addResourceSubmitDialog = () => {
  return {
    type: ADD_RESOURCE_SUBMIT_DIALOG
  }
}
export const addResourcePriorityEdit = (value) => {
  return {
    type: ADD_RESOURCE_PRIORITY_EDIT,
    payload: {
      value
    }
  }
}
export const addResourceProgressEdit = (value) => {
  return {
    type: ADD_RESOURCE_PROGRESS_EDIT,
    payload: {
      value
    }
  }
}
