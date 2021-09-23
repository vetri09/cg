import './register.css'
import { React, useState } from 'react'
import useSignupForm from '../../components/hooks/useSignupForm'
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import { Link } from "react-router-dom"

export default function Register() {
    // show password or not
    const [showPassword, setShowPassword] = useState(false);
    // useSignupForm
    const { values, handle_change, handle_submit, error } = useSignupForm({
        initialValues: {
        email: '',
        userName: '',
        password: ''
        }
    });
    return (
        <div className="register">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">
                        ConnectGlobe
                    </h3>
                    <span className="registerDesc">
                        Connect with the world around you on ConnectGlobe.
                    </span>
                    <Link to="/welcome">
                        <button className="greenBtn">Check us</button>
                    </Link>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <h3 className="registerHead">Register</h3>
                        {error && <p className="errorMessage">{error.messages}</p> }
                        <input type={"text"} placeholder={"Enter username"} name={"userName"} value={values.userName}
                        onChange={handle_change}
                        className="registerInput"/>
                        <input type={"email"} placeholder={"Enter email"} name={"email"} value={values.email}
                        onChange={handle_change}
                        className="registerInput"/>
                        <input type = {showPassword ? "text" : "password"}
                        placeholder={"Enter password"} name={"password"} value={values.password}
                        onChange={handle_change}
                        className="registerInput"/>
                        {
                            !showPassword
                            ? <VisibilityIcon onClick={()=>{setShowPassword(!showPassword)}}/>
                            : <VisibilityOffIcon onClick={()=>{setShowPassword(!showPassword)}}/>
                        }
                        <button onClick={handle_submit} className="greenBtn">Signup</button>
                        {/* <span className="registerGoogle">or</span> */}
                        {/* <button className="registerButton">Register using Google</button> */}
                        <span className="loginAccount">Already have a account?</span>
                        <Link to="/login">
                            <button className="greenBtn">Login</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
