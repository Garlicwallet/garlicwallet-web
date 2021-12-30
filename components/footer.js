import Container from "react-bootstrap/Container";
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <p>© 2021 Garlicwallet</p>
                    </Col>
                    <Col>
                        <h5>Garlicwallet</h5>
                        <ul className={"list-unstyled text-small"}>
                            <li><Link href="/"><a>Home</a></Link></li>
                            <li><Link href="https://recovery.garlicwallet.com"><a>Recovery</a></Link></li>
                            <li><Link href="/privacy"><a>Privacy Policy</a></Link></li>
                            <li><Link href="https://github.com/Garlicwallet"><a>Github</a></Link></li>
                            <li><Link href="https://discord.gg/vAxFRb5DYe"><a>Discord</a></Link></li>
                        </ul>
                    </Col>
                    <Col>
                        <h5>Resources</h5>
                        <ul className={"list-unstyled text-small"}>
                            <li><Link href="https://garlicoinprice.com"><a>Garlicoin Price</a></Link></li>
                            <li><Link href="https://garlic.wiki"><a>Garlicoin Wiki</a></Link></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
