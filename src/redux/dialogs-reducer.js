const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Pantiley'},
        {id: 2, name: 'Skrepka'},
        {id: 3, name: 'Felix'},
        {id: 4, name: 'Toro'},
        {id: 5, name: 'Viking'},
        {id: 6, name: 'Axiles'}
    ],
    messages: [
        {id: 1, message: 'Hi', isSituation: true},
        {id: 2, message: 'How is your nothing?0', isSituation: false},
        {id: 3, message: 'AWESOME', isSituation: true},
        {id: 4, message: 'WO WO', isSituation: false},
        {id: 5, message: 'What did you think?', isSituation: true}
    ]
};

const dialogsReducer = (state = initialState, action) => {
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

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})


export default dialogsReducer;