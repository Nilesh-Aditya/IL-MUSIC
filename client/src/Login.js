import LeafCall from "./components/leaf"
import Navbar from "./components/navbar"
import './css/login.css'

const Login = () => {

    const quote =  `with the right music ,
                    you either forget everything or 
                    you remember everything`;

    return (
        <div className="login">
            <div className="nav">
                <Navbar />
            </div>

            <div className="log-bg">
                <form action="/login" method="post">
                    <div className="email-login">
                        <label htmlFor="email">Email:</label>
                        <input
                            name="email"
                            type="text"
                            required
                            placeholder="enter email..."
                            // value=""
                        />
                    </div>
                    <div className="pass-login">
                        <label htmlFor="password">Password:</label>
                        <input
                            name="password"
                            type="text"
                            required
                            placeholder="enter password..."
                            // value=""
                        />
                    </div>
                    <div className="log-btn">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
      </div>  
    );
}
 
export default Login;