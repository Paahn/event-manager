import axios from 'axios';

// create an axios instance, which is all this app needs to use
const apiCLient = axios.create({
  baseUrl: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiCLient.get('/events')
  }
}