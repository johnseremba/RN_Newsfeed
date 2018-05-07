import {userActions} from "../actions/actionConstants";

function userReducer(state = {}, action) {
    switch(action.type) {
        case userActions.REQUEST_USER_DATA:
            return {
                ...state,
                loading: true
            };
        case userActions.RECEIVE_USER_DATA:
            return {
                ...state,
                loading: false,
                userObj: {
                    name: action.data.name,
                    email: action.data.email,
                    pictureUrl: action.data.pictureUrl
                }
            };
        default:
            return {
                loading: false,
                userObj: {
                    name: 'Guest',
                    email: '',
                    pictureUrl: ''
                }
            };
    }
}

export default userReducer;
