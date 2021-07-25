// 引入子reducers
import userReducer from './userReducer';
import proReducer from './proReducer';

import { combineReducers } from 'redux';

const reducer = combineReducers({
  user: userReducer,
  pro: proReducer,
});

export default reducer;