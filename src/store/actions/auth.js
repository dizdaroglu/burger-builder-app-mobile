import axios from '../../../axios-orders';
import * as actionTypes from './actionTypes';
import { key, SIGNIN, SIGNUP, REFRESH } from '../../key';

export const signUp = (data) => {
    console.log("data -> ", data)

    const authData = {
        email: data.email,
        password: data.password,
        returnSecureToken: true
    }
    const request = axios.post(SIGNUP, authData)
        .then(res => {
            console.log(res.data)
            return res.data
        })
        .catch(error => {
            return false
        })
    return {
        type: actionTypes.SIGN_UP,
        payload: request
    }
}

export const signIn = (data) => {
    console.log("data -> ", data)
    const authData = {
        email: data.email,
        password: data.password,
        returnSecureToken: true
    }
    const request = axios.post(SIGNIN, authData)
        .then(res => {
            console.log("dataa2, ", res.data)
            return res.data
        })
        .catch(error => {
            return false
        })
    return {
        type: actionTypes.SIGN_IN,
        payload: request
    }
}

export const autoSignIn = (refToken) => {
    const data = 'grant_type=refresh_token&refresh_token=' + refToken;
    const request = axios.post(REFRESH, data)
        .then(res => {
            return res.data
        })
        .catch(error => {
            return false
        })
    return {
        type: actionTypes.AUTO_SIGN_IN,
        payload: request
    }
}