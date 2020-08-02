import React from 'react'
import { sendMessageCreator, initialStateType } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import Dialogs from './Dialogs'
import { AppReducersType } from '../../redux/redux-store'
import {messageType}  from '../../redux/dialogs-reducer'
const mapStateToProps = (state: AppReducersType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

type mstp = {
    dialogsPage: initialStateType
}
type mdtp = {
    sendMessageCreator: (newMessageBody: number) => messageType
}
export default connect(mapStateToProps, {sendMessageCreator})(Dialogs)