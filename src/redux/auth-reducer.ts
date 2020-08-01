import { LogResultCodeenum } from './../api/api';
import { AppReducersType } from './redux-store';
import { Dispatch } from 'react';
import { authAPI } from "../api/api";
import { stopSubmit, FormAction } from "redux-form";
import { ThunkAction } from 'redux-thunk';

const SET_USER_DATA = 'SET_USER_DATA'
const SET_CAPTCHA = 'SET_CAPTCHA'

let initialState = {
    userid: 1 as number ,
    email: null as  string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null
}
type initialStateType = typeof initialState

const authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
        case SET_CAPTCHA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

type setAuthUserDataType = {
    type: typeof SET_USER_DATA
    payload: { userid: number | null, email: string | null, login: string | null, isAuth: boolean }
}
type setCaptchaType = {
    type: typeof SET_CAPTCHA
    payload: { captchaUrl: string | null}
}


export const setAuthUserData = (userid: number | null, email: string | null, login: string | null, isAuth: boolean): setAuthUserDataType => ({
    type: SET_USER_DATA,
    payload: { userid, email, login, isAuth }
})

export const setCaptcha = (captchaUrl: string | null): setCaptchaType => ({
    type: SET_CAPTCHA,
    payload: { captchaUrl }
})

type ActionsType = setAuthUserDataType | setCaptchaType | FormAction
type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<Promise<void>, AppReducersType, unknown, ActionsType>
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let data = await authAPI.me();
    if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string , password: string, rememberMe: boolean, captcha: string | null): ThunkType => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe, captcha);
    if (data.resultCode === LogResultCodeenum.Success) {
        dispatch(getAuthUserData())
    }
    else {
        let message = data.messages.length > 0 ? data.messages[0] : 'Some error';
        dispatch(stopSubmit('login', { _error: message }))
        if (data.resultCode === LogResultCodeenum.captcha) {
            dispatch(captchaDisplayed())
        }
    }
}
export const logout = (): ThunkType => async (dispatch) => {
    let data = await authAPI.logout();
    if (data.resultCode === LogResultCodeenum.Success) {
        dispatch(setAuthUserData(null, null, null, false))
    }
}
export const captchaDisplayed = (): ThunkType => async (dispatch) => {
    const data = await authAPI.getCaptcha();
    const captcha = data.url
    dispatch(setCaptcha(captcha))
}

export default authReducer