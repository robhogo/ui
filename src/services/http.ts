import axios from 'axios';

export default axios.create({
  baseURL: 'http://localhost:8080',
  params: {
    // API params go here
  }
});