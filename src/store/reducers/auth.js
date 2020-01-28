import * as actionTypes from '../actions/actionTypes';
import { updatedObject } from '../utility';



const initialState = {
    auth: {
        uid: null,
        token: null,
        refToken: null
    },
    loading: false,

}


const reducer = (state = {}, action) => {
    switch (action.type) {

        case actionTypes.SIGN_IN:
            return {
                ...state,
                auth: {
                    uid: action.payload.localId || false,
                    token: action.payload.idToken || false,
                    refToken: action.payload.refreshToken || false
                }
            }
        case actionTypes.SIGN_UP:
            return {
                ...state,
                auth: {
                    uid: action.payload.localId || false,
                    token: action.payload.idToken || false,
                    refToken: action.payload.refreshToken || false
                }
            }
        case actionTypes.AUTO_SIGN_IN:
            return {
                ...state,
                auth: {
                    uid: action.payload.user_id || false,
                    token: action.payload.id_token || false,
                    refToken: action.payload.refresh_token || false
                }
            }
        default:
            return state;
    }
}

export default reducer