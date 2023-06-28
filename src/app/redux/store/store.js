import {combineReducers, configureStore} from '@reduxjs/toolkit';

import sliceForms from '../reducers/forms';


const reducer = combineReducers({
    forms: sliceForms
});

export const store = configureStore({reducer});

// subscribe
store.subscribe(() => console.log(store.getState()));
