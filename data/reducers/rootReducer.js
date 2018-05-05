import { combineReducers } from "redux";
import { globalNewsReducer } from "./globalNewsReducer";
import { sportsNewsReducer } from "./sportsNewsReducer";
import { technologyNewsReducer } from "./technologyNewsReducer";

export const rootReducer = combineReducers({
    global: globalNewsReducer,
    sports: sportsNewsReducer,
    technology: technologyNewsReducer
});
