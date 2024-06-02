import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { viselitsaReducer } from "./viselitsa-reducer";
import {commingSoonReducer} from './commingSoonReducer'


let reducers = combineReducers({
	viselitsa: viselitsaReducer,
	commingSoon: commingSoonReducer,
})

export let store = configureStore({
	reducer: reducers
});

window.store = store;