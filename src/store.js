import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducer = combineReducers({});

const middleWare = [thunk];

const initialState = {};
 
const store = configureStore({
  reducer: {},
  initialState,
  devTools: process.env.NODE_ENV !== "production"
});

export default store;
