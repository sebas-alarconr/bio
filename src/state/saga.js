import { all } from 'redux-saga/effects';

import bioWatcher from 'state/sagas/bio';

export default function* rootSaga() {
  yield all([bioWatcher()]);
}
