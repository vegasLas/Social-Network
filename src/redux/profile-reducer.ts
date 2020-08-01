import { AppReducersType } from './redux-store';
import { ProfileType, SaveProfileType } from './../types/types';
import { photoType } from '../types/types';
import { usersAPI, profileAPI, ResultCodeEnum } from "../api/api"
import { stopSubmit, FormAction} from "redux-form"
import { Dispatch } from 'react';
import { ThunkAction } from 'redux-thunk';


const ADD_POST = 'ADD_POST'
const SET_STATUS = 'SET_STATUS'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const DELETE_POST = 'DELETE_POST'
const SET_PHOTO = 'SET_PHOTO'

type postType = {
    id: number, message: string, likesCount: number,
}
let initialState  = {
    posts: [
        { id: 1, message: 'first', likesCount: 12 },
        { id: 2, message: 'TRATATTA', likesCount: 11 },
        { id: 3, message: 'Pleti your live', likesCount: 11 },
        { id: 4, message: 'ccC', likesCount: 11 }
    ] as Array<postType>,
    profile: null as ProfileType | null ,
    status: '' as string ,
    newPostText: '' as string
}
export type initialStateType = typeof initialState
const profileReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: postType = {
                id: 5,
                message: action.newPostText,
                likesCount: 1
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case DELETE_POST: {
            return {
                ...state, posts: state.posts.filter(post => post.id != action.postId)
            }
        }
        case SET_PHOTO: {
            return { ...state, profile: {...state.profile, photos: action.photos}  }
        }
        default:
            return state;
    }
}

type ActionsTypes = addPostActionCreatorType | setUserProfileType | setPhotoSuccessType | setStatusType | deletePostType | FormAction


type addPostActionCreatorType = { type: typeof ADD_POST, newPostText: string }
type setUserProfileType = { type: typeof SET_USER_PROFILE, profile: ProfileType | null }
type setStatusType = { type: typeof SET_STATUS, status: string }
type deletePostType = { type: typeof DELETE_POST, postId: number }
type setPhotoSuccessType = { type: typeof SET_PHOTO, photos: photoType }
export const addPostActionCreator = (newPostText: string): addPostActionCreatorType => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile: ProfileType | null): setUserProfileType => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status })
export const deletePost = (postId: number): deletePostType => ({ type: DELETE_POST, postId })
export const setPhotoSuccess = (photos: photoType): setPhotoSuccessType => ({ type: SET_PHOTO, photos })

type DispatchType = Dispatch<ActionsTypes> 

type ThunkType = ThunkAction<Promise<void>, AppReducersType, unknown, ActionsTypes>

export const getInformationProfile = (dispatch: DispatchType, userID: number , authorizedUserId: number, history: any)=> {
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
    dispatch(setUserProfile(data))
}
export const getStatus = (userId: number): ThunkType => async (dispatch) => {
    let data = await profileAPI.getStatus(userId);
    dispatch(setStatus(data))
}
export const updateStatus = (status: string): ThunkType => async (dispatch) => {
    let data = await profileAPI.updateStatus(status);
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(setStatus(status))
    }
}
export const setPhoto = (photo: Object): ThunkType => async (dispatch) => {
    let data = await profileAPI.setPhoto(photo);
    if (data.resultCode === ResultCodeEnum.Success) {
        dispatch(setPhotoSuccess(data.data.photos))
    }
}
export const saveProfile = (profile: SaveProfileType): ThunkType => async (dispatch, getState) => {
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