import axios from 'axios';
import { useState } from 'react';
import {useHistory} from 'react-router-dom';
export default function AuthUser(){
    const history = useHistory();
    const getToken = () => {
        const tokenString = localStorage.getItem('token');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }
    const getUser = () => {
        const userString = localStorage.getItem('user');
        const user_detail = JSON.parse(userString);
        return user_detail;
    }

    const [token,setToken] = useState(getToken());
    const [user,setUser] = useState(getUser());

    const saveToken = (user,token) =>{
        if(user == "admin"){
            localStorage.setItem('token',JSON.stringify(token));
            localStorage.setItem('user',JSON.stringify(user));
            history.push('/admin/home');
            history.go();
        }
        else{
            localStorage.setItem('token',JSON.stringify(token));
            localStorage.setItem('user',JSON.stringify(user));

            setUser(user);

            if(user.role_text == 'guru'){
                history.push('/guru/kursus/diterbitkan');
                history.go();
            }
            else{
                history.push(`/siswa/kursus`);
                history.go();
            }
        }

    }

    const logout = () => {
        localStorage.clear();
        history.push('/');
        history.go();
    }

    const http = axios.create({
        baseURL:"http://localhost:8000/api",
        headers:{
            "Content-type":"application/json"
        }
    });
    return {
        setToken:saveToken,
        token,
        user,
        getToken,
        http,
        logout
    }
}
