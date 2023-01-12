import "./websites.css";
import Button from 'react-bootstrap/Button';


function Websites() {
    return (
        <div className="websites">
            <p style={{ margin: "0px 0px 80px", textAlign: "center", paddingTop: "40px" }}>This website has been created using...</p>
            <div className="sites">
                <div className="sites-btn">
                    <Button className="sites-btn-1" variant="outline-dark">Art & Illustration</Button>
                    <Button className="sites-btn-2" variant="outline-dark">E-Commerce</Button>
                    <Button className="sites-btn-3" variant="outline-dark">Web & Interactive</Button>
                    <Button className="sites-btn-4" variant="outline-dark">Clean</Button>
                    <Button className="sites-btn-5" variant="outline-dark">Photography</Button>
                    <Button className="sites-btn-6" variant="outline-dark">Typography</Button>
                    <Button className="lang-btn-1" variant="outline-dark">Web Fonts</Button>
                    <Button className="lang-btn-1" variant="outline-dark">React</Button>
                    <Button className="lang-btn-1" variant="outline-dark">Vercel</Button>
                    <Button className="lang-btn-1" variant="outline-dark">Figma</Button>
                    <Button className="lang-btn-1" variant="outline-dark">Next.js</Button>
                </div>
            </div>
        </div>
    )
}

export default Websites;