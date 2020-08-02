export type photoType = {
        small: string | null,
        large: string | null
}

export type contactsType = {
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
    contacts: contactsType
    photos: photoType
}
export type SaveProfileType = {
    userId: number 
    lookingForAJob: boolean 
    lookingForAJobDescription: string 
    fullName: string 
    contacts: contactsType 
}
export type userType = {
    id: number
    name: string
    status: string
    photos: photoType
    followed: boolean

}
export type PostType = {
    id: number, message: string, likesCount: number
}