import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiOutlinePlus } from 'react-icons/ai';
import './Footer.css';
function Footer() {
    let iconStyles = { color: "black", fontSize: "1.5em" }
    const footer = {
        language: [
            "English (UK)", "Tiếng Việt", "中文(台灣)", "한국어", "日本語", "Français (France)", "ภาษาไทย", "Español", "Português (Brasil)",
            "Português (Brasil)", "Deutsch", "Italiano"

        ]
        
    }
    return (
        <Container className="App-pd">
            <div className="App-footer">
                <Row>
                    <Col className="pageFooter">{footer.language[0]}</Col>
                    <Col>{footer.language[1]}</Col>
                    <Col>{footer.language[2]}</Col>
                    <Col>{footer.language[3]}</Col>
                    <Col>{footer.language[4]}</Col>
                    <Col>{footer.language[5]}</Col>
                    <Col>{footer.language[6]}</Col>
                    <Col>{footer.language[7]}</Col>
                    <Col>{footer.language[8]}</Col>
                    <Col>{footer.language[9]}</Col>
                    <Col>{footer.language[10]}</Col>
                    <Col>
                        <div><button className="click" style={{ }}><AiOutlinePlus style={iconStyles} /></button></div>
                    </Col>
                </Row>
                <Row>
                    <div className="contentCurve"></div>
                </Row>
                <Row>
                    <Col>Sign Up</Col>
                    <Col>Log in</Col>
                    <Col>Messenger</Col>
                    <Col>Facebook Lite</Col>
                    <Col>Watch</Col>
                    <Col>Places</Col>
                    <Col>Games</Col>
                    <Col>Marketplace</Col>
                    <Col>Meta Pay</Col>
                    <Col>Oculus</Col>
                    <Col>Portal</Col>
                    <Col>Instagram</Col>
                    <Col>Developers</Col>
                </Row>
                <Row>
                    <Col>Fundraisers</Col>
                    <Col>Services</Col>
                    <Col>Voting Information</Col>
                    <Col>Privacy Policy</Col>
                    <Col>Privacy Centre</Col>
                    <Col>Groups</Col>
                    <Col>About</Col>
                    <Col>Create ad</Col>
                    <Col>Create Page</Col>
                    <Col>Developers</Col>
                </Row>
                <Row>
                    <Col>Careers</Col>
                    <Col>Cookies</Col>
                    <Col>AdChoices</Col>
                    <Col>Terms</Col>
                    <Col>Help</Col>
                    <Col>Contact uploading and non-users</Col>
                </Row>

                <Row>
                    <Col className="pageFooter mg">
                        <p>Meta
                            &copy;{new Date().getFullYear()}
                        </p>
                    </Col>
                </Row>

            </div>

        </Container>
    )
}
export default Footer

