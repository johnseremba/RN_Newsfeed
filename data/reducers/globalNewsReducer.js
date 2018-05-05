import { newsCategory, newsSourcesCategory } from "../actions/actions";
import { combineReducers } from "redux";

function globalNews(state = [], action) {
    switch (action.type) {
        case newsCategory.LOAD_GLOBAL_NEWS:
            return action.data;
        default:
            return state;
    }
}

function globalNewsSource(state = ['bbc-news', 'cnn', 'fox-news'], action) {
    switch (action.type) {
        case newsSourcesCategory.GLOBAL_NEWS_SOURCE:
            return action.data;
        default:
            return state;
    }
}

export const globalNewsReducer = combineReducers({
    sources: globalNewsSource,
    articles: globalNews
});
