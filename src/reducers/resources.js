import { FILTER_BY_PROGRESS_PAST,
         FILTER_BY_PROGRESS_CURRENT,
         FILTER_BY_PROGRESS_FUTURE,
         ADD_RESOURCE_OPEN_DIALOG,
         ADD_RESOURCE_CLOSE_DIALOG,
         ADD_RESOURCE_SUBMIT_DIALOG } from '../constants/actions';

// TODO: remove mock data from resourceReducer
import resources from '../constants/mock-data';

const initialState = {
  resources: resources || [],
  filteredResources: [],
  addResource: {
    openDialog: false,
  }
}

const resourceReducer = (state = initialState, action) => {
  console.log('state', state);
  console.log('action', action);

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
    case ADD_RESOURCE_OPEN_DIALOG: {
      return Object.assign({}, state, {
        addResource: {
          openDialog: true
        }
      });
    }
    case ADD_RESOURCE_CLOSE_DIALOG: {
      return Object.assign({}, state, {
        addResource: {
          openDialog: false
        }
      });
    }
    case ADD_RESOURCE_SUBMIT_DIALOG: {
      // add this later
      return state;
    }
    default:
      return state;
  }
}

export default resourceReducer;
