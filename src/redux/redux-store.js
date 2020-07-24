import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./usersReducer";
import { reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";
import { applyMiddleware, compose, createStore, combineReducers } from "redux";
import thunkMiddleware from 'redux-thunk'



let reducers = combineReducers({
    auth: authReducer,
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,
    usersPage: usersReducer,
    form: formReducer,
    app: appReducer

})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.__store__ = store;

export default store;