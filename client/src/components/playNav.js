import { Link } from "react-router-dom";
import logo_head from "../img/project/I-L MUSIC.svg";
import logo from "../img/project/iconmonstr-sound-wave-1 1.svg";
import '../css/play-nav.css';

const Play = () => {
    return (
        <div className="play-nav">
            <div className="logo">
                <img src={logo} alt="logo" />
                <img src={logo_head} alt="logo heading"/>
            </div>
            <div className="nav-headings">
                <ul>
                    <div className="first-half">
                        <li><Link to="/music">Home</Link></li>
                        <li><Link to="/music/myMusic">My Music</Link></li>
                        <li><Link to="/music/settings">Settings</Link></li>
                    </div>
                    <div className="search-bar">
                        <input type="text"/>
                        <li><Link to="/logout">Log Out</Link></li>
                    </div>
                </ul>
            </div>
        </div>
    );
}
 
export default Play;