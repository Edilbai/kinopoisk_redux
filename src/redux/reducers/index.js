import { combineReducers } from "redux";
import detailReducer from "./detailReducer";
import filmReducer from "./filmReducer";

export const rootReducer = combineReducers({
    films: filmReducer,
    detail: detailReducer,
})