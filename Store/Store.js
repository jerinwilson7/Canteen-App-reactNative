import { legacy_createStore as createStore } from "redux";
import Reducers from "../reducer";

const Store = createStore(Reducers);

export default Store;
