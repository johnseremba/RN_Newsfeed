import {receiveNewsCategory, requestNewsCategory} from "../actions/actionConstants";

export function requestNews(state = {}, action) {
    switch (action.type) {
        case requestNewsCategory.REQUEST_GLOBAL_NEWS:
        case requestNewsCategory.REQUEST_SPORTS_NEWS:
        case requestNewsCategory.REQUEST_TECHNOLOGY_NEWS:
            return {
                ...state,
                isFetching: true
            };
        case requestNewsCategory.STOP_REQUEST_GLOBAL_NEWS:
        case requestNewsCategory.STOP_REQUEST_SPORTS_NEWS:
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

export function receiveNews(state = [], action) {
    switch (action.type) {
        case receiveNewsCategory.RECEIVE_GLOBAL_NEWS:
        case receiveNewsCategory.RECEIVE_SPORTS_NEWS:
        case receiveNewsCategory.RECEIVE_TECHNOLOGY_NEWS:
            return action.data.articles;
        default:
            return state;
    }
}
