import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {
        Accept: 'Application/json',
        'Content-Type': 'application/json'
    }
  });

  export default {
      getEvents() {
          return instance.get('events')
      },
      getEvent(id) {
          return  instance.get('events/' +id )
      }
  }