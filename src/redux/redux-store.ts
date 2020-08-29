import authReducer from "./auth-reducer";
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./usersReducer";
import { reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";
import { applyMiddleware, compose, createStore, combineReducers, Action } from "redux";
import thunkMiddleware, { ThunkAction } from 'redux-thunk'



let reducers = combineReducers({
    auth: authReducer,
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebarPage: sidebarReducer,    
    usersPage: usersReducer,
    form: formReducer,
    app: appReducer

})

type PropertiesType<T> = T extends{[key:string]: infer U} ? U : never

export type InferActionsTypies<T extends{[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesType<T>>


type ReducersType = typeof reducers
export type AppReducersType = ReturnType<ReducersType>

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppReducersType, unknown, A>
//@ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
//@ts-ignore
window.__store__ = store;

export default store;