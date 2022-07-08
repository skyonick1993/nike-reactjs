import { applyMiddleware, compose, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import productReducer from "../../src/component/ProductList/module/reducer/productReducer";
import sliderReducer from "../component/Slider/module/reducer/slider";
import reducerURL from "../component/listProduct/module/reducers/reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  productReducer,
  sliderReducer,
  reducerURL,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
