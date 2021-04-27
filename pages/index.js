import Layout from '../components/layout'
import Head from 'next/head'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Home() {
    return (
        <>
            <Layout>
                <Head>
                    <title>Garlicwallet</title>
                </Head>
                <Jumbotron fluid>
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col md="auto">
                                <img alt="Garlicwallet logo" src="/garlicwalletlogo.png" width={128} height={128} />
                            </Col>
                            <Col md="auto">
                                <h1>Garlicwallet</h1>
                                <p>A secure, SPV wallet for Garlicoin</p>
                                <Button variant="outline-dark" size="lg">Coming Soon</Button>{' '}
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </Layout>
        </>
    )
}