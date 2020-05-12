import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import forecast from "../reducers/forecast";
import settings from "../reducers/settings";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  return createStore(
    combineReducers({
      forecast,
      settings,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
};
