import axios from 'axios';

const ApiClient = axios.create({
    baseURL: 'https://toolkit.brainfors.am/api/',
    withCredentials: true,
});

const handleApiRequest =(config)=> {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODUsImlhdCI6MTY1NTA5OTIzOH0.FybMgKVJ_QlEYt64e96J3umYOmIYz38dGMGsHjJx6Ro'
    if(token){
        config.headers['x-authorization'] = token;
    }
    return config;
}

const handleApiSuccess = (request) => {
    return request
}

const handleApiError = async (error) => {
    const code = error.response?.status;
    if (+code === 401) {
        console.log('401')
        // localStorage.removeItem('token')
        // history.push('/')
    }
    return Promise.reject(error)
};



ApiClient.interceptors.request.use(handleApiRequest);
ApiClient.interceptors.response.use(handleApiSuccess, handleApiError);

export default ApiClient;
