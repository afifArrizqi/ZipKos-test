import { createStore } from "redux";
import PropertyReducer from "./reducers";

const reducers = PropertyReducer;

const store = createStore(reducers);

export default store;
