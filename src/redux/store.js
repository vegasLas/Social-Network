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
                {id: 1, name: 'V'},
                {id: 2, name: 'asda'},
                {id: 3, name: 'Doctor'},
                {id: 4, name: 'Skeptic'},
                {id: 5, name: 'Avanturist'},
                {id: 6, name: 'Kalygin'}
            ],
            messages: [
                {id: 1, message: 'Hi, how is your nothing '},
                {id: 2, message: 'Are you okey'},
                {id: 3, message: 'No `I\m` okay'},
                {id: 4, message: 'Well, how is your parents?'},
                {id: 5, message: 'I `don\t now, I `don\t chatting with their`'}
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