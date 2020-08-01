import { saveProfile } from './../redux/profile-reducer';
import { ProfileType, photoType, SaveProfileType } from './../types/types';
import axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '19935fd5-6e17-47c2-8544-ba33f3051235' }
})

type user = {
    id: number
    name: string
    status: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}
type UsersGetType = {
    items: Array<user>
    user: user
    totalCount: number
    error: string
}
type UsersDelete = {
    resultCode: number
    messages: Array<string>
    data: Object
}
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get<UsersGetType>(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
    },
    follow(userId: number) {
        return instance.post<boolean>(`follow/${userId}`).then(res => res.data)
    },
    unfollow(userId: number) {
        return instance.delete<UsersDelete>(`follow/${userId}`).then(res => res.data)
    }
}

export enum ResultCodeEnum  {
    Success = 0,
    Error = 1
}

type SaveProfileOrUpdateStatus = {
    resultCode: ResultCodeEnum
    messages: Array<string>
    data: Object
}

type SetPhotoType = {
    data: {photos: photoType}
    resultCode: ResultCodeEnum
    messages: Array<string>
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/` + userId).then(res => res.data)
    },
    saveProfile(profile: SaveProfileType) {
        return instance.put<SaveProfileOrUpdateStatus>(`profile`, profile).then(res => res.data)
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/userId/` + { userIde: userId }).then(res => res.data)
    },
    updateStatus(status: string) {
        return instance.put<SaveProfileOrUpdateStatus>(`profile/status`, { status: status }).then(res => res.data)
    },
    setPhoto(photoFile: Object ) {
        const formData = new FormData();
        formData.append("image", photoFile);
        return instance.put<SetPhotoType>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then(res => res.data)
    }
}

type GetAuthType = {
    data: {id: number
        email: string
        login: string}
    resultCode: ResultCodeEnum
    messages: Array<string>
}
type LogType = {
    resultCode: LogResultCodeenum
    messages: Array<string>
    data: Object
}
type GetCaptcha = {
    url: string
}

export enum LogResultCodeenum  {
    captcha = 10,
    Success = 0,
    Error = 1
}

export const authAPI = {
    me() {
        return instance.get<GetAuthType>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean , captcha: null | string) {
        return instance.post<LogType>(`auth/login`, { email, password, rememberMe, captcha }).then(res => res.data);
    },
    logout() {
        return instance.delete<LogType>(`auth/login`).then(res => res.data);
    },
    getCaptcha() {
        return instance.get<GetCaptcha>(`security/get-captcha-url`).then(res => res.data);
    }
}