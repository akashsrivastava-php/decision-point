import axios from 'axios'

const baseUrl = 'https://jsonplaceholder.typicode.com'

export const getUersList = () => {
    return axios.get(`${baseUrl}/users`)
            .then((res)=>{
                return res
            })
            .catch((err)=>{
                console.log(err)
            })
}

export const getUersPost = (id) => {
    return axios.get(`${baseUrl}/posts?userId=${id}`)
            .then((res)=>{
                return res
            })
            .catch((err)=>{
                console.log(err)
            })
}