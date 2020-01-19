import axios from '../../../axios-orders';
import * as actionTypes from './actionTypes';
import { key } from '../../key';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}
export const authSuccess = (idToken, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        idToken,
        userId
    }
}
export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error
    }
}

export const authLogout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    }
}
export const auth = (email, password, isSignup) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            email,
            password,
            returnSecureToken: true
        }
        let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`;
        if (!isSignup) {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${key}`;
        }
        axios.post(url, authData)
            .then(res => {
                dispatch(authSuccess());
            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }
}