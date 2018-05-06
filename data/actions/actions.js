import fetch from "cross-fetch";
import {API_KEY} from "../constants";

export const requestNewsCategory = {
    REQUEST_GLOBAL_NEWS: 'REQUEST_GLOBAL_NEWS',
    REQUEST_SPORTS_NEWS: 'REQUEST_SPORTS_NEWS',
    REQUEST_TECHNOLOGY_NEWS: 'REQUEST_TECHNOLOGY_NEWS',
    STOP_REQUEST_GLOBAL_NEWS: 'STOP_REQUEST_GLOBAL_NEWS'
};

export const receiveNewsCategory = {
    RECEIVE_GLOBAL_NEWS: 'RECEIVE_GLOBAL_NEWS',
    RECEIVE_SPORTS_NEWS: 'RECEIVE_SPORTS_NEWS',
    RECEIVE_TECHNOLOGY_NEWS: 'RECEIVE_TECHNOLOGY_NEWS'
};

export const newsSourcesCategory = {
    GLOBAL_NEWS_SOURCE: 'GLOBAL_NEWS_SOURCE',
    SPORTS_NEWS_SOURCE: 'SPORTS_NEWS_SOURCE',
    TECHNOLOGY_NEWS_SOURCE: 'TECHNOLOGY_NEWS_SOURCE'
};

export function requestNewsAction(category) {
    return { type: category };
}

export function receiveNewsAction(category, data) {
    return {
        type: category,
        data: data
    }
}

function fetchNews(category, sources) {
    return dispatch => {
        dispatch(requestNewsAction(category));
        let category2 = receiveNewsCategory.RECEIVE_GLOBAL_NEWS;
        return sources.map(source => {
            const url = encodeURI(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`);
            return fetch(url)
                .then(response => response.json())
                .then(data => dispatch(receiveNewsAction(category2, data)));
            }
        );
    };
}

function shouldFetchPosts(state, category) {
    let articles = {};
    switch(category) {
        case requestNewsCategory.REQUEST_GLOBAL_NEWS:
            articles = state.global;
            break;
        default:
            return;
    }
    return !articles.isFetching;
}

export function fetchNewsIfNeeded(category, sources) {
    return (dispatch, getState) => {
        if(shouldFetchPosts(getState(), category)) {
            return dispatch(fetchNews(category, sources));
        }
    };
}
