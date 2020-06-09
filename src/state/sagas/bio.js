import { takeLatest, put } from 'redux-saga/effects';

import { FETCH_BIO } from 'state/constants/bio';
import { setLoading } from 'state/actions/ui';
import { setBio } from 'state/actions/bio';

import firebase from 'utils/firebase';

export function* fetchBio() {
  try {
    yield put(setLoading(true));
    const response = yield firebase.getResume();
    yield put(
      setBio({
        ...response.data(),
        id: response.id,
      })
    );
    yield put(setLoading(false));
  } catch (error) {
    yield put(setLoading(false));
  }
}

export default function* bioWatcher() {
  yield takeLatest(FETCH_BIO, fetchBio);
}
