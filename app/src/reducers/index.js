import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { checkAuth } from './checkAuthenticated';
import { savedDays } from './availableDays';

export default (history) => combineReducers({
    router: connectRouter(history),
    checkAuth,
    savedDays,
});

