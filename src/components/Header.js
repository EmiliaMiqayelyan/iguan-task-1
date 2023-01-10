import React from "react";
import { TbSearch } from "react-icons/tb";
import { MdContentCopy } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { SlShareAlt } from "react-icons/sl";
import Button from 'react-bootstrap/Button';
import "./style.css";

function Header() {
    return (
        <div>
            <div className="header-main">
                <span className="text">W.</span>
                    <input className="header-input" placeholder="Search websites, elements, courses..." />
                    <TbSearch className="searchicon" />
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

            <div className="titles">
                <p>Honorable Mention - Sep 22, 2022</p>
            </div>
            <div className="titles">
                <p className="title">LAK GALLERY</p>
            </div>
        </div>
    )
}

export default Header;