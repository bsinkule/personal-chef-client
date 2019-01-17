import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { checkAuth } from './checkAuthenticated';

export default (history) => combineReducers({
    router: connectRouter(history),
    checkAuth,
});

