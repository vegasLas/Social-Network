import { usersAPI, profileAPI } from "../api/api"
import { stopSubmit } from "redux-form"


const ADD_POST = 'ADD_POST'
const SET_STATUS = 'SET_STATUS'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const DELETE_POST = 'DELETE_POST'
const SET_PHOTO = 'SET_PHOTO'



let initialState = {
    posts: [
        { id: 1, message: 'first', likesCount: 12 },
        { id: 2, message: 'TRATATTA', likesCount: 11 },
        { id: 3, message: 'Pleti your live', likesCount: 11 },
        { id: 4, message: 'ccC', likesCount: 11 }
    ],
    profile: null,
    status: " "
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
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
                ...state, posts: state.profile.filter(p => p.id != action.postId)
            }
        }
        case SET_PHOTO: {
            return {
                ...state, profile: {...state.profile, photos: action.photo}
            }
        }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })
export const setStatus = (status) => ({ type: SET_STATUS, status })
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const setPhotoSuccess = (photo) => ({ type: SET_PHOTO, photo })

export const getInformationProfile = (userID, authorizedUserId, history) => (dispatch) => {
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
export const getUserProfile = (userId) => async (dispatch) => {
    const response = await usersAPI.getProfile(userId);
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const setPhoto = (photo) => async (dispatch) => {
    let response = await profileAPI.setPhoto(photo);
    if (response.data.resultCode === 0) {
        dispatch(setPhotoSuccess(response.data.data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userid
    let response = await profileAPI.saveProfile(profile);
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
    else {
        dispatch(stopSubmit('ProfileData', {_error: response.data.messages[0]}))
    }
}


export default profileReducer