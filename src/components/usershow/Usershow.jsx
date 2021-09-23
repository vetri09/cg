import './usershow.css'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export default function Usershow({user}) {
    // const api_url = "http://localhost:3001";
    const api_url = "https://demooapi.herokuapp.com";
    const [loggedinUserId] = useState(localStorage.getItem("userId")); 
    const [isFollowing, setIsFollowing] = useState(false);

    const handleFollow = async() => {
        if(isFollowing) {
            setIsFollowing(false);
        }
        else {
            setIsFollowing(true);
        }
        try {
            await axios ({
            method: 'PUT',
            url: `${api_url}/user/${user._id}/follow`,
            data: {
            _id: loggedinUserId
            }
            }).then(res => {
                console.log(res.data)
            })
        }
        catch(err) {
            console.log(err);
        }
    }
    return (
        <div className="usershow">
            <Link to={`/profile/${user.userName}`} style={{textDecoration:"none"}} className="postUserLink">
                <div className="userProfile">
                <img className="userShowImg" src={ user.profilePicture || 'https://i.ibb.co/r0PgzHc/noAvatar.png' } alt="userShowImg" />
                <span className="userShowName">{user.userName}</span>
                </div>
            </Link>
            <span className="userShowFollow" onClick={handleFollow}>
                { isFollowing ? "Following" : "Follow" }
            </span>
        </div>
    )
}
