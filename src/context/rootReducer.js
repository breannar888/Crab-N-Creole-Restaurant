import { combineReducers } from "redux";
import cartReducer from "./CartReducer";

const rootReducer = combineReducers({
    shop: cartReducer,
});

export default rootReducer;