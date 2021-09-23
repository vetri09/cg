import axios from 'axios';

// const api_url = "http://localhost:3001";
const api_url = "https://demooapi.herokuapp.com";

// verify user email
export const verifyuser = async (userName,email) => {
    await axios.post(`${api_url}/auth/verify`,{userName,email})
    .then(result=>console.log(result))
    .catch(error=>console.log(error))
}