import './login.css'
import { React, useState } from 'react'
import useLoginForm from '../../components/hooks/useLoginForm'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link } from "react-router-dom"

export default function Login() {
    // show password or not
    const [showPassword, setShowPassword] = useState(false);
    // useLoginForm
    const { values, handle_change, handle_submit, error } = useLoginForm({
        initialValues: {
        email: '',
        password: ''
        }
    });
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">
                        ConnectGlobe
                    </h3>
                    <span className="loginDesc">
                        Connect with the world around you on ConnectGlobe.
                    </span>
                    <Link to="/welcome">
                        <button className="whiteBtn">Check us</button>
                    </Link>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <h3 className="loginHead">Login</h3>
                        {error && <p className="errorMessage">{error.messages}</p> }
                        <input 
                        type={"email"} placeholder={"Enter email"} name={"email"} value={values.email} onChange={handle_change}
                        className="loginInput"/>
                        <input
                        type = {showPassword ? "text" : "password"} placeholder={"Enter password"} name={"password"} value={values.password} 
                        onChange={handle_change}
                        className="loginInput"/>
                        {
                            !showPassword
                            ? <VisibilityIcon onClick={()=>{setShowPassword(!showPassword)}}/>
                            : <VisibilityOffIcon onClick={()=>{setShowPassword(!showPassword)}}/>
                        }
                        <button className="greenBtn" onClick={handle_submit}>Login</button>
                        {/* <span className="loginGoogle">or</span> */}
                        {/* <button className="loginButton">Login using Google</button> */}
                        <span className="loginNoAccount">Don't have an account?</span>
                        <Link to="/register">
                            <button className="greenBtn">Register</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
