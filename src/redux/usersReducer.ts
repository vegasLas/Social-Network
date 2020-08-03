import { ResponseType } from './../api/api';
import { AppReducersType, InferActionsTypies } from './redux-store';

import { usersAPI } from "../api/UsersAPI"
import { userType } from "../types/types"
import { ThunkAction } from "redux-thunk"
import { Dispatch } from 'react';
import { ResultCodeEnum } from '../api/api';

const { updateObjectInArray } = require("../utils/object-helers")


let initialState: initialStateType = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingProgress: [],
}
export type initialStateType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingProgress: Array<number> ,
}

const usersReducer = (state = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return { ...state, users: updateObjectInArray(state.users, action.userId, 'id', { followed: true }) }
        case "UNFOLLOW":
            return { ...state, users: updateObjectInArray(state.users, action.userId, 'id', { followed: false }) }
        case "SET_USERS":
            return { ...state, users: action.users }
        case "SET_CURRENT_PAGE":
            return { ...state, currentPage: action.currentPage }
        case "SET_TOTAL_USERS_COUNT":
            return { ...state, totalUsersCount: action.totalUsersCount }
        case "TOGGLE_IS_FETCHING":
            return { ...state, isFetching: action.isFetching }
        case "TOGGLE_IS_FOLLO0WING_PROGRESS":
            return {
                ...state, followingProgress: action.isFetching
                ? [...state.followingProgress, action.userId]
                : state.followingProgress.filter(id => id != action.userId)
            }
        default: 
            return state;
    }
}

type ActionsTypes = InferActionsTypies<typeof actions>

export let actions = {
followSuccess: (userId: number) => ({type: 'FOLLOW', userId} as const),
unfollowSuccess: (userId: number) => ({type: 'UNFOLLOW', userId} as const),
setUsers: (users: Array<userType>) => ({type: 'SET_USERS', users} as const ),
setCurrentPage: (currentPage: number) => ({type: 'SET_CURRENT_PAGE', currentPage} as const ),
setTotalUsersCount: (totalUsersCount: number) => ({type: 'SET_TOTAL_USERS_COUNT', totalUsersCount} as const ),
toggleIsFetching: (isFetching: boolean) => ({type: 'TOGGLE_IS_FETCHING', isFetching} as const ),
toggleIsFillowingProgress:  (isFetching: boolean, userId: number) => ({type: 'TOGGLE_IS_FOLLO0WING_PROGRESS', isFetching, userId} as const )
}
type ThunkType = ThunkAction<Promise<void>, AppReducersType, unknown, ActionsTypes>

type DispatchType = Dispatch<ActionsTypes>

export const requestUsers = (page: number, pageSize: number): ThunkType => async (dispatch) => {
    dispatch(actions.toggleIsFetching(true))
    dispatch(actions.setCurrentPage(page))

    let UsersData = await usersAPI.getUsers(page, pageSize);

    dispatch(actions.toggleIsFetching(false))
    dispatch(actions.setUsers(UsersData.items))
    dispatch(actions.setTotalUsersCount(UsersData.totalCount))
}
const _followUngollowFlow = async (dispatch: DispatchType, userId: number, apiMethod: (userId: number) => Promise<ResponseType>, actionCreator: (userId: number) => ActionsTypes) => {
    dispatch(actions.toggleIsFillowingProgress(true, userId));
    let data = await apiMethod(userId);

    if (data.resultCode === ResultCodeEnum.Success ) {
        dispatch(actionCreator(userId))
    }
    dispatch(actions.toggleIsFillowingProgress(false, userId))
}

export const follow = (userId: number): ThunkType => async (dispatch) => {
    await _followUngollowFlow(dispatch, userId, usersAPI.follow.bind(usersAPI), actions.followSuccess)
} 
export const unfollow = (userId: number): ThunkType => async (dispatch) => {
    await _followUngollowFlow(dispatch, userId, usersAPI.unfollow.bind(usersAPI), actions.unfollowSuccess)
} 
export default usersReducer