import { SET_LOADING } from 'state/constants/ui';

const initialState = {
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.bool,
      };
    default:
      return state;
  }
};
