import {userActions} from "../actions/actionConstants";

function userReducer(state = {}, action) {
    switch(action.type) {
        case userActions.REQUEST_USER_DATA:
            return {
                ...state,
                loading: true,
                authType: action.authType
            };
        case userActions.RECEIVE_USER_DATA:
            const name = action.data.user.displayName;
            return {
                ...state,
                loading: false,
                userObj: {
                    name: action.data.user.isAnonymous ? 'Guest' : name,
                    email: action.data.user.email,
                    pictureUrl: action.data.user.photoURL
                }
            };
        default:
            return {
                loading: false,
                userObj: {}
            };
    }
}

export default userReducer;
