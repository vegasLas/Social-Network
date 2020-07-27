import { usersAPI } from "../api/api"
import { userType } from "../types/types"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


const { updateObjectInArray } = require("../utils/object-helers")


let initialState: initialStateType = {
    users: null,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [],
}
type initialStateType = {
    users: Array<userType> | null,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingProgress: Array<number> ,
}

const usersReducer = (state = initialState, action: any): initialStateType => {
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

type followSuccessType =  {type: typeof FOLLOW, userId: number}
type unfollowSuccessType = {type: typeof UNFOLLOW, userId: number}
type setUsersType =  {type: typeof SET_USERS, users: Array<userType>}
type setCurrentPageType = {type: typeof SET_CURRENT_PAGE, currentPage: number}
type setTotalUsersCountType = {type: typeof SET_TOTAL_USERS_COUNT, totalUsersCount: number}
type toggleIsFetchingType = {type: typeof TOGGLE_IS_FETCHING, isFetching: boolean}
type toggleIsFillowingProgressType = {type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isFetching: boolean, userId: number}
export const followSuccess = (userId: number):followSuccessType => ({type: FOLLOW, userId})
export const unfollowSuccess = (userId: number):unfollowSuccessType => ({type: UNFOLLOW, userId})
export const setUsers = (users: Array<userType>):setUsersType => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage: number):setCurrentPageType => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount: number):setTotalUsersCountType => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const toggleIsFetching = (isFetching: boolean):toggleIsFetchingType => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFillowingProgress = (isFetching: boolean, userId: number):toggleIsFillowingProgressType => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (page: number, pageSize: number) => async (dispatch: any) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    let res = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(res.data.items))
    dispatch(setTotalUsersCount(res.data.totalCount))
}
const followUngollowFlow = async (dispatch: any, userId: number, apiMethod: Function, actionCreator: any) =>{
    dispatch(toggleIsFillowingProgress(true, userId))
    let res = await apiMethod(userId);

    if (res.data.resultCode === 0 ) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFillowingProgress(false, userId))
}

export const follow = (userId: number) => async (dispatch: any) => {
    followUngollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
} 
export const unfollow = (userId: number) => async (dispatch: any) => {
    followUngollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
} 
export default usersReducer