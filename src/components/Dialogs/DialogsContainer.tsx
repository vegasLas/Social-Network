import { sendMessageCreator, initialStateType } from '../../redux/dialogs-reducer'
import { connect } from 'react-redux'
import Dialogs from './Dialogs'
import { AppReducersType } from '../../redux/redux-store'
const mapStateToProps = (state: AppReducersType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

type mstp = {
    dialogsPage: initialStateType
}
type mdtp = {
    sendMessageCreator: (newMessageBody: string) => void
}
export default connect<mstp, mdtp, unknown, AppReducersType>(mapStateToProps, { sendMessageCreator })(Dialogs)