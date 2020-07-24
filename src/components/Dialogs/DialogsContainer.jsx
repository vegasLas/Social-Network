import React from 'react'
import { sendMessageCreator } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import Dialogs from './Dialogs'
const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs)