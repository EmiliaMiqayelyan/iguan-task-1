import "./footer.css";
import "../global.css";
import { FaRegCalendarMinus } from "react-icons/fa";



function Footer() {
    return (
        <div className="footer">
            <span className="footer-text">W.</span>
            <div className="footer-info">
                <div className="footer-part">
                    <div className="footer-part-1">
                        <div className="footer-block">
                            <p>Websites</p>
                            <p>Collections</p>
                        </div>
                        <div className="footer-block">
                            <p>Academy</p>
                            <p>Jobs</p>
                        </div>
                    </div>
                    <div className="footer-part-2">
                        <div className="footer-block">
                            <p>Directory</p>
                            <p>Conferences</p>
                        </div>
                        <div className="footer-block">
                            <p>FAQs</p>
                            <p>About Us</p>
                            <p>Contact Us</p>
                        </div>
                        <div className="footer-block-hidden"></div>

                    </div>
                </div>
                <div className="next-part">
                    <span className="next-part-span">Next Conferences</span>
                    <FaRegCalendarMinus />
                    <span className="footer-link">Amsterdam</span> and <span className="footer-link">Toronto</span>
                </div>
            </div>
            <hr className="footer-hr" />
            <div className="footer-bottom">
                <div className="footer-bottom-part-1">
                    <span>Cookies Policy</span>
                    <span>Legal Terms</span>
                    <span>Privacy Policy</span>
                </div>
                <div className="footer-bottom-part-2">
                    <strong>Connect:</strong>
                    <span>Instagram</span>
                    <span>LinkedIn</span>
                    <span>Twitter</span>
                    <span>Facebook</span>
                    <span>YouTube</span>
                    <span>TikTok</span>
                    <span>Pinterest</span>
                </div>
            </div>
        </div>
    )
}
export default Footer;
