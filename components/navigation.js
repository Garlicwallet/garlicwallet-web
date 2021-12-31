import Container from "react-bootstrap/Container";
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Navbar} from "react-bootstrap";

export default function Navigation() {
    return (
        <>
            <Navbar bg="transparent" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt=""
                            src="/garlicwalletlogo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        <h1>Garlicwallet</h1>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}
