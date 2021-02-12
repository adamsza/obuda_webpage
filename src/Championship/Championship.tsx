import * as React from "react";
import { Tab, Row, Col, Nav, Container, Image } from "react-bootstrap";
import { loggedinuser } from "../Routes";
import "./Championship.css";

interface IState{
    menetrend: string,
    tabella: string,
    statisztika: string,
    result_images: any[],
}

class Championship extends React.Component<{}, IState> {
    constructor(props: any){
        super(props);
        this.state = {
            menetrend: "",
            tabella: "",
            statisztika: "",
            result_images: [],
        }
    }

    componentDidMount() {
        const mongodb = loggedinuser?.mongoClient("mongodb-atlas");
        if (!mongodb) return;
        const single_images_collection = mongodb.db("obuda_webpage").collection("single_images");
        single_images_collection.find()
            .then(items => {
                this.setState({ menetrend: items.find(item => {if(item.name === "menetrend") return item; else return null}).image ,
                                tabella: items.find(item => {if(item.name === "tabella") return item; else return null}).image ,
                                statisztika: items.find(item => {if(item.name === "statisztika") return item; else return null}).image ,
                });
            });
        const result_images_collection = mongodb.db("obuda_webpage").collection("result_images");
        result_images_collection.find()
            .then(items => {
                this.setState({ result_images: items});
            });
    }

    render() {
        let result_rows: JSX.Element[] = [];
        for (let i = 0; i < this.state.result_images.length / 2; i++) {
            result_rows.push(
                <Row className="result-row">
                    <Col><Image className="result-img" src={this.state.result_images[i*2 + 0].image} rounded /></Col>
                    <Col><Image className="result-img" src={this.state.result_images.length !== i*2 + 1? this.state.result_images[i*2 + 1].image : ""} rounded /></Col>
                </Row>
            );
        }

        return (
            <Container className="tabcontainer" fluid="lg">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first"><h6>Menetrend</h6></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"><h6>Eredmények</h6></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"><h6>Tabella</h6></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth"><h6>Statisztikák</h6></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Image width="100%" src={this.state.menetrend} rounded />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                {result_rows}
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Image width="100%" src={this.state.tabella} rounded />
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <Image width="100%" src={this.state.statisztika} rounded />
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