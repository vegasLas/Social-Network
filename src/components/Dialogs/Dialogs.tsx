import React, { useState } from 'react'
import { createField } from '../../common/Formcontrols/FormControl'
import AddMessageForm from './AddMessageForm/AddMessageForm'
import Message from './Items/Messages'
import DialogItem from './Items/DialogItem'
import classes from './Dialogs.module.css'
import { initialStateType, messageType } from '../../redux/dialogs-reducer'

type PropsType = {
    dialogsPage: initialStateType
    sendMessageCreator: (newMessageBody: number) => messageType
}

const Dialogs: React.FC<PropsType> = (props) => {
    let state = props.dialogsPage 
    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} />)
    let addNewMessage = (values: any) => {
        props.sendMessageCreator(values.newMessageBody)
    }


    return <div>
        <div className={classes.dialogsItems}>
            {dialogsElement}
        </div>
        <div className={classes.messages}>
            <div>{messagesElement}</div>
        </div>
        <AddMessageForm onSubmit={addNewMessage} />
    </div>
}

export default Dialogs