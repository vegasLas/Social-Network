import React from 'react'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import classes from './ProfileInfo.module.css'
import Preloader from '../../../common/Preloader'
import avatar from '../../../pictures/user.png'


const ProfileInfo = ({profile, status, updateStatus, setPhoto, isOwner}) => {

    if (!profile) {
      return <Preloader />
    }

    let onMainChangePhoto = (e) => {
        if (e.target.files.length) {
            setPhoto(e.target.files[0])
        }
    }

    return (
        <div className = {classes.descriptionBlock}>
            <img src={profile.photos.large || avatar} className = {classes.avatar} />
            {isOwner && <input type={"file"} onChange={onMainChangePhoto} />}
            <ProfileStatusWithHooks status = {status} updateStatus = {updateStatus}/>
        </div>
    )
}

export default ProfileInfo