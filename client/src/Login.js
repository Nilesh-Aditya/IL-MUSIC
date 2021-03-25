import LeafCall from "./components/leaf"
import Navbar from "./components/navbar"
import './css/login.css'

const Login = () => {

    const quote = `with the right music ,
you either forget everything 
or 
you remember everything`;

    return (
        <div className="login">
            <div className="nav">
                <Navbar />
            </div>
            <LeafCall />

            <div className="quote">
                <p>{ quote }</p>
            </div>
      </div>  
    );
}
 
export default Login;