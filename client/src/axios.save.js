import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://chatbot-1c4f2.firebaseio.com/'
});

export default instance;