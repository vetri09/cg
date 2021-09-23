import './home.css'
import Topbar from '../../components/topbar/Topbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Home() {
    return (
        <>
            <Topbar />
            <div className="homeContainer">
                <Feed />
                <Rightbar />
            </div>
        </>
    )
}
