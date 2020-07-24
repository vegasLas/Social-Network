import { usersAPI } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


const { updateObjectInArray } = require("../utils/object-helers")
const { default: actions } = require("redux-form/lib/actions")

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return { ...state, users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }) }
        case UNFOLLOW:
            return { ...state, users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }) }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.totalUsersCount }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingProgress: action.isFetching
                ? [...state.followingProgress, action.userId]
                : state.followingProgress.filter(id => id != action.userId)
            }
        default: 
            return state;
    }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFillowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (page, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    let res = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.data.items))
    dispatch(setTotalUsersCount(res.data.totalCount))
}
const followUngollowFlow = async (dispatch, userId, apiMethod, actionCreator) =>{
    dispatch(toggleIsFillowingProgress(true, userId))
    let res = await apiMethod(userId);

    if (res.data.resultCode === 0 ) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFillowingProgress(false, userId))
}

export const follow = (userId) => async (dispatch) => {
    followUngollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
} 
export const unfollow = (userId) => async (dispatch) => {
    followUngollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
} 
export default usersReducer