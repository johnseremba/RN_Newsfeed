import { combineReducers } from "redux";
import { newsSourcesCategory, receiveNewsCategory, requestNewsCategory } from "../actions/actionConstants";

function technologyNewsSource(state = ['hacker-news', 'engadget', 'techcrunch'], action) {
    switch (action.type) {
        case newsSourcesCategory.TECHNOLOGY_NEWS_SOURCE:
            return action.data;
        default:
            return state;
    }
}

function requestNews(state = {}, action) {
    switch (action.type) {
        case requestNewsCategory.REQUEST_TECHNOLOGY_NEWS:
            return {
                ...state,
                isFetching: true
            };
        case requestNewsCategory.STOP_REQUEST_TECHNOLOGY_NEWS:
            return {
                ...state,
                isFetching: false,
                receivedAt: Date.now()
            };
        default:
            return {
                isFetching: false,
                errMsg: '',
                receivedAt: ''
            };
    }
}

function receiveNews(state = [], action) {
    switch (action.type) {
        case receiveNewsCategory.RECEIVE_TECHNOLOGY_NEWS:
            return state.concat(action.data.articles);
        default:
            return state;
    }
}

export const technologyNewsReducer = combineReducers({
    sources: technologyNewsSource,
    articles: receiveNews,
    flags: requestNews
});
