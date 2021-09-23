import './post.css'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CommentIcon from '@material-ui/icons/Comment';
// import {Users} from '../../dummyData'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { format } from 'timeago.js';

export default function Post({post}) {
    // const api_url = "http://localhost:3001";
    const api_url = "https://demooapi.herokuapp.com";
    const [like, setLike] = useState(post.likes.length);
    const [comment] = useState(post.comments.length);
    const [loggedinUserId] = useState(localStorage.getItem("userId"));
    const [isliked, setIsliked] = useState(false);
    const [user, setUser] = useState({});
    const [postOption, setPostOption] = useState(false);
    const [isEditOption, setIsEditOption] = useState(false);
    const [postContent, setPostContent] = useState("");
    const [imageBase64, setImageBase64] = useState("");
    const [removePost, setRemovePost] = useState(false);

    const handleContentChange = (e) => {
        setPostContent(e.target.value)
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
    const handleEditPost = async() => {
        if( imageBase64 === "" && postContent ) {
            try {
                await axios ({
                method: 'PUT',
                url: `${api_url}/posts/update/${post._id}`,
                data: {
                userId: loggedinUserId,
                content: postContent
                }
                }).then(res => {
                    // console.log(res);
                    window.location.reload(false);
                })
            }
            catch(err) {
                console.log(err);
            }
        }
        if( removePost || imageBase64 ) {
            try {
                await axios ({
                method: 'PUT',
                url: `${api_url}/posts/update/${post._id}`,
                data: {
                userId: loggedinUserId,
                content: postContent,
                image: imageBase64
                }
                }).then(res => {
                    // console.log(res);
                    window.location.reload(false);
                })
            }
            catch(err) {
                console.log(err);
            }
        }
    }
    const handlePostDelete = async() => {
        try {
            await axios ({
            method: 'DELETE',
            url: `${api_url}/posts/${post._id}`,
            data: {
            userId: loggedinUserId
            }
            }).then(res => {
                window.location.reload(false);
                console.log(res.data);
            })
        }
        catch(err) {
            console.log(err);
        }
    };
     const likeHandler = async() => {
        if(isliked) {
            setIsliked(false);
            setLike(like-1);
        }else{
            setIsliked(true);
            setLike(like+1);
        }
        try {
            await axios ({
            method: 'PUT',
            url: `${api_url}/posts/${post._id}/like`,
            data: {
            userId: loggedinUserId
            }
            }).then(res => {
                console.log(res.data)
            })
        }
        catch(err) {
            console.log(err);
        }
    };
     const fetchUser = async () => {
        const res = await axios.get(`${api_url}/user/${post.userId}`)
        setUser(res.data.other)
    };
    useEffect(()=>{
        if(post.likes.includes(loggedinUserId)){
            setIsliked(true);
        }
    setPostContent(post?.content);
    fetchUser();
    },[like])

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to={`/profile/${user.userName}`} style={{textDecoration:"none"}} className="postUserLink">
                            <img className="postProfileImg" src={ user.profilePicture || 'https://i.ibb.co/r0PgzHc/noAvatar.png' } alt="postProfileImg" />
                            <span className="postUserName">{user.userName}</span>
                        </Link>
                        <span className="postDate">{format(post.createdAt)}</span>
                    </div>
                    {
                    (user._id === loggedinUserId) &&
                    <div className="postTopRight" onClick={ ()=>{ postOption ? setPostOption(false) : setPostOption(true) } }>
                        <MoreHorizIcon className="horizonIcon"/>
                        { postOption && 
                        <div className="postOptionBar">
                            <p className="postOptionItem" onClick={()=>{setIsEditOption(true)}}>Edit Post</p>
                            <p className="postOptionItem" onClick={handlePostDelete}>Delete Post</p>
                        </div>
                        }
                    </div>
                    }
                </div>
                <div className="postCenter">
                    <p className="postText">{post?.content}</p>
                    <img className="postPostImg" src={post?.image}
                    alt=""
                    />
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <FavoriteBorderIcon className={`postBottomIcon  ${isliked ? `liked`: null}`} onClick={likeHandler}/>
                        <span className="postLikeCounter ">{like} likes</span>
                    </div>
                    <div className="postBottomRight">
                        <CommentIcon className="postBottomIcon"/>
                        <span className="postCommentCounter">{comment} comments</span>
                    </div>
                </div>
            </div>
            {
                isEditOption &&
                <div className="editPost">
                    <input type="text" className="editContentInput" value={postContent} onChange={handleContentChange}/>
                    <input type="file" className="editProfileInput" accept="image/*" onChange={handleImage}/>
                    
                    <span>Remove Post Image:
                        <input type="checkbox" className="removePost" 
                        onClick={()=>{removePost ? setRemovePost(false) : setRemovePost(true)}}/>
                    </span>
                    <button className="submitPostEditBtn" onClick={handleEditPost}>Submit</button>
                    <button className="canceltPostEditBtn" onClick={()=>{setIsEditOption(false);setPostContent(post?.content)}}>Cancel</button>
                </div>
            }
        </div>
    )
}
