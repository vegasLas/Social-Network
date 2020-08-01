import { AppReducersType } from './redux-store';
import { usersAPI, ResultCodeEnum } from "../api/api"
import { userType } from "../types/types"
import { ThunkAction } from "redux-thunk"
import { actionTypes } from 'redux-form';
import { Dispatch } from 'react';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'


const { updateObjectInArray } = require("../utils/object-helers")


let initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [],
}
type initialStateType = {
    users: Array<userType>,
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

type ActionsTypes = followSuccessType |  unfollowSuccessType | setUsersType | setCurrentPageType | setTotalUsersCountType | toggleIsFetchingType | toggleIsFillowingProgressType

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

type ThunkType = ThunkAction<Promise<void>, AppReducersType, unknown, ActionsTypes>

type DispatchType = Dispatch<ActionsTypes>

export const requestUsers = (page: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(page))

    let UsersData = await usersAPI.getUsers(page, pageSize);

    dispatch(toggleIsFetching(false))
    dispatch(setUsers(UsersData.items))
    dispatch(setTotalUsersCount(UsersData.totalCount))
}
const _followUngollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: Function, actionCreator: (userId: number) => followSuccessType | unfollowSuccessType) =>{
    dispatch(toggleIsFillowingProgress(true, userId))
    let data = await apiMethod(userId);

    if (data.resultCode === ResultCodeEnum.Success ) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFillowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    _followUngollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), followSuccess)
} 
export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    _followUngollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), unfollowSuccess)
} 
export default usersReducer