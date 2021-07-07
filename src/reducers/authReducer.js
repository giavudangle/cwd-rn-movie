import {LOGIN_FAIL,LOGIN_REQUEST,LOGIN_SUCCESS} from '../types/authActionTypes'

const initialState = {
  user:null,
  loading:false,
  error:''
}


export default authReducer = (state = initialState,action) => {
  switch(action.type){
    case LOGIN_REQUEST:
      return {...state,loading:true};
    case LOGIN_SUCCESS:
      return {...state,user:action.payload,loading:false}
    case LOGIN_FAIL:
      return {...state,error:action.payload.userInfo.message,loading:false}
    default : 
      return state;
  }
}