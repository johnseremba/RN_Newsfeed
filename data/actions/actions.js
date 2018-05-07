import fetch from "cross-fetch";
import { API_KEY } from "../constants";
import {receiveNewsCategory, requestNewsCategory, userActions} from "./actionConstants";

export function requestNewsAction(category) {
    return { type: category };
}

export function receiveNewsAction(category, data) {
    return {
        type: category,
        data: data
    };
}

export function requestUserData() {
    return {
        type: userActions.REQUEST_USER_DATA
    };
}

export function receiveUserData(data) {
    return {
        type: userActions.RECEIVE_USER_DATA,
        data: data
    };
}

function getReceiveCategory(category) {
    switch (category) {
        case requestNewsCategory.REQUEST_GLOBAL_NEWS:
            return receiveNewsCategory.RECEIVE_GLOBAL_NEWS;
        case requestNewsCategory.REQUEST_SPORTS_NEWS:
            return receiveNewsCategory.RECEIVE_SPORTS_NEWS;
        case requestNewsCategory.REQUEST_TECHNOLOGY_NEWS:
            return receiveNewsCategory.RECEIVE_TECHNOLOGY_NEWS;
        default:
            return;
    }
}

function getStopRequestCategory(category) {
    switch (category) {
        case requestNewsCategory.REQUEST_GLOBAL_NEWS:
            return receiveNewsCategory.STOP_REQUEST_GLOBAL_NEWS;
        case requestNewsCategory.REQUEST_SPORTS_NEWS:
            return receiveNewsCategory.STOP_REQUEST_SPORTS_NEWS;
        case requestNewsCategory.REQUEST_TECHNOLOGY_NEWS:
            return receiveNewsCategory.STOP_REQUEST_TECHNOLOGY_NEWS;
        default:
            return;
    }
}

function fetchNews(category, sources) {
    return dispatch => {
        dispatch(requestNewsAction(category));
        let receiveCategory = getReceiveCategory(category);
        let stopRequestCategory = getStopRequestCategory(category);
        return sources.map(source => {
            const url = encodeURI(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${API_KEY}`);
            return fetch(url)
                .then(response => response.json())
                .then(data => {
                    return dispatch(receiveNewsAction(receiveCategory, data));
                    // return dispatch(requestNewsAction(receiveNewsCategory.STOP_REQUEST_GLOBAL_NEWS));
                });
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
        case requestNewsCategory.REQUEST_SPORTS_NEWS:
            articles = state.sports;
            break;
        case requestNewsCategory.REQUEST_TECHNOLOGY_NEWS:
            articles = state.technology;
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
