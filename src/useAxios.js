import axios from 'axios'

const useAxios = ()=>{

    const baseURL = 'http://localhost:5000';

    const token = localStorage.getItem('user-token')

    const Axios = axios.create({
      baseURL: baseURL,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    })

    return Axios

}


export default useAxios;