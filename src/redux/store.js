import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 3, message: 'Blabla', likesCount: 11},
                {id: 4, message: 'Dada', likesCount: 11}
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Stalin'},
                {id: 2, name: 'Ejov'},
                {id: 3, name: 'Beriya'},
                {id: 4, name: 'Molotov'},
                {id: 5, name: 'Xrywev'},
                {id: 6, name: 'Malenkov'}
            ],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your nothing?'},
                {id: 3, message: 'AWESOME'},
                {id: 4, message: 'WO WO'},
                {id: 5, message: 'What did you think?'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        debugger;
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}


export default store;
window.store = store;
// store - OOP