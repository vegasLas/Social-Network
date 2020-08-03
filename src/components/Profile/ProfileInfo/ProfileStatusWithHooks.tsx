import React, { useState, useEffect } from 'react'
type PropsType = {
    status: string
    updateStatus: (status: string) => void
}
const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(status);
    }, [props.status]);

    const activatedEditMode = () => {
        setEditMode(true)
    }
    const deActivatedEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e: any) => {
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