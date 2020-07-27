import { getAuthUserData } from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

type initialStateType = {
    initialized: boolean
}

let initialState = {
    initialized: false
};

const appReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}


type initializedSuccessType = {
    type: typeof INITIALIZED_SUCCESS
}
export const  initializedSuccess = (): initializedSuccessType => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
    .then(() => {
        dispatch(initializedSuccess())
    })
}

export default appReducer;