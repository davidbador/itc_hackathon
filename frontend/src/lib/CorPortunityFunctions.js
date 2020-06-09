import axios from 'axios';

const baseURL = 'http://127.0.0.1:5000'

export const register = newUser => {
    return axios.post(`${baseURL}/investors/register`, {
        first_name: newUser.firstName,
        last_name: newUser.lastName,
        email: newUser.email,
        password: newUser.password
    }).then(res => {
        console.log("Registered")
    })
}

export const login = user => {
    return axios.post(`${baseURL}/investors/login`, {
        email: user.email,
        password: user.password
    }).then(res => {
        localStorage.setItem('usertoken', res.data.token)
        return res.data.token
    }).catch(err => {
        console.log(err)
    })
}

export const businesses = () => {
    return axios.get(`${baseURL}/businesses`)
}