import { FILTER_BY_PROGRESS_PAST,
         FILTER_BY_PROGRESS_CURRENT,
         FILTER_BY_PROGRESS_FUTURE } from '../constants/actions';

// TODO: remove mock data from resourceReducer
import resources from '../constants/mock-data';

const initialState = {
  resources: resources || [],
  filteredResources: []
}

const resourceReducer = (state = initialState, action) => {

  switch (action.type) {

    case FILTER_BY_PROGRESS_PAST: {
      const { resources } = state;

      return Object.assign({}, state, {
        filteredResources: resources.filter(each => (each.progress === 'COMPLETE'))
      });
    }
    case FILTER_BY_PROGRESS_CURRENT: {
      const { resources } = state;

      return Object.assign({}, state, {
        filteredResources: resources.filter(each => (each.progress === 'IN-PROGRESS'))
      });
    }
    case FILTER_BY_PROGRESS_FUTURE: {
      const { resources } = state;

      return Object.assign({}, state, {
        filteredResources: resources.filter(each => (each.progress === 'TODO'))
      });
    }
    default:
      return state;
  }
}

export default resourceReducer;
