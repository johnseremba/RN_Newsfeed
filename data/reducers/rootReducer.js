import { combineReducers } from "redux";
import { globalNewsReducer } from "./globalNewsReducer";
import { sportsNewsReducer } from "./sportsNewsReducer";
import { technologyNewsReducer } from "./technologyNewsReducer";
import userReducer from "./userReducer";

export const rootReducer = combineReducers({
    user: userReducer,
    global: globalNewsReducer,
    sports: sportsNewsReducer,
    technology: technologyNewsReducer
});
