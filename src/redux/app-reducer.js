import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {

    initialized: false,


}


const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
            default:
            return state;


    }

}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS, payload: {userId, email, login, isAuth}})
export const initialized = () => (dispatch) => {

}


export const initializedSuccess = () => (dispatch) => {


}

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    dispatch(initializedSuccess());
    Promise.all([promise])
        .then(()=> {
        dispatch(initializedSuccess());
    })
}



export default appReducer;

