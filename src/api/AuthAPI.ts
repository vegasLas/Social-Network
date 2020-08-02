import { instance, ResultCodeEnum, ResponseType, LogResultCodeenum } from './api'


type GetAuthDataType = {
    id: number,
    email: string,
    login: string
}
type LoginResponseData = {
    userId: number
}
type GetCaptcha = {
    url: string
}



export const authAPI = {
    me() {
        return instance.get<ResponseType<GetAuthDataType, ResultCodeEnum>>(`auth/me`).then(res => res.data);
    },
    login(email: string, password: string, rememberMe: boolean, captcha: null | string) {
        return instance.post<ResponseType<LoginResponseData, LogResultCodeenum>>(`auth/login`, { email, password, rememberMe, captcha }).then(res => res.data);
    },
    logout() {
        return instance.delete<ResponseType>(`auth/login`).then(res => res.data);
    },
    getCaptcha() {
        return instance.get<GetCaptcha>(`security/get-captcha-url`).then(res => res.data);
    }
}