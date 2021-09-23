import './share.css'
import { useEffect, useState } from 'react'
import axios from 'axios';

export default function Share({ loggedinUserId }) {
    // const api_url = "http://localhost:3001";
    const api_url = "https://demooapi.herokuapp.com";
    const [content, setContent] = useState("");
    const [imageBase64, setImageBase64] = useState("");
    const [postPicexist, setPostPicexist] = useState(false);
    const [loggedinUser, setLoggedinUser] = useState([])

    const handleContent = (e) => {
        setContent(e.target.value);
    }
    const handleImage = (e) => {
        const reader = new FileReader(); 
        reader.onload = function(){
            let dataURL = reader.result;
            var Y = "base64,";
            var X = dataURL;
            var base64 = X.slice(X.indexOf(Y) + Y.length);
            setImageBase64(base64);
            setPostPicexist(true);
            let output = document.getElementById('output');
            output.src = dataURL;
        };
        reader.readAsDataURL(e.target.files[0]);
    }
    const handlePost = async () => {
        if( content || imageBase64 ) {
            try {
                await axios ({
                method: 'POST',
                url: `${api_url}/posts/${loggedinUserId}`,
                data: {
                userId: loggedinUserId,
                content: content,
                image: imageBase64
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
    const getUser = async (req,res) => {
        const user = await axios.get(`${api_url}/user/${loggedinUserId}`)
        setLoggedinUser(user.data.other)
    }
    useEffect(()=>{
        getUser()
    },[])

    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={loggedinUser.profilePicture || "https://i.ibb.co/r0PgzHc/noAvatar.png"} alt="userProfileImg" />
                    <input type="text" placeholder="What's happening?" className="shareInput" onChange={handleContent} value={content}/>
                </div>
                <hr className="shareHr"/>
                { postPicexist && <img id='output' alt="" className="shareImgPreview"/> }
                <div className="shareBottom">
                    <div className="shareOption">
                        <input type="file" className="sharePictureInput"  id="file" onChange={handleImage} accept="image/*" />
                    </div>
                    <span className="info">Max size 45KB</span>
                    <div className="shareButton">
                        <button type="button" onClick={handlePost}>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
