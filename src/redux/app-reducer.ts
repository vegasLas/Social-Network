import { InferActionsTypies, BaseThunkType } from './redux-store';
import { getAuthUserData } from "./auth-reducer";

type initialStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
};
export type ThunkType = BaseThunkType<ActionsType>

const appReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}
export type ActionsType = InferActionsTypies<typeof Actions>
export const Actions = {
    initializedSuccess: () => ({ type: "INITIALIZED_SUCCESS" } as const)
}
export const initializeApp = (): ThunkType =>  async (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(Actions.initializedSuccess())
        })
}

export default appReducer;