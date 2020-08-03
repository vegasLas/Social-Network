import { InferActionsTypies, BaseThunkType } from './redux-store';
import { ProfileType, SaveProfileType, photoType } from './../types/types';
import { ResultCodeEnum } from "../api/api"
import { stopSubmit } from "redux-form"
import { Dispatch } from 'react';
import { profileAPI } from '../api/ProfileAPI';


type postType = {
    id: number, message: string, likesCount: number,
}
let initialState = {
    posts: [
        { id: 1, message: 'first', likesCount: 12 },
        { id: 2, message: 'TRATATTA', likesCount: 11 },
        { id: 3, message: 'Pleti your live', likesCount: 11 },
        { id: 4, message: 'ccC', likesCount: 11 }
    ] as Array<postType>,
    profile: null as ProfileType | null,
    status: '' as string,
}
export type initialStateType = typeof initialState
const profileReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "ADD_POST": {
            let newPost: postType = {
                id: 5,
                message: action.newPostText,
                likesCount: 1
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        }
        case "SET_STATUS": {
            return {
                ...state,
                status: action.status
            }
        }
        case "SET_USER_PROFILE": {
            return {
                ...state,
                profile: action.profile
            }
        }
        case "DELETE_POST": {
            return {
                ...state, posts: state.posts.filter(post => post.id != action.postId)
            }
        }
        case "SET_PHOTO": {
            return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType }
        }
        default:
            return state;
    }
}

export type ActionsType = InferActionsTypies<typeof actions>

export const actions = {
    addPostActionCreator: (newPostText: string) => ({ type: "ADD_POST", newPostText } as const),
    setUserProfile: (profile: ProfileType) => ({ type: "SET_USER_PROFILE", profile } as const),
    setStatus: (status: string) => ({ type: "SET_STATUS", status } as const),
    deletePost: (postId: number) => ({ type: "DELETE_POST", postId } as const),
    setPhotoSuccess: (photos: photoType) => ({ type: "SET_PHOTO", photos } as const)
}

type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>

export const getInformationProfile = (userID: number, authorizedUserId: number, history: any): ThunkType => async (dispatch) => {
    let userId = userID
    if (!userId) {
        userId = authorizedUserId;
        if (!userID) {
            history.push("/login");
        }
    }
    dispatch(getUserProfile(userId));
    dispatch(getStatus(userId));
}
export const getUserProfile = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getProfile(userId);
    debugger
    dispatch(actions.setUserProfile(data))
}
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    debugger
    let data = await profileAPI.getStatus(userId);
    debugger
    dispatch(actions.setStatus(data))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.setStatus(status))
    }
}
export const setPhoto = (photo: Blob): ThunkType => async (dispatch) => {
    let data = await profileAPI.setPhoto(photo);
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(actions.setPhotoSuccess(data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType): ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userid
    let data = await profileAPI.saveProfile(profile);
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(getUserProfile(userId))
    }
    else {
        dispatch(stopSubmit('ProfileData', { _error: data.messages[0] }))
        return Promise.reject(data.messages[0])
    }
}


export default profileReducer