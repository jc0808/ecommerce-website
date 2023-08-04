import { Col, Container, Row, Button } from "react-bootstrap";


function Account() {
    return (
        <>

            <Container className="accountPage">

                <h1>Account</h1>
                <Container className="accountTable">

                    <Row >
                        <Col className="col-6" style={{ padding: "30px" }}>
                            <Row>
                                <h2>My Information</h2>
                            </Row>

                            <Row style={{ border: "2px solid", padding: "20px" }}>
                                <ul>
                                    <li>Full Name <input type="text" placeholder="Joshua Campos" /></li>
                                    <li>Location <input type="text" placeholder="Seattle, WA" /></li>
                                    <li>Username <input type="text" placeholder="joshua1234" disabled /></li>
                                    <li>Password <input type="password" value="ffhsjshj" /></li>

                                    <button>Change</button>
                                </ul>

                            </Row>

                        </Col>

                        <Col className="col-6" style={{ padding: "30px" }}>
                            <Row>
                                <h2>Delete Account</h2>
                            </Row>



                            <Row style={{ border: "2px solid", padding: "20px" }}>
                                <Button className="btn-danger">Delete</Button>
                            </Row>
                        </Col>

                        {/* <Col className="col-3" style={{ padding: "30px" }}>
                            <Row>
                                <h2>Password</h2>
                            </Row>

                            <Row style={{ border: "2px solid", padding: "20px" }}>

                            </Row>
                        </Col> */}
                    </Row>

                </Container>
            </Container>

        </>
    )
}


export default Account;