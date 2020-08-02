import React, { useState, useEffect } from 'react'
type PropsType = {
    status: string
    propsStatus: string
    updateStatus: (status: string) => void
}
const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {
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