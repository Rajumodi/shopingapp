import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Reducer from "./Reducer";
// import Reducer from "./Reducer/IdsReducer";
import Displaydata from "./Reducer/Displaydata";
const store = createStore(Displaydata);

export default store;
