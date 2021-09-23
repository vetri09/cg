import './rightbar.css'
import Usershow from '../usershow/Usershow'
import { useEffect, useState } from 'react'
// import {Users} from '../../dummyData'
import axios from 'axios';

export default function Rightbar() {
    // const api_url = "http://localhost:3001";
    const api_url = "https://demooapi.herokuapp.com";
    const [users, setUsers] = useState([]);
    const [loggedinUserId] = useState(localStorage.getItem("userId")); 

    useEffect(()=>{
        const fetchNotFollowing = async (userId) => {
        await axios.get(`${api_url}/user/notfollowing/${userId}`, 
        {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        }).then(res=>{
        setUsers(res.data);
        })
    };
    fetchNotFollowing(loggedinUserId);
    },[loggedinUserId])

    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="rightbarTop">
                    <h3>Suggestions for you</h3>
                </div>
                <div className="rightbarBottom">
                    {
                        users.map(res=>(    
                            <Usershow key={res._id} user={res}/>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
