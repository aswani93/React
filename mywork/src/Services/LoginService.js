

import axios from 'axios';
import { CONST_URL} from '../api';

export const LoginService  = {
    checklogin
};

function checklogin(username,password){
    return axios.post(CONST_URL.API_URL+'login'+CONST_URL.API_KEY, 
    {username: username, 
    password: password })
    .then(res => {
        return res;
    })
    
}