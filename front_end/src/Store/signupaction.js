import axios from "axios";
import { SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./signup.types";
export const signup = (creds) => async (dispatch) => {
    dispatch({ type: SIGNUP_LOADING })
    try {
        let res = await axios.post("https://cloneofeverhour.herokuapp.com/users/signup", creds)
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data });
        console.log(res.data)
         return res.data
        
    }
    catch (e) {
        dispatch({type:SIGNUP_ERROR})
    }
    
}