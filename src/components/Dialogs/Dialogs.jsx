import React, { useState } from 'react'
import { createField } from '../../common/Formcontrols/FormControl'
import AddMessageForm from './AddMessageForm/AddMessageForm'
import Message from './Items/Messages'
import DialogItem from './Items/DialogItem'
import classes from './Dialogs.module.css'


const Dialogs = (props) => {
    let state = props.dialogsPage 
    let dialogsElement = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />)
    let messagesElement = state.messages.map(m => <Message message={m.message} key={m.id} />)
    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
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