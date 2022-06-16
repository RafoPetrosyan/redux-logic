import axios from 'axios';

const ApiClient = axios.create({
    baseURL: 'https://timeless.brainfors.am/api/',
    // withCredentials: true,
});

const handleApiRequest =(config)=> {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmJlZmI0NjE1NTZjMjU5MWJjNzViYSIsImlhdCI6MTY1NTIyNTU3NH0.ckPN4QF2Yv8buLMzcW1J4RjXcUAQ6JrQB3-sJsv7Ib4'
    // if(token){
    //     config.headers['x-authorization'] = token;
    // }
    if (!config.headers.authorization) {
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


//
// const baseURL = 'https://timeless.brainfors.am/api/';
//
// export const api = axios.create({
//     baseURL,
// });
//
// api.interceptors.request.use((config) => {
//     if (!config.headers.authorization) {
//         config.headers['x-authorization'] = Account.getToken();
//     }
//     return config;
// }, (e) => Promise.reject(e));
//
// api.interceptors.response.use((r) => r, (e) => {
//     if (e.response.status === 401) {
//         Account.delete();
//         window.location.href = '/';
//     }
//     return Promise.reject(e);
// });


// const client = axios.create({
//     baseURL: 'https://dev.mapllo.com/api/',
// });
//
// client.interceptors.request.use((config) => {
//
//     const accessToken = localStorage.getItem('accessToken')
//     if (accessToken) {
//         config.headers['x-authorization'] = accessToken
//     }
//     return config
// });
//
// client.interceptors.response.use(
//
//     (response) => response,
//     (error) => {
//         if (error.response && error.response.status === 401) {
//             store.dispatch(createAction(LOGAUTH_ADMIN));
//         }
//         if (error.response && error.response.data && error.response.status !== 401) {
//             console.log('!401');
//         }
//         return Promise.reject(error)
//     }
// );
//
// export default client;