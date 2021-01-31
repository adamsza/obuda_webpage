import * as React from "react";
import { Tab, Row, Col, Nav, Container } from "react-bootstrap";

class Championship extends React.Component {

    render() {
        return (
            <Container fluid="lg">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first">Menetrend</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Eredmények</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tabella</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth">Statisztikák</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                Menetrend
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                Eredmények
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                Tabella
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                Statisztikák
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
            </Container>
        );
    }
}

export default Championship;