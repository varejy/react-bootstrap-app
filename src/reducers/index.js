import { combineReducers } from 'redux';

import application from './application';
import setPosts from './setPosts';
import user from './user';

const reducers = combineReducers({
    application,
    setPosts,
    user
});

export default reducers;
