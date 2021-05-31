import { CombineReducers } from 'redux';

import userReducer from './user/user.reducer';

export default CombineReducers({
    user: userReducer
});