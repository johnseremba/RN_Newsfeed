import { requestNewsCategory, newsSourcesCategory } from "../actions/actions";
import { combineReducers } from "redux";

function technologyNews(state = [], action) {
    switch (action.type) {
        case requestNewsCategory.REQUEST_TECHNOLOGY_NEWS:
            return action.data;
        default:
            return state;
    }
}

function technologyNewsSource(state = ['hacker-news', 'engadget', 'techcrunch'], action) {
    switch (action.type) {
        case newsSourcesCategory.TECHNOLOGY_NEWS_SOURCE:
            return action.data;
        default:
            return state;
    }
}

export const technologyNewsReducer = combineReducers({
    sources: technologyNewsSource,
    articles: technologyNews
});
