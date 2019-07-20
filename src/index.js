import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'http://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN'; // To add common headers across all requests
axios.defaults.headers.post['Content-Type'] = 'application/json'; // To add headers during the POST request.

// Request Interceptors
axios.interceptors.request.use(request => {
    // Intercept request e.g. Populating Authentication Headers
    console.log(request);
    return request;
}, error => {
    // Log Global error when request sending failed
    console.log(error);
    return Promise.reject(error);
});

// Response Interceptors
axios.interceptors.response.use(response => {
    // Intercept response
    console.log(response);
    return response;
}, error => {
    // Log Global error when response sending failed
    console.log(error);
    return Promise.reject(error);
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
