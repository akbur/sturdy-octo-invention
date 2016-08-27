// import { combineReducers } from 'redux' // remember for refactoring later

const resourceReducer = (state = {}, action) => {
  switch (action.type) {

    case 'TEST_REDUCER':
      return [
        ...state,
        {'test': true}
      ]

    default:
      return state
  }
}

export default resourceReducer;
