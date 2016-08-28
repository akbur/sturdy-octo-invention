import {
  FILTER_BY_PROGRESS_PAST,
  FILTER_BY_PROGRESS_CURRENT,
  FILTER_BY_PROGRESS_FUTURE } from '../constants/actions';

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
