import React from 'react'
import classes from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPostsContainer from './MyPosts/MyPostContainer'

const Profile = (props) => {
    return <div className={classes.profieBox}>
        <ProfileInfo
            isOwner={props.isOwner}
            setPhoto={props.setPhoto}
            setStatus={props.setStatus}
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateStatus}
            saveProfile = {props.saveProfile} />
        <MyPostsContainer />
    </div>
}
export default Profile