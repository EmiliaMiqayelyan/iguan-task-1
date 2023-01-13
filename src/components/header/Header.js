import React, { useRef } from "react";
import { TbSearch } from "react-icons/tb";
import { MdContentCopy } from "react-icons/md";
import { FiShare2 } from "react-icons/fi";
import { SlShareAlt } from "react-icons/sl";
import { IoIosArrowUp } from "react-icons/io";
import Button from 'react-bootstrap/Button';
import "./header.css";
import { useState, useEffect } from "react";

import useOutsideClick from "./useOutsideClick";


function Header() {

    const [toggle, setToggle] = useState(false);
    const [modal, setModal] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [navbarShow, setNavbarShow] = useState(false);

    // const btnRef= useRef()

    const controlNavbar = () => {
        if (typeof window !== 'undefined') { 
           if (window.scrollY < 500) {
            setNavbarShow(false)
           } else {
            setNavbarShow(true)
           }

          setLastScrollY(window.scrollY); 
        }
      };
    
      useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);

          return () => {
            window.removeEventListener('scroll', controlNavbar);
          };
        }
      }, [lastScrollY]);


    const handleClick = () => {
        setToggle(!toggle);
    };

    
    const ref = useRef();

    useOutsideClick(ref, () => {
        setModal(false)
    });

    return (
        <div className="wrapper">
            <div className="navbar" style={{ opacity: navbarShow ? '1' : '0' }}>
                <div className="navbar-part">
                    <h6>LAK Gallery</h6>
                    <span>by</span>
                        <img className="navbar-img" src='https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/1079787/63061260a58a9042023841.png' alt='' />
                        <span className="navbar-link">Tinloof</span>
                        <sup>INT</sup>
                </div>
                <div className="navbar-icon-part">
                        <MdContentCopy className="copyicon" />
                        <FiShare2 className="shareicon" />
                        <SlShareAlt className="shareicon" />
                </div>
            
            </div>
            <div className="header-main">
                <span className="header-text">W.</span>
                <div className="header-input-part">
                    <div className="icon-input">

                        <TbSearch className="searchicon" />
                        <input ref={ref} onClick={() => setModal(prev => !prev)} className="header-input" placeholder="Search websites, elements, courses..." />

                        <div style={{ display: modal ? 'block' : 'none' }} className="input-modal">
                            <div className="modal-part">
                                <span>featured in Awwwards</span>

                                <div className="img-part">
                                    <div>
                                        <img className="modal-img" src="https://assets.awwwards.com/assets/redesign/images/header/search/featured/1.jpg" alt="" />
                                        <p className="modal-img-p">Sites of the Day</p>
                                    </div>
                                    <div>
                                        <img className="modal-img" src="https://apptech.com.tr/wp-content/uploads/2019/11/types-of-websites.jpg" alt="" />
                                        <p className="modal-img-p">Websites</p>
                                    </div>
                                    <div>
                                        <img className="modal-img" src="http://www.designhill.com/design-blog/wp-content/uploads/2018/12/6_blog.jpg" alt="" />
                                        <p className="modal-img-p">Elements</p>
                                    </div>
                                    <div>
                                        <img className="modal-img" src="https://www.incimages.com/uploaded_files/image/1920x1080/getty_933383882_2000133420009280345_410292.jpg" alt="" />
                                        <p className="modal-img-p">Courses</p>
                                    </div>
                                </div>

                                <span>Best Tags</span>
                                <div className="modal-btn">
                                    <Button variant="outline-light">Animation</Button>
                                    <Button variant="outline-light">Portfolio</Button>
                                    <Button variant="outline-light">404 Pages</Button>
                                    <Button variant="outline-light">Clean</Button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="input-text">
                        <div>
                            <span style={{ fontSize: "11px" }}>IN</span>
                        </div>
                        <div>
                            <div className="input-select" >
                                <span>Inspiration</span>
                                <button className="arrow-btn" onClick={handleClick}><IoIosArrowUp style={{ marginLeft: "30px" }} /></button>
                            </div>
                            <div className="select-div" style={{ display: toggle ? 'block' : 'none' }} >
                                <h6 style={{ display: "inline" }}>Inspiration</h6>
                                <div>Inspiration</div>
                                <div className="left-part">Websites</div>
                                <div className="left-part">Elements</div>
                                <div className="left-part">Collections</div>
                                <div>Blog</div>
                                <div>Courses</div>
                                <div>Directory</div>
                            </div>
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
                <div style={{width: "100%"}}>
                    <h1 className="header-h1">LAK GALLERY</h1>
                </div>
                <div className="header-bottom-part">
                    <div className="header-bottom">
                        <img className="header-img" src='https://assets.awwwards.com/awards/media/cache/thumb_user_70/avatar/1079787/63061260a58a9042023841.png' alt='' />
                        <span className="header-link">Tinloof</span>
                        <sup>INT</sup>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;