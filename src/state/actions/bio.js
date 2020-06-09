import { SET_BIO, FETCH_BIO } from 'state/constants/bio';

export const setBio = bio => ({
  type: SET_BIO,
  bio,
});

export const fetchBio = () => ({
  type: FETCH_BIO,
});
