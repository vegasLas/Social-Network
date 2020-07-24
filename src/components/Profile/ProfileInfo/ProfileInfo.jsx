import React from 'react'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import classes from './ProfileInfo.module.css'
import Preloader from '../../../common/Preloader'


const ProfileInfo = ({profile, status, updateStatus}) => {

    if (!profile) {
      return <Preloader />
    }

    return (
        <div className = {classes.descriptionBlock}>
            <img src={profile.photos.large} />
            <ProfileStatusWithHooks status = {status} updateStatus = {updateStatus}/>
        </div>
    )
}

export default ProfileInfo