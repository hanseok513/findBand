import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import combinedReducer from "./reducers";

export function configureStore() {
  return createStore(
    combinedReducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
}
