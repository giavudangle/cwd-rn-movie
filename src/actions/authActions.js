import firebase from 'firebase';
import {LOGIN_REQUEST,LOGIN_SUCCESS,LOGIN_FAIL} from '../types/authActionTypes'

export const loginWithEmailPassword = (email,password) => {
  return async dispatch => {
    dispatch({type:LOGIN_REQUEST})
    try {
      const user = await 
        firebase.auth().signInWithEmailAndPassword(email,password);
      dispatch({
        type:LOGIN_SUCCESS,
        payload:user
      });
    }
    catch(e){
      dispatch({
        type:LOGIN_FAIL,
        payload:e
      })
    }
  }
}

export const registerWithEmailPassword = (email,password) => {
  return async dispatch => {
    dispatch({type:LOGIN_REQUEST})
    try {
      const user =  await 
        firebase.auth().createUserWithEmailAndPassword(email,password);
      dispatch({
        type:LOGIN_SUCCESS,
        payload:user
      });
    }
    catch(e){
      console.log(e);
      dispatch({
        type:LOGIN_FAIL,
        payload:e
      })
    }
  }
}


export const logout = () => {
  return dispatch => {
    firebase.auth().signOut();
  }
}
