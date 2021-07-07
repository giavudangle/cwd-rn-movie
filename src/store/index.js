import {createStore,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import { composeWithDevTools } from "redux-devtools-extension";


export default store = createStore(reducers,composeWithDevTools(applyMiddleware(thunk)))