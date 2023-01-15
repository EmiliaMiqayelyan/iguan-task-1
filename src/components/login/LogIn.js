import "./login.css";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

function LogIn() {

    return (
        <div className="login-container">
            <div className="login-modal">
                <div className="login-left-part">
                    <div className="login-left-part-1">
                        <h4>Welcome!</h4>
                    </ div>
                    <div className="login-left-part-2">
                        <p className="login-left-part-2-p">W.</p>
                        <img className="login-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Yi-1NOqJ1G2XCg87sYggM-Yo8Z0ZG_iupg&usqp=CAU" alt="" />
                    </div>
                    <div className="login-left-part-3">
                        <p>Not a member yet? <strong className="login-link">Register now</strong></p>
                    </div>
                </div>
                <div className="login-right-part">
                    <div>
                        <h3>Log in</h3>
                    </div>
                    <div className="login-input-part">
                        <form>
                            <label>EMAIL OR USERNAME</label>
                            <input type="text" placeholder="Email or Username" className="login-input" />
                        </form>
                        <form>
                            <label>PASSWORD</label>
                            <input type="text" placeholder="Password" className="login-input" />
                        </form>
                    </div>
                    <div className="login-checkbox">
                        <input type="checkbox"/>
                        <span>Keep me logged in</span>
                    </div>
                    <div>
                        <button className="login-btn">Log in now</button>
                    </div>
                    <div>
                        <span className="login-password-text">Forgot your password?</span>
                    </div>
                    <div>
                        <span>Or sign in with</span>
                        <div className="login-sites">
                            <button className="login-sites-btn"><FaGoogle className="login-sites-icon" />Google</button>
                            <button className="login-sites-btn"><FaFacebookF className="login-sites-icon" />Facebook</button>
                            <button className="login-sites-btn"><BsTwitter className="login-sites-icon" />Twitter</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="login-close-btn">
                <button className="close-btn"><AiOutlineClose /></button>
            </div>
        </div>
    )
}

export default LogIn;