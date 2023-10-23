import { legacy_createStore as createStore, applyMiddleware } from "redux";
import Reducers from "../reducer";
import thunk from "redux-thunk";

const Store = createStore(Reducers, applyMiddleware(thunk));

export default Store;
