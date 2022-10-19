import React from "react";
import "../../styles/ForgotPassword/ForgotPassword.css";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <>
      <div className="admi-login-wrp">
        <div className="admin-row">
          <Container>
            <Row>
              <Col md={6}>
                <div className="admin-log-img">
                  <img src="images/becoming-doctor.jpg" alt="doc" />
                </div>
              </Col>
              <Col md={6}>
                <div className="admin-log-form">
                  <h4 className="forgot">FORGOT YOUR PASSWORD?</h4>
                  <hr />
                  <form action="">
                    <p className="reset-mesage">
                      To reset your password, enter the registered e-mail <br />{" "}
                      adddress and we will send you password reset <br />{" "}
                      instructions on your e-mail!
                    </p>
                    <hr />
                    <div className="email">
                      <input type="email" placeholder="E-Mail" required/>
                    </div>
                    <div className="forgot-submit">
                      <button>RESET PASSWORD</button>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
