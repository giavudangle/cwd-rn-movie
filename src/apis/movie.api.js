import axios from 'axios'
import {API_CONFIG} from '../configs/api.config'

export default axios.create({
  baseURL: API_CONFIG.BASE_URL
})