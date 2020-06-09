import { SET_LOADING } from 'state/constants/ui';

export const setLoading = bool => ({
  type: SET_LOADING,
  bool,
});
