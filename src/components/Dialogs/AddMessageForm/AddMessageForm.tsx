import React from 'react'
import { createField, TextArea } from '../../../common/Formcontrols/FormControl'
import { maxLengthCreator, required } from '../../../utils/validators'
import { reduxForm, InjectedFormProps } from 'redux-form'
let maxLength50 = maxLengthCreator(50)


const AddMessageForm: React.FC<InjectedFormProps> = (props) => {
    return <form onSubmit = {props.handleSubmit}>
        <div>
            {createField('Enter your message', 'newMessageBody',
            [required, maxLength50], TextArea)}
        </div>
        <div><button>Send message</button></div>
    </form>
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm)