import axios from 'axios';
import { FETCH_USER } from './types';
export const fetchUser = ()=> async dispatch=>{
    axios.get('/api/current_user')
        .then(res=>{
            console.log(res);
            dispatch({ type:FETCH_USER,payload:res.data})
        })

    };


