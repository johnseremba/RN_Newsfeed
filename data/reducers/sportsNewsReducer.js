import { requestNewsCategory, newsSourcesCategory } from "../actions/actions";
import { combineReducers } from "redux";

function sportsNews(state = [], action) {
    switch (action.type) {
        case requestNewsCategory.REQUEST_SPORTS_NEWS:
            return action.data;
        default:
            return state;
    }
}

function sportsNewsSource(state = ['bbc-sport', 'espn', 'fox-sports'], action) {
    switch (action.type) {
        case newsSourcesCategory.SPORTS_NEWS_SOURCE:
            return action.data;
        default:
            return state;
    }
}

export const sportsNewsReducer = combineReducers({
    sources: sportsNewsSource,
    articles: sportsNews
});
