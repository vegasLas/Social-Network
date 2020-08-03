import React, { Props } from 'react'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostContainer'
import { ProfileType } from '../../types/types'

type PropsType = {
    isOwner: any
    status: string
    profile: ProfileType | null
    setPhoto: (photo: Blob) => void
    updateStatus: (status: string) => void
    saveProfile: (profile: ProfileType) => Promise<any>
}

const Profile: React.FC<PropsType> = ({isOwner, status, profile, setPhoto, updateStatus, saveProfile}) => {
    return <div className={classes.profieBox}>
        <ProfileInfo
            isOwner={isOwner}
            setPhoto={setPhoto}
            profile={profile}
            status={status}
            updateStatus={updateStatus}
            saveProfile={saveProfile} />
        <MyPostsContainer />
    </div>
}
export default Profile