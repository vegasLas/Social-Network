const SEND_MESSAGE = 'SEND_MESSAGE';

export type dialogsType  = {
    id: number
    name: String
}
export type messageType  = {
    id: number
    message: string
    isSituation: boolean
}


let initialState = {
    dialogs: [
        {id: 1, name: 'Pantiley'},
        {id: 2, name: 'Skrepka'},
        {id: 3, name: 'Felix'},
        {id: 4, name: 'Toro'},
        {id: 5, name: 'Viking'},
        {id: 6, name: 'Axiles'}
    ]as Array<dialogsType>,
    messages: [
        {id: 1, message: 'Hi', isSituation: true},
        {id: 2, message: 'How is your nothing?0', isSituation: false},
        {id: 3, message: 'AWESOME', isSituation: true},
        {id: 4, message: 'WO WO', isSituation: false},
        {id: 5, message: 'What did you think?', isSituation: true}
    ]as Array<messageType>
};

export type initialStateType = typeof initialState
type ActionsType = sendMessageCreatorType
const dialogsReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages:
                [...state.messages, {id: 6, message: body, isSituation: false}]
            };
        default:
            return state;
    }
}
type sendMessageCreatorType = {type: typeof SEND_MESSAGE, newMessageBody: string}
export const sendMessageCreator = (newMessageBody: string): sendMessageCreatorType => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;