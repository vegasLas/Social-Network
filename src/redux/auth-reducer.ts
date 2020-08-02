import { LogResultCodeenum, ResultCodeEnum } from './../api/api';
import { AppReducersType, InferActionsTypies, BaseThunkType } from './redux-store';
import { Dispatch } from 'react';
import { authAPI } from "../api/AuthAPI";
import { stopSubmit, FormAction } from "redux-form";

let initialState = {
    userid: 1 as number,
    email: null as string | null,
    login: null as string | null,
    isAuth: false as boolean,
    captchaUrl: null as string | null
}
type initialStateType = typeof initialState

const authReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET_USER_DATA":
        case "SET_CAPTCHA":
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

const actions = {
    setAuthUserData: (userid: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
        type: "SET_USER_DATA",
        payload: { userid, email, login, isAuth }
    }),
    setCaptcha: (captchaUrl: string | null) => ({
        type: "SET_CAPTCHA",
        payload: { captchaUrl }
    })
}

type ThunkType = BaseThunkType<ActionsType>
type ActionsType = InferActionsTypies<typeof actions> | FormAction
export const getAuthUserData = (): ThunkType => async (dispatch) => {
    let data = await authAPI.me();
    if (data.resultCode === 0) {
        let { id, login, email } = data.data;
        dispatch(actions.setAuthUserData(id, email, login, true))
    }
}
export const login = (email: string, password: string, rememberMe: boolean, captcha: string | null): ThunkType => async (dispatch) => {
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
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.setAuthUserData(null, null, null, false))
    }
}
export const captchaDisplayed = (): ThunkType => async (dispatch) => {
    const data = await authAPI.getCaptcha();
    const captcha = data.url
    dispatch(actions.setCaptcha(captcha))
}

export default authReducer