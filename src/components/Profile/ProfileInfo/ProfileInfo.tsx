import React, { useState } from 'react'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import classes from './ProfileInfo.module.css'
import Preloader from '../../../common/Preloader'
import avatar from '../../../pictures/user.png'
import ProfileDataReduxForm from './ProfileDataReduxForm'
import { ProfileType, SaveProfileType } from '../../../types/types'

type PropsType = {
    isOwner: any
    status: string
    profile: ProfileType | null
    setPhoto: (photo: Blob) => void
    updateStatus: (status: string) => void
    saveProfile: (profile: SaveProfileType) => void
    goToEditMode: () => void
}

const ProfileInfo: React.FC<PropsType> = ({ profile, status, updateStatus, setPhoto, isOwner, saveProfile }) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    let onMainChangePhoto = (e: any) => {
        if (e.target.files.length) {
            setPhoto(e.target.files[0])
        }
    }
    let onSubmit = (formData: SaveProfileType) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false)
            }
        )
    }
    let goToEditMode = () => { setEditMode(true) }
    return (<div>
        <div className={classes.descriptionBlock}>
            <img src={profile.photos.large || avatar} className={classes.avatar} />
            {isOwner && <input type={"file"} onChange={onMainChangePhoto} />}
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
            {editMode
                ? <ProfileDataReduxForm  onSubmit={onSubmit} profile={profile} />
                : <ProfileInf goToEditMode={goToEditMode} isOwner={isOwner} profile={profile} />
            }
        </div>
    </div>
    )
}

const ProfileInf: React.FC<PropsType> = ({ isOwner, goToEditMode, profile }) => {
    return <div>
        {isOwner && <div><button onClick={goToEditMode} >edit</button></div>
        }
        <div>
            <b>Full name:</b> {profile.fullName}
        </div>
        <div>
            <b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}
        </div>
        <div>
            <b>About me:</b> {profile.lookingForAJobDescription}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}
type PropsContactType = {
    contactTitle: Object
    contactValue: ProfileType
}
const Contact: React.FC<PropsContactType> = ({ contactTitle, contactValue }) => {
    return <div className={classes.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo