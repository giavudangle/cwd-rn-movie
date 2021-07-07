

import movieApi from '../apis/movie.api'
import { FETCH_MOVIE_LIST_REJECT, FETCH_MOVIE_LIST_REQUEST, FETCH_MOVIE_LIST_SUCCESS,SEARCH_MOVIE_WITH_NAME_SUCCESS } from '../types/movieActionTypes'
import { API_CONFIG } from '../configs/api.config'

export const fetchMovieList = (page) => {
  return async dispatch => {
    dispatch({
      type: FETCH_MOVIE_LIST_REQUEST
    })
    try {
      const currentEndpoint = `/movie/now_playing?api_key=${API_CONFIG.API_KEY}&language=${API_CONFIG.LANG}&page=${page}`
      const response = await movieApi.get(currentEndpoint)
      dispatch({
        type: FETCH_MOVIE_LIST_SUCCESS,
        payload: response.data.results
      })
    } catch(e) {
      dispatch({
        type: FETCH_MOVIE_LIST_REJECT,
      })
    }
  }
}

export const searchMovieWithName = (query) => {
  const url = 
  `/search/movie?api_key=${API_CONFIG.API_KEY}&language=${API_CONFIG.LANG}&query=${query}&page=1&include_adult=true`
  return(dispatch) => {
    return(
      movieApi.get(url)
      .then(response => dispatch({
        type:SEARCH_MOVIE_WITH_NAME_SUCCESS,
        payload:response.data.results
      }))
      .catch(e => console.log(e))
      
    )
  }
}

