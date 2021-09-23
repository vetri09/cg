import './welcome.css'
import Imageslider from '../../components/imageSlider/Imageslider'
import { SliderData } from '../../components/imageSlider/sliderData'
import { Link } from "react-router-dom"

export default function Welcome() {
    return (
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
    )
}
