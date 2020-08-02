import axios from 'axios'

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '19935fd5-6e17-47c2-8544-ba33f3051235' }
})
export type ResponseType<D = {}, RC = ResultCodeEnum> = {
    data: D
    resultCode: RC
    messages: Array<string>
}
export enum ResultCodeEnum {
    Success = 0,
    Error = 1
}
export enum LogResultCodeenum {
    captcha = 10,
    Success = 0,
    Error = 1
}
