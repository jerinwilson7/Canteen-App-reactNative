// import { legacy_createStore as createStore, applyMiddleware } from "redux";
// import Reducers from "../reducer";
// import thunk from "redux-thunk";

// const Store = createStore(Reducers, applyMiddleware(thunk));

// const getToken = Store.getState().generalState.token;
// console.log(getToken);

// export { Store, getToken };

import { legacy_createStore as createStore, applyMiddleware } from "redux";
import Reducers from "../reducer";
import thunk from "redux-thunk";

const Store = createStore(Reducers, applyMiddleware(thunk));

const getToken = () => Store?.getState()?.generalState?.token;

export { Store, getToken };
