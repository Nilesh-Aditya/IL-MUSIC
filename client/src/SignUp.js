import LeafCall from "./components/leaf"
import Navbar from "./components/navbar"
import './css/signUp.css'

const SignUp = () => {

    return (
        <div className="signup">
            <div className="nav">
                <Navbar />
            </div>
            <LeafCall />

            <div className="content">
                <div className="quote">
                    <p>
                        <span>with the right music,</span>
                        <span>you either forget everything</span>
                        <span>or </span>
                        you remember everything
                    </p>
                </div>

                <form action="/signUp" method="post">
                    <div className="form-wrap">
                        <div className="name">
                            <label htmlFor="name">name:</label>
                            <input
                                name="name"
                                type="text"
                                required
                                placeholder="enter name...."
                                // value = ""
                            />
                        </div>
                    
                        <div className="email">
                            <label htmlFor="email">email:</label>
                            <input
                                name="email"
                                type="email"
                                required
                                placeholder="enter email...."
                                // value = ""
                            />
                        </div>
                    
                        <div className="password">
                            <label htmlFor="password">password:</label>
                            <input
                                name="password"
                                type="password"
                                required
                                placeholder="enter password...."
                                // value = ""
                            />
                        </div>
                        <div className="join-btn">
                            <button type="submit">JOIN NOW</button>
                        </div>
                    </div>
                </form>
            </div>

      </div>  
    );
}
 
export default SignUp;