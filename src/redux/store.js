import { createStore, applyMiddleware } from "redux";
import api from "./middleware/api";
import parallelapi from "./middleware/parallelapi"
import rootReducer from "./modules";

let store;

if (
    process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION__
  ) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(parallelapi, api))
    );
    } else {
        store = createStore(rootReducer, applyMiddleware(parallelapi, api));
    }

export default store;
