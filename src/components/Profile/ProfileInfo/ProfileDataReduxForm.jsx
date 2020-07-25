import React from 'react'
import { createField, input, TextArea } from '../../../common/Formcontrols/FormControl'
import { reduxForm } from 'redux-form'
import classes from './ProfileInfo.module.css'


const ProfileData = ({ handleSubmit, profile, error }) => {
    return <form onSubmit={handleSubmit}>
        {error && <div className = {classes.formSummaryError}>{error}</div>}
        <button>Save</button>
        <div>
            <div>
                <b>Full Name</b>:
            {createField("Full Name", "fullName", [], input)}
            </div>
            <div>
                <b>My proffesional skills</b>:
        {createField("My professional skills", "lookingForAJobDescription", [], TextArea)}
            </div>
            <div>
                <b>About me</b>:
        {createField("About me", "aboutMe", [], TextArea)}
            </div>
            <div>
                <b>Looking for a job</b>:
        {createField("", "lookingForAJob", [], input, { type: "checkbox" },)}
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

const ProfileDataReduxForm = reduxForm({ form: "ProfileData" })(ProfileData)

export default ProfileDataReduxForm