import { combineReducers } from 'redux';

import bio from 'state/reducers/bio';
import ui from 'state/reducers/ui';

export default combineReducers({
  bio,
  ui,
});
