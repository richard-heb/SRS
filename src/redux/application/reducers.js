import {SET_STATE} from './actions';

const initialState = {
  loading: false
}

const applicationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STATE:
      return {...state, ...action.payload}
    default:
      return state
  }
}

export default applicationReducer;