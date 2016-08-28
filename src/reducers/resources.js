import { FILTER_BY_PROGRESS_PAST,
         FILTER_BY_PROGRESS_CURRENT,
         FILTER_BY_PROGRESS_FUTURE,
         ADD_RESOURCE_OPEN_DIALOG,
         ADD_RESOURCE_CLOSE_DIALOG,
         ADD_RESOURCE_SUBMIT_DIALOG,
         ADD_RESOURCE_PRIORITY_EDIT,
         ADD_RESOURCE_PROGRESS_EDIT } from '../constants/actions';

// TODO: remove mock data from resourceReducer
import resources from '../constants/mock-data';

const initialState = {
  resources: resources || [],
  filteredResources: [],
  addResource: {
    openDialog: false,
  },
  newResource: {
    priority: null,
    progress: 'future',
  }
}

const resourceReducer = (state = initialState, action) => {
  console.log('state', state);
  console.log('action', action);

  switch (action.type) {

    case FILTER_BY_PROGRESS_PAST: {
      const { resources } = state;

      return Object.assign({}, state, {
        filteredResources: resources.filter(each => (each.progress === 'previous'))
      });
    }
    case FILTER_BY_PROGRESS_CURRENT: {
      const { resources } = state;

      return Object.assign({}, state, {
        filteredResources: resources.filter(each => (each.progress === 'current'))
      });
    }
    case FILTER_BY_PROGRESS_FUTURE: {
      const { resources } = state;

      return Object.assign({}, state, {
        filteredResources: resources.filter(each => (each.progress === 'future'))
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
      // at this point will begin ajax requests
      return state;
    }
    case ADD_RESOURCE_PRIORITY_EDIT: {
      let { value } = action.payload;
      let editedResource = state.newResource;
      editedResource.priority = value * 10;
      return Object.assign({}, state, {newResource: editedResource});
    }
    case ADD_RESOURCE_PROGRESS_EDIT: {
      const { value } = action.payload;
      let editedResource = state.newResource;
      editedResource.progress = value;
      return Object.assign({}, state, {newResource: editedResource});
    }
    default:
      return state;
  }
}

export default resourceReducer;
