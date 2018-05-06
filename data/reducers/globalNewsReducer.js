import {requestNewsCategory, newsSourcesCategory, receiveNewsCategory, receiveNewsAction} from "../actions/actions";
import { combineReducers } from "redux";

function globalNewsSource(state = ['bbc-news', 'cnn', 'fox-news'], action) {
    switch (action.type) {
        case newsSourcesCategory.GLOBAL_NEWS_SOURCE:
            return action.data;
        default:
            return state;
    }
}

function requestNews(state = {}, action) {
    switch (action.type) {
        case requestNewsCategory.REQUEST_GLOBAL_NEWS:
            return {...state,
                isFetching: true
            };
        case requestNewsCategory.STOP_REQUEST_GLOBAL_NEWS:
            return {
                isFetching: false,
                receivedAt: Date.now()
            };
        default:
            return {
                isFetching: false,
                errMsg: '',
                receivedAt: Date.now()
            };
    }
}

function receiveGlobalNews(state = [], action) {
    switch (action.type) {
        case receiveNewsCategory.RECEIVE_GLOBAL_NEWS:
            return state.concat(action.data.articles);
        default:
            return state;
    }
}

export const globalNewsReducer = combineReducers({
    sources: globalNewsSource,
    articles: receiveGlobalNews,
    flags: requestNews
});
