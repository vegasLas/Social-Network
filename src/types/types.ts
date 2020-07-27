export type photoType =  { 
    small: string,
    large: string }

export type contactsType = {
    contacts: object
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export type ProfileType = {
    userId: number | null
    lookingForAJob: boolean | null
    lookingForAJobDescription: string | null
    fullName: string | null
    contacts: contactsType | null
    photos: photoType | null
}
export type userType = {
    id: number  
    name: string
    status: string
    photos: photoType
    followed: boolean

}