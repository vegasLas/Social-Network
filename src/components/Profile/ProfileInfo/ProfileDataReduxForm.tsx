import React from 'react'
import { createField, input, TextArea } from '../../../common/Formcontrols/FormControl'
import { reduxForm, InjectedFormProps } from 'redux-form'
import classes from './ProfileInfo.module.css'
import { ProfileType, SaveProfileType } from '../../../types/types'
import { type } from 'os'

type FormData = {
    userId: number
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    contacts: {
        github: string
        vk: string
        facebook: string
        instagram: string
        twitter: string
        website: string
        youtube: string
        mainLink: string
    }
}

type PropsType = {
    profile: ProfileType
}
type FormDataKey = Extract<keyof FormData, string>
const ProfileData: React.FC<InjectedFormProps<FormData, PropsType> & PropsType> = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className={classes.formSummaryError}>{error}</div>}
        <button>Save</button>
        <div>
            <div>
                <b>Full Name</b>:
            {createField<FormDataKey>("Full Name", "fullName", [], input)}
            </div>
            <div>
                <b>My proffesional skills</b>:
        {createField<FormDataKey>("My professional skills", "lookingForAJobDescription", [], TextArea)}
            </div>
            <div>
                <b>Looking for a job</b>:
        {createField<FormDataKey>("", "lookingForAJob", [], input, { type: "checkbox" },)}
            </div>
            <div>
                <b>Contacts</b>{Object.keys(profile.contacts).map(key => {
                    return <div key={key} className={classes.contact}>
                        <b>
                            {key}: {createField(key, "contacts." + key, [], input)}
                        </b>
                    </div>
                })}
            </div>
        </div>
    </form>
}

const ProfileDataReduxForm = reduxForm<FormData, PropsType>({ form: "ProfileData" })(ProfileData)

export default ProfileDataReduxForm