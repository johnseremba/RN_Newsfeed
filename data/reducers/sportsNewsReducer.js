import { combineReducers } from "redux";
import { newsSourcesCategory, receiveNewsCategory, requestNewsCategory } from "../actions/actionConstants";


function sportsNewsSource(state = ['bbc-sport', 'espn', 'fox-sports'], action) {
    switch (action.type) {
        case newsSourcesCategory.SPORTS_NEWS_SOURCE:
            return action.data;
        default:
            return state;
    }
}

function requestNews(state = {}, action) {
    switch (action.type) {
        case requestNewsCategory.REQUEST_SPORTS_NEWS:
            return {
                ...state,
                isFetching: true
            };
        case requestNewsCategory.STOP_REQUEST_SPORTS_NEWS:
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
        case receiveNewsCategory.RECEIVE_SPORTS_NEWS:
            return state.concat(action.data.articles);
        default:
            return state;
    }
}


export const sportsNewsReducer = combineReducers({
    sources: sportsNewsSource,
    articles: receiveNews,
    flags: requestNews
});
