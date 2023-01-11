import React from "react";
import { TbSearch } from "react-icons/tb";
import { MdContentCopy } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { SlShareAlt } from "react-icons/sl";
import Button from 'react-bootstrap/Button';
import "./style.css";
import "../App.css";

function Header() {
    return (
        <div className="wrapper">
            <div className="header-main">
                <span className="header-text">W.</span>
                {/* <img className="header-img" src="https://i.pinimg.com/originals/01/d3/76/01d376f2d40ece5ad375fa245ff759d3.png" alt="" /> */}
                <div className="header-input-part">
                    <div>
                        <TbSearch className="searchicon" />
                        <input className="header-input" placeholder="Search websites, elements, courses..." />
                    </div>
                    <div className="input-text">
                        <div>
                            <span style={{ fontSize: "11px" }}>IN</span>
                        </div>
                        <div>
                            <select className="input-select">
                                <option>
                                    Inspiration
                                </option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="user-part">
                    <div className="user-form">
                        <span className="login">Log in</span>
                        <span className="signup">Sign Up</span>
                    </div>
                    <div className="buttons">
                        <Button variant="dark">Be Pro</Button>
                        <Button variant="outline-dark">Submit Website</Button>
                    </div>
                </div>
            </div>
            <div className="icons">
                <MdContentCopy className="copyicon" />
                <FiShare2 className="shareicon" />
                <SlShareAlt className="shareicon" />
            </div>

            <div className="header">
                <div>
                    <h6 className="header-h6">Honorable Mention - Sep 22, 2022</h6>
                </div>
                <div>
                    <h1 className="header-h1">LAK GALLERY</h1>
                </div>
                <div className="header-bottom-part">
                    <div className="header-bottom">
                        <img className="header-img" src='https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/1079787/63061260a58a9042023841.png' alt='' />
                        <h4 className="header-h4">Tinloof</h4>
                        <sup>INT</sup>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;