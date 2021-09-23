import './feed.css'
import Share from '../share/Share'
import Post from '../post/Post'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Feed({userName}) {
    // const api_url = "http://localhost:3001";
    const api_url = "https://demooapi.herokuapp.com";
    const [posts, setPosts] = useState([]);
    const [loggedinUserId] = useState(localStorage.getItem("userId")); 
    const [loggedinUser, setLoggedinUser] = useState([])

    const getUser = async(req,res)=>{
        const user = await axios.get(`${api_url}/user/${loggedinUserId}`)
        setLoggedinUser(user.data.other)
    }

    useEffect(()=>{
        getUser()
        const fetchPosts = async () => { 
        userName
        ? await axios.get(`${api_url}/posts/userpost/${userName}`,
        {
             headers: {
                "x-access-token": localStorage.getItem("token")
            }
        }).then(res=>{
            setPosts(res.data);
        })
        : await axios.get(`${api_url}/posts/feed/${loggedinUserId}`,
        {
            headers: {
                "x-access-token": localStorage.getItem("token")
            }
        }).then(res=>{
            setPosts(res.data);
        })
    };
    fetchPosts();
    },[loggedinUserId,userName])

    return (
        <div className="feed">
            <div className="feedWrapper">
                {((!userName) || (userName ===loggedinUser.userName)) && 
                    <Share loggedinUserId={loggedinUserId}/>
                }
                {
                    posts.map(res=>(
                        <Post key={res._id} post={res} user={loggedinUser}/>
                    ))
                }
            </div>
        </div>
    )
}
