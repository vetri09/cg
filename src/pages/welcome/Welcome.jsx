import './welcome.css'
import Imageslider from '../../components/imageSlider/Imageslider'
import { SliderData } from '../../components/imageSlider/sliderData'
import { Link } from "react-router-dom"

export default function Welcome() {
    return (
        <>
        <div className="welcome">
            <div className="welcomeLeft">
                <h1 className="welcomeHead">Welcome to ConnectGlobe!</h1>
                <div className="welcomeConnect">
                    <p className="welcomeText">New here?</p>
                     <Link to="/register">
                            <button className="whiteBtn">Register</button>
                    </Link>
                    <p className="welcomeText">have a account?</p>
                    <Link to="/login">
                        <button className="whiteBtn">Login</button>
                    </Link>
                </div>
            </div>
            <div className="welcomeRight">
                <Imageslider slides={SliderData}/>
            </div>
        </div>
        <div className="welcomeBottom">
            <ul className="welcomeLink">
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Help</li>
                <li>API</li>
                <li>Privacy</li>
                <li>Terms</li>
                <li>Top Accounts</li>
                <li>Hashtags</li>
                <li>Locations</li>
            </ul>
            <div className="welcomeEnd">
                <p>Made with <span className="pop">Love</span> from India</p>
                <p>© 2021 ConnectGlobe</p>
            </div>
        </div>
        </>
    )
}
