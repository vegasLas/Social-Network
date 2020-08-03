import React from 'react'
import { createField, TextArea } from '../../../common/Formcontrols/FormControl'
import { maxLengthCreator, required } from '../../../utils/validators'
import { reduxForm, InjectedFormProps } from 'redux-form'
import {NewMessageFormValuesType} from '../Dialogs'
let maxLength50 = maxLengthCreator(50)

type NewMessageFormValuesKeysType = Extract<keyof NewMessageFormValuesType, string>
type PropsType = {}
const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormValuesType, PropsType & PropsType>> = (props) => {
    return <form onSubmit = {props.handleSubmit}>
        <div>
            {createField<NewMessageFormValuesKeysType>('Enter your message', 'newMessageBody',
            [required, maxLength50], TextArea)}
        </div>
        <div><button>Send message</button></div>
    </form>
}

export default reduxForm<NewMessageFormValuesType>({form: 'dialog-add-message-form'})(AddMessageForm)