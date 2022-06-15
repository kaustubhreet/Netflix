import * as types from "./actionTypes";
import {auth} from "../firebase.config";

const registerStart=()=>({
    type:types.REGISTER_START,
});

const registerFail=(error)=>({
    type:types.REGISTER_FAIL,
    payload:error
});

const registerSuccess=(user)=>({
    type:types.REGISTER_SUCCESS,
    payload:user
});


export const registerInitiate=(email,password,displayname)=>{
    return function(dispatch){
        dispatch(registerStart());
        auth.createUserWithEmailAndPassword(email,password).then(({user})=>{
            user.updateProfile({
                displayname
            })
            dispatch(registerSuccess(user))
        }).catch((error)=>dispatch(registerFail(error.message)));
    };
}