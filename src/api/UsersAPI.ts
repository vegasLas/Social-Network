import { userType } from "../types/types"
import {instance, ResponseType} from './api'

type UsersGetType = {
    items: Array<userType>
    totalCount: number
    error: string | null
}

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10, term = "", followed: boolean | null = null) {
    return instance.get<UsersGetType>(`users?page=${currentPage}&count=${pageSize}&term=${term}`+ (followed === null ? '' : `&friend=${followed}`)).then(res => res.data)
    },  
    getFriendsOfAllUsers(friend: true) {
        return instance.get<UsersGetType>(`users?friend=${friend}`).then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<ResponseType>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete<ResponseType>(`follow/${userId}`).then(res => res.data)
    }
}