import Container from "react-bootstrap/Container";
import Link from 'next/link'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Footer() {
    return (
        <>
            <Container className={"footer"}>
                <Row>
                    <Col>
                        <p>© 2021-2022 Garlicwallet</p>
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
                            <li><Link href="https://garlicblocks.com/"><a>Block Explorer</a></Link></li>
                            <li><Link href="https://garlicoinprice.com"><a>Garlicoin Price</a></Link></li>
                            <li><Link href="https://garlic.wiki"><a>Garlicoin Wiki</a></Link></li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className={"disclaimer"}><small>Disclaimer: Garlicwallet is provided on an "as is" basis without any warranties of any kind. In no event shall the owners of,
                            or contributors to, Garlicwallet be liable for any damages of any kind, including, but not limited to, loss of use, loss of profits,
                            loss of funds, or loss of data arising out of or in any way connected with the use of Garlicwallet.</small></p>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
