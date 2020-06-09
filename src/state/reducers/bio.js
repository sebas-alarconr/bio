import { SET_BIO } from 'state/constants/bio';

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_BIO:
      return {
        ...state,
        ...action.bio,
      };
    default:
      return state;
  }
};
