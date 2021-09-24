import './topbar.css';
import { useEffect, useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import CancelIcon from '@material-ui/icons/Cancel';
import { Link } from "react-router-dom";
import axios from 'axios';

export default function Topbar() {
    // const api_url = "http://localhost:3001";
    const api_url = "https://demooapi.herokuapp.com";
    const [search, setSearch] = useState("");
    const [users, setUsers] = useState([]);
    const [loggedinUserId] = useState(localStorage.getItem("userId"));
    const [loggedinUser, setLoggedinUser] = useState([])

    const searchUsers = async (search) => {
        if(search !== "") {
            await axios.get(`${api_url}/user/search/${search}`, 
            {
                headers: {
                "x-access-token": localStorage.getItem("token")
                }
            }).then(res=>{
            setUsers(res.data.users)
        })
        }
    }
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
    }
    const handlePageTransfer = () => {
        setSearch("");
    }
    const handleSearchUser = (e) => {
        setSearch(e.target.value);
    };
    const handleDeleteSearch = () => {
        setSearch("");
    }
    const getUser = async(req,res)=>{
        const user = await axios.get(`${api_url}/user/${loggedinUserId}`);
        setLoggedinUser(user.data.other);
    }
    useEffect(()=>{
        getUser();
        searchUsers(search);
    },[search])

    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span className="logo">ConnectGlobe</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <SearchIcon className="searchIcon" />
                    <input placeholder="Search" className="searchInput" type="text" onChange={handleSearchUser} value={search}/>
                    {
                        search && 
                        <div className="searchUsers">
                            {users.map(user=>(
                                <Link to={`/profile/${user.userName}`} style={{textDecoration:"none"}} className="searchUser" key={user._id} onClick={handlePageTransfer}>
                                    <img src={user.profilePicture||'https://i.ibb.co/r0PgzHc/noAvatar.png'}alt="searchUserProfile"className="searchUserProfile"/>
                                    <p>{user.userName}</p>
                                </Link>
                            ))}
                        </div>
                    }
                    {
                        search && <CancelIcon className="cancelIcon" onClick={handleDeleteSearch}/>
                    }
                </div>
                
            </div>
            <div className="topbarRight">
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Link to="/" style={{color:'var(--white)'}}>
                            <HomeIcon className="icon"/>
                        </Link>
                        {/* <span className="topbarIconBadge">1</span> */}
                    </div>
                </div>
                <Link to={`/profile/${loggedinUser.userName}`}>
                    <img src={loggedinUser.profilePicture || "https://i.ibb.co/r0PgzHc/noAvatar.png"} alt="userImg" className="userImg"/>
                </Link>
                 <Link to={`/login`} style={{textDecoration:'none'}} onClick={handleLogout}>
                    <p className="logoutButton">Logout</p>
                </Link>
            </div>
        </div>
    )
}
