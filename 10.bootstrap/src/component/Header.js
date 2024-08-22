import { useState } from 'react';
import './common.css'
import logo from './naver.png';
import {Button, Modal, Form} from 'react-bootstrap';

function Header() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <header>
            <img src={logo} className="Naver-logo" alt="logo" />
            <h2 className="main_title">NAVER</h2>
            <div className="login">
                <Button variant="outline-success" size="sm">회원가입</Button>&ensp;
                <Button variant="outline-success" size="sm" onClick={handleShow}>로그인</Button>
            </div>
            <Login show={show} onHide={handleClose}></Login>
        </header>
    )

    function Login() {
        return (
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Login</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>ID : Email address</Form.Label>
                                <Form.Control type="email" placeholder="name@example.com" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="대/소문자, 특수문자 포함 8자 이상" />
                            </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes    
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default Header;