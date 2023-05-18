import axios from "axios";

export const axiosAuth = () => {
    const token = localStorage.getItem('token');
  
    return axios.create({
      baseURL: `http://localhost:9000/api/friends`,
      headers: {
        authorization: token
      }
    });
  };