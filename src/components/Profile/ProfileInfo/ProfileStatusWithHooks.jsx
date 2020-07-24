import React, { useState, useEffect } from 'react'
import Profile from '../Profile';

const ProfileStatusWithHooks = (props) => {
    let {status: propsStatus, updateStatus} = props
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(propsStatus)

    useEffect(() => {
        setStatus(status);
    }, [propsStatus]);

    const activatedEditMode = () => {
        setEditMode(true)
    }
    const deActivatedEditMode = () => {
        setEditMode(false)
        updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode && 
            <div>
                <span onDoubleClick = {activatedEditMode}>
                {status || '-----'}
                </span>
            </div>
            }
            {editMode && 
            <div>
                <input
                onChange = {onStatusChange} 
                autoFocus = {true} 
                onBlur = {deActivatedEditMode}
                value = {status} />
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks