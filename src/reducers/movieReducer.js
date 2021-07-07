import {FETCH_MOVIE_LIST_REJECT,FETCH_MOVIE_LIST_REQUEST,FETCH_MOVIE_LIST_SUCCESS,SEARCH_MOVIE_WITH_NAME_SUCCESS} from '../types/movieActionTypes'
import React from 'react'

const initialState = {
  movieList:[],
  loading:false,
  refreshing:false,
  error:'',
  searchMovies:[]
}


export default movieReducer = (state = initialState,action) => {
  switch(action.type){
    case FETCH_MOVIE_LIST_REQUEST:
      return {...state,loading:true};
    case FETCH_MOVIE_LIST_SUCCESS:    
      return {...state,loading:false,movieList: state.movieList.concat(action.payload)}
    case FETCH_MOVIE_LIST_REJECT:
      return {...state,error:'Error white fetching',loading:false}
    case SEARCH_MOVIE_WITH_NAME_SUCCESS: 
      return {...state,searchMovies:action.payload,loading:false}
    default : 
      return state;
  }
}