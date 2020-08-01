import {createSelector} from "reselect";
import { userType } from "../types/types";
import { AppReducersType } from "./redux-store";



const getUsersSelector = (state: AppReducersType) => {
    return state.usersPage.users;
}

export const getUsers = createSelector(getUsersSelector,
    (users) => {
    return users.filter(u => true);
})

export const getPageSize = (state: AppReducersType) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state: AppReducersType) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state: AppReducersType) => {
    return state.usersPage.currentPage;
}

export const getIsFetching = (state: AppReducersType) => {
    return state.usersPage.isFetching;
}
export const getFollowingInProgress = (state: AppReducersType) => {
    return state.usersPage.followingProgress;
}

export const countSomethingDifficult = (state: AppReducersType) => {
    debugger
    //for... math... big arrays
    let count = 23;
    return count;
}