import './userinfo.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import SettingsIcon from '@material-ui/icons/Settings';
import CancelIcon from '@material-ui/icons/Cancel';
import { useHistory } from 'react-router-dom';

export default function Userinfo({userName}) {
    let history = useHistory();
    // const api_url = "http://localhost:3001";
    const api_url = "https://demooapi.herokuapp.com";
    const [user, setUser] = useState([])
    const [postsNumber, setPostsNumber] = useState(0);
    const [following, setFollowing] = useState([])
    const [followers, setFollowers] = useState([])
    const [loggedinUserId] = useState(localStorage.getItem("userId")); 
    const [loggedinUser, setLoggedinUser] = useState([])
    const [isEditUser, setIsEditUser] = useState(false);
    const [bio, setBio] = useState("");
    const [imageBase64, setImageBase64] = useState("");
    const [isFollowing, setIsFollowing] = useState(false);
    const [deleteWarn, setDeleteWarn] = useState(false);
    const [removeProfileImg, setRemoveProfileImg] = useState(false);

    const handleDeleteAccount = async() => {
        await axios.delete(`${api_url}/user/delete/${loggedinUserId}`)
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        history.push('/welcome');
    }
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
    const handleChange = (e) => {
        setBio(e.target.value)
    }
    const handleImage = (e) => {
        const reader = new FileReader(); 
        reader.onload = function(){
            let dataURL = reader.result;
            var Y = "base64,";
            var X = dataURL;
            var base64 = X.slice(X.indexOf(Y) + Y.length);
            setImageBase64(base64);
        };
        reader.readAsDataURL(e.target.files[0]);
    }
    const getUser = async(req,res)=>{
        const user = await axios.get(`${api_url}/user/${loggedinUserId}`)
        setLoggedinUser(user.data.other)
    }
    const handleCancelEditUser = () => {
        setDeleteWarn(false);
        setIsEditUser(false);
    }
    const handleEditUser = () => {
        setIsEditUser(true);
    }
    const handleUserDataSave = async() => {
        if( imageBase64 === "" && bio ) {
            try {
                await axios ({
                method: 'PUT',
                url: `${api_url}/user/update/${loggedinUserId}`,
                data: {
                _id: loggedinUserId,
                bio: bio
                },
                headers: ({ "x-access-token": localStorage.getItem("token") })
                }).then(res => {
                    window.location.reload(false);
                })
            }
            catch(err) {
                console.log(err);
            }
        }
        if( imageBase64 || removeProfileImg ) {
            try {
                await axios ({
                method: 'PUT',
                url: `${api_url}/user/update/${loggedinUserId}`,
                data: {
                _id: loggedinUserId,
                bio: bio,
                profilePicture: imageBase64
                },
                headers: ({ "x-access-token": localStorage.getItem("token") })
                }).then(res => {
                    window.location.reload(false);
                })
            }
            catch(err) {
                console.log(err);
            }
        }
    }
    const getUserPostList = async() => {
        console.log("running")
        await axios.get(`${api_url}/posts/user/userpost/${user._id}`)
        .then(res=>{
            setPostsNumber(res.data.length);
        });
    }
    useEffect(()=>{
        const fetchUser = async () => {
        getUser()
        console.log(userName)
        const res = 
        await axios.get(`${api_url}/user/profile/?userName=${userName}`)
        setUser(res.data.other)
        setFollowing(res.data.other.following)
        setFollowers(res.data.other.followers)
        setIsFollowing(res.data.other.followers.includes(loggedinUserId))
    };
    setBio(user.bio);
    fetchUser();
    getUserPostList();
    },[user.bio,userName,loggedinUserId])

    return (
        <div className="userinfo">
            <div className="userinfoWrapper">
                <img className="userinfoImg" src={user.profilePicture || 'https://i.ibb.co/r0PgzHc/noAvatar.png'} alt="userinfoImg" />
                <div className="userinfoDetails">
                    <p className="userinfoName">{user.userName}</p>
                    <div className="userinfoData">
                        <p><span className="userinfoDataNum">{postsNumber}</span> posts</p>
                        <p><span className="userinfoDataNum">{following.length}</span> following</p>
                        <p><span className="userinfoDataNum">{followers.length}</span> followers</p>
                    </div>
                    <p className="userinfoBio">
                        {user.bio}
                    </p>
                    {(userName === loggedinUser.userName) 
                    ? <button className="profileSettingsButton" onClick={handleEditUser}><SettingsIcon/> Settings</button>
                    : <button className={ isFollowing ? `followingButton`:`followButton` } onClick={handleFollow}>
                        { isFollowing ? "following" : "follow" }
                    </button>
                    }
                </div>
            </div>
            {
                (isEditUser) && 
                <div className="profileEditForm">
                    <button className="profileSettingsButton" onClick={handleCancelEditUser}><CancelIcon className="cancelIcon"/>Cancel</button>
                    <label htmlFor="bio">Bio: </label>
                    <textarea name="bio" id="bio" cols="70" rows="3" value={bio} onChange={handleChange} className="bioTextArea"></textarea><br />
                    <label htmlFor="profilePicture">Change Profile Picture: </label>
                    <input name="profilePicture" type="file" accept="image/*" onChange={handleImage} className="editProfileInput"/>
                    <p className="info">Profile Picture size has to be below 45KB</p>
                    <p>Delete Profile Picture:</p>
                    <input type="checkbox" onClick={()=>{removeProfileImg ? setRemoveProfileImg(false) : setRemoveProfileImg(true)}}/>
                    <button className="profileSettingsButton" onClick={handleUserDataSave}> Save</button>
                    <button className="profileDeleteButton"  onClick={()=>{setDeleteWarn(true)}}> Delete account</button>
                    {
                        deleteWarn ? 
                        (
                            <><p>are you sure?</p>
                            <button className="profileDeleteButton" onClick={handleDeleteAccount}>yes</button>
                            <button className="profileNoDeleteButton" onClick={()=>{setDeleteWarn(false)}}>no</button></>
                        )
                        : null
                    }
                </div>
            }
        </div>
    )
}
