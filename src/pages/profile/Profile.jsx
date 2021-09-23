import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Userinfo from '../../components/userinfo/Userinfo'
import Feed from '../../components/feed/Feed'
import { useParams } from 'react-router'
// import { useState, useEffect } from 'react'
// import axios from 'axios'

export default function Profile() {
    const { userName } = useParams();
    // const api_url = "http://localhost:3001";
    // const [loggedinUserId] = useState(localStorage.getItem("userId"));
    // const getUserPostList = async() => {
    //     await axios.get(`${api_url}/posts/user/userpost/${loggedinUserId}`)
    //     .then(res=>{
    //         console.log(res.data.length);
    //     });
    // }
    // useEffect(()=>{
    //     getUserPostList();
    // })

    return (
        <div className="profileContainer">
             <Topbar />
             <Userinfo userName={userName}/>
             <div className="profilePost">
                 <Feed userName={userName}/>
             </div>
        </div>
    )
}
