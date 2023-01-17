import "./loginmodal.css";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Icon from "react-icons-kit";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { arrows_exclamation } from "react-icons-kit/linea/arrows_exclamation";
import { arrows_circle_check } from "react-icons-kit/linea/arrows_circle_check";


function LoginModal({ show, hideModal }) {
  const regex = /^[[a-z]{2}[0-9][0-9]+@[a-z]+\.[a-z]{3}$/i;

  const [hide, setHide] = useState(true);
  const [error, setError] = useState(true);
  const [lowerValidated, setLowerValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);
  const [lengthValidated, setLengthValidated] = useState(false);
  const { register, handleSubmit } = useForm();

  const handleChange = (value) => {
    const lower = new RegExp("(?=.*[a-z]{2})");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9]{2})");
    const special = new RegExp("(?=.*[!@#$%^&*])");
    const length = new RegExp("(?=.{8,})");

    lower.test(value) ? setLowerValidated(true) : setLowerValidated(false);
    upper.test(value) ? setUpperValidated(true) : setUpperValidated(false);
    number.test(value) ? setNumberValidated(true) : setNumberValidated(false);
    special.test(value)
      ? setSpecialValidated(true)
      : setSpecialValidated(false);
    length.test(value) ? setLengthValidated(true) : setLengthValidated(false);
  };

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <Modal
        show={show}
        size="xl"
        centered
      >
        <Modal.Body className="modal-inner">
          <div className="login-close-btn">
            <button className="close-btn" onClick={() => hideModal()}>
              <AiOutlineClose />
            </button>
          </div>
          <div className="modal-container">
            <div className="login-modal">
              <div className="login-left-part">
                <div className="login-left-part-1">
                  <h4>Welcome!</h4>
                </div>
                <div className="login-left-part-2">
                  <p className="login-left-part-2-p">W.</p>
                  <img
                    className="login-img"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Yi-1NOqJ1G2XCg87sYggM-Yo8Z0ZG_iupg&usqp=CAU"
                    alt=""
                  />
                </div>
                <div className="login-left-part-3">
                  <p>
                    Not a member yet?{" "}
                    <strong className="login-link">Register now</strong>
                  </p>
                </div>
              </div>
              <div className="login-right-part">
                <div>
                  <h3>Log in</h3>
                </div>
                <div className="login-input-part">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <label>EMAIL OR USERNAME</label>
                    <input
                      type="text"
                      placeholder="Email or Username"
                      className="login-input"
                      {...register("email", { required: true, pattern: regex })}
                      onChange={(e) => handleChange(e.target.value)}
                      onClick={() => setError(!error)}
                    />

                    {!error && (
                      <div className="validate">
                        <div
                          className={
                            lowerValidated ? "validated" : "not-validated"
                          }
                        >
                          {lowerValidated ? (
                            <span className="list-icon green">
                              <Icon icon={arrows_circle_check} />
                            </span>
                          ) : (
                            <span className="list-icon">
                              <Icon icon={arrows_exclamation} />
                            </span>
                          )}
                          At two lowercase letter
                        </div>
                        <div
                          className={
                            numberValidated ? "validated" : "not-validated"
                          }
                        >
                          {numberValidated ? (
                            <span className="list-icon green">
                              <Icon icon={arrows_circle_check} />
                            </span>
                          ) : (
                            <span className="list-icon">
                              <Icon icon={arrows_exclamation} />
                            </span>
                          )}
                          At two number
                        </div>
                        <div
                          className={
                            specialValidated ? "validated" : "not-validated"
                          }
                        >
                          {specialValidated ? (
                            <span className="list-icon green">
                              <Icon icon={arrows_circle_check} />
                            </span>
                          ) : (
                            <span className="list-icon">
                              <Icon icon={arrows_exclamation} />
                            </span>
                          )}
                          At @ special character
                        </div>
                        <div
                          className={
                            lengthValidated ? "validated" : "not-validated"
                          }
                        >
                          {lengthValidated ? (
                            <span className="list-icon green">
                              <Icon icon={arrows_circle_check} />
                            </span>
                          ) : (
                            <span className="list-icon">
                              <Icon icon={arrows_exclamation} />
                            </span>
                          )}
                          At least 8 characters
                        </div>
                      </div>
                    )}

                    <label>PASSWORD</label>
                    <input
                      type="text"
                      placeholder="Password"
                      className="login-input"
                      {...register("password", {
                        required: true,
                        minLength: 8,
                      })}
                      onChange={(e) => handleChange(e.target.value)}
                      onClick={() => setHide(!hide)}
                    />

                    {!hide && (
                      <div className="validate">
                        <div
                          className={
                            lowerValidated ? "validated" : "not-validated"
                          }
                        >
                          {lowerValidated ? (
                            <span className="list-icon green">
                              <Icon icon={arrows_circle_check} />
                            </span>
                          ) : (
                            <span className="list-icon">
                              <Icon icon={arrows_exclamation} />
                            </span>
                          )}
                          At two lowercase letter
                        </div>
                        <div
                          className={
                            upperValidated ? "validated" : "not-validated"
                          }
                        >
                          {upperValidated ? (
                            <span className="list-icon green">
                              <Icon icon={arrows_circle_check} />
                            </span>
                          ) : (
                            <span className="list-icon">
                              <Icon icon={arrows_exclamation} />
                            </span>
                          )}
                          At least one uppercase letter
                        </div>
                        <div
                          className={
                            numberValidated ? "validated" : "not-validated"
                          }
                        >
                          {numberValidated ? (
                            <span className="list-icon green">
                              <Icon icon={arrows_circle_check} />
                            </span>
                          ) : (
                            <span className="list-icon">
                              <Icon icon={arrows_exclamation} />
                            </span>
                          )}
                          At two number
                        </div>
                        <div
                          className={
                            lengthValidated ? "validated" : "not-validated"
                          }
                        >
                          {lengthValidated ? (
                            <span className="list-icon green">
                              <Icon icon={arrows_circle_check} />
                            </span>
                          ) : (
                            <span className="list-icon">
                              <Icon icon={arrows_exclamation} />
                            </span>
                          )}
                          At least 8 characters
                        </div>
                      </div>
                    )}

                    <div className="login-checkbox">
                      <input type="checkbox" />
                      <span>Keep me logged in</span>
                    </div>
                    <div>
                      <button
                        className="login-btn"
                        onSubmit={(data) => console.log(data)}
                      >
                        Log in now
                      </button>
                    </div>
                  </form>
                </div>
                <div>
                  <span className="login-password-text">
                    Forgot your password?
                  </span>
                </div>
                <div>
                  <span>Or sign in with</span>
                  <div className="login-sites">
                    <button className="login-sites-btn">
                      <FaGoogle className="login-sites-icon" />
                      Google
                    </button>
                    <button className="login-sites-btn">
                      <FaFacebookF className="login-sites-icon" />
                      Facebook
                    </button>
                    <button className="login-sites-btn">
                      <BsTwitter className="login-sites-icon" />
                      Twitter
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default LoginModal;
