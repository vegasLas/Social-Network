import { ProfileType } from './../types/types';
import { photoType } from '../types/types';
import { usersAPI, profileAPI } from "../api/api"
import { stopSubmit } from "redux-form"


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
    status: '' as string,
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
            return { ...state, profile: {...state.profile, photos: action.photo} as ProfileType }
        }
        default:
            return state;
    }
}

type addPostActionCreatorType = { type: typeof ADD_POST, newPostText: string }
type setUserProfileType = { type: typeof SET_USER_PROFILE, profile: [] | null }
type setStatusType = { type: typeof SET_STATUS, status: string | null }
type deletePostType = { type: typeof DELETE_POST, postId: number }
type setPhotoSuccessType = { type: typeof SET_PHOTO, photo: photoType }
export const addPostActionCreator = (newPostText: string): addPostActionCreatorType => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile: [] | null): setUserProfileType => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status: string): setStatusType => ({ type: SET_STATUS, status })
export const deletePost = (postId: number): deletePostType => ({ type: DELETE_POST, postId })
export const setPhotoSuccess = (photo: photoType): setPhotoSuccessType => ({ type: SET_PHOTO, photo })

export const getInformationProfile = (userID: number, authorizedUserId: number, history: any) => (dispatch: any) => {
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
export const getUserProfile = (userId: number) => async (dispatch: any) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId: number) => async (dispatch: any) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
}
export const updateStatus = (status: string) => async (dispatch: any) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const setPhoto = (photo: photoType) => async (dispatch: any) => {
    let response = await profileAPI.setPhoto(photo);
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
    const userId = getState().auth.userid
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
    else {
        dispatch(stopSubmit('ProfileData', { _error: response.data.messages[0] }))
        return Promise.reject(response.data.messages[0])
    }
}


export default profileReducer