import { createStore } from "redux";
import getReducer from "./reducer/counterActions";

let store = createStore(getReducer);

export default store;