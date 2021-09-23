import axios from 'axios';

// const api_url = "http://localhost:3001";
const api_url = "https://demooapi.herokuapp.com";

// verify user email
export const verifyuser = async (userName,email) => {
    try {
        await axios ({
        method: 'POST',
        url: `${api_url}/auth/verify`,
        data: {
        userName: userName,
        email: email
        },
        headers: new Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        })
        }).then(res => {
            console.log(res);
        })
     }
     catch(err) {
          console.log(err);
     }
    // await axios.post(`${api_url}/auth/verify`,{userName,email})
    // headers: new Headers({ 'Content-Type': 'application/json' })
    // res.setHeader('Access-Control-Allow-Origin', '*')
    // .then(result=>console.log(result))
}