import bigStar from './img/leaf.png';
import smallStar  from './img/stars/small_star.svg';
import Navbar from "./components/navbar";
import { useHistory } from 'react-router';

const Home = () => {

    const history = useHistory();
    
    const pushToSignIn = e => {
        history.push('/signUp');
    }

    return ( 
        <div className="Home">
            <div className="big-star">
                <img src={bigStar} alt="big-star"/>
            </div>
            <div className="small-star">
                <img src={smallStar} alt="small-star"/>
            </div>

            <nav className="home-nav">
                <Navbar />
            </nav>

            <main className="home-main">
                <div className="wrapper">
                    <h2>FEEL THE BEATS</h2>
                    <p>Stream over 10 songs with one click</p>
                    <button className="join-now" onClick = {pushToSignIn}>JOIN NOW</button>
                </div>
            </main>
      </div> 
    );
}
 
export default Home;