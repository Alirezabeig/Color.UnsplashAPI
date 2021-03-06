import {
  RECEIVE_PROFILE} from "../actions";


const profiles = (state = initialState, action) => {

  switch (action.type) {
    case RECEIVE_PROFILE:
          
      return {
        ...state,
        ...action.profiles
      };

    default:
      return state;
  }
};

export default profiles;
