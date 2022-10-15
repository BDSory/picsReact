import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 
            'Client-ID un0Sc8tv29IuGhsO3Jmr8L82RxgpFpaX5XdxfXxY3IY'
      }
})