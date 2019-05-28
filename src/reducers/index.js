import { combineReducers } from 'redux';

import application from './application';
import posts from './posts';
import user from './user';

const reducers = combineReducers({
    application,
    posts,
    user
});

export default reducers;
