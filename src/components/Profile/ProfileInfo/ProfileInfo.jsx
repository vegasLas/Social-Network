import React, { useState } from 'react'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'
import classes from './ProfileInfo.module.css'
import Preloader from '../../../common/Preloader'
import avatar from '../../../pictures/user.png'
import ProfileDataReduxForm from './ProfileDataReduxForm'


const ProfileInfo = ({ profile, status, updateStatus, setPhoto, isOwner, saveProfile }) => {

    let [editMode, setEditMode] = useState(false)

    if (!profile) {
        return <Preloader />
    }

    let onMainChangePhoto = (e) => {
        if (e.target.files.length) {
            setPhoto(e.target.files[0])
        }
    }
    let onSubmit = (formData) => {
        console.log(formData)
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
                ? <ProfileDataReduxForm initialValues = {profile} goToEditMode={goToEditMode} onSubmit={onSubmit} profile={profile} />
                : <ProfileInf goToEditMode={goToEditMode} isOwner={isOwner} profile={profile} />
            }
        </div>
    </div>
    )
}

const ProfileInf = ({ isOwner, goToEditMode, profile }) => {
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
            <b>About me:</b> {profile.aboutMe}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]} />
            })}
        </div>
    </div>
}
const Contact = ({ contactTitle, contactValue }) => {
    return <div className={classes.contact}>
        <b>{contactTitle}</b>: {contactValue}
    </div>
}

export default ProfileInfo