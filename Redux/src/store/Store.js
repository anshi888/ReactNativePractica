import { createStore,combineReducers } from "redux";

import {categoryReducer,productReducer} from '../store/reducers/content/contentReducer'


const rootReducer = combineReducers({
    products: productReducer,
    category:categoryReducer,
});

export default createStore(rootReducer);