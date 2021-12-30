import Layout from '../components/layout'
import Head from 'next/head'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {Image} from "react-bootstrap";

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
                                <Button href="https://play.google.com/store/apps/details?id=com.garlicwallet" variant="outline-warning" size="lg">Garlicwallet for Android<br></br>
                                    <small className="font-weight-light">Available Now!</small></Button>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
                <Container>
                    <div className="row">
                        <div className="col-md-3"><Image className={"screen screen-left"} src="/screen-recieve.png" fluid rounded/></div>
                        <div className="col-md-9"><h2>Store and receive Garlicoin Securely</h2>
                            <p>Garlicwallet allows you securely store and recieve Garlicoin anywhere you are.</p>
                            <p>Garlicwallet communicates directly with standard Garlicoin full Nodes, and verifies the integrity of the complete blockchain directly from your phone.</p>
                            <p>Every wallet has a recovery phrase that can be used to restore a wallet in case something happens to your phone</p>
                            <p>The recovery phrase can also used to recover private keys for importing into Garlicoin Core</p>

                            <p className={"disclaimer"}><small>Note: When recovering a wallet, the full blockchain needs to be downloaded, a process that could take many hours and will use significant amounts of data. Make sure to only recover your wallet when connected to an unmetered connection.
                            </small></p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-9"><h2>Send and Pay with Garlicoin</h2>
                            <p>Garlicwallet enables you to send Garlicoin to anybody anywhere you are</p>
                            <p>Generate QR codes to share addresses with friends and family</p>
                            <p>Pay for goods and services easily with your mobile phone</p>
                            <p>Network fee is configurable to your desired speed and cost</p>
                        </div>
                        <div className="col-md-3"><Image className={"screen screen-right"}  src="/screen-send.png" fluid rounded/></div>
                    </div><p>Garlicwallet is fully open source. If you're interested in viewing the source code or compiling it yourself, you can find it on Github.</p>
                </Container>
            </Layout>
        </>
    )
}