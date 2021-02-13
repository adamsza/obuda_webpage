import * as React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import "./Homepage.css";
import "animate.css/animate.min.css";
import { direct, loggedinuser } from "../Routes";

interface IState {
    news: any[];
    result_images: any[];
    screen_width: number;
}

class HomePage extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            news: [],
            result_images: [],
            screen_width: window.innerWidth,
        }
    }

    componentDidMount() {
        const mongodb = loggedinuser?.mongoClient("mongodb-atlas");
        if (!mongodb) return;
        const news_collection = mongodb.db("obuda_webpage").collection("news");
        news_collection.find()
            .then(items => {
                this.setState({ news: items });
            });
        const images_collection = mongodb.db("obuda_webpage").collection("result_images");
        images_collection.find()
            .then(items => {
                this.setState({ result_images: items});
            })
        window.addEventListener('resize', this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth);
    }

    updateWidth = () => {
        this.setState({ screen_width: window.innerWidth });
    }

    render() {
        let newscards: JSX.Element[] = [];
        this.state.news.forEach(news => {
            newscards.push(
                <Card onClick={() => direct("hirek/" + news.date)}>
                    <Card.Img variant="top" style={{ objectFit: 'cover', aspectRatio: '16/9' }} src="https://instagram.fbud5-1.fna.fbcdn.net/v/t51.2885-15/e35/123969728_116536766925511_2178813945839768847_n.jpg?_nc_ht=instagram.fbud5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=HUCW70bM86kAX8kkwuP&tp=1&oh=8ad3e8394c4126738b525c374599b943&oe=6043358A" />
                    <Card.Body style={{ minHeight: '50px' }} className="body-style">
                        <Card.Title>{news.title}</Card.Title>
                        <div className="corner-piece"></div>
                    </Card.Body>
                </Card>
            );
        });
        return (
            <div>
                <div style={{ position: "relative" }}>
                    <Image className="img" width="100%" src="http://budafokimte.hu/static/home/images/cover.jpg" />
                    <div className="overlays"></div>
                    <h1 className="titles" style={this.state.screen_width > 576? {} : {fontSize: "2rem"}}>ÓBUDA ULTIMATE</h1>
                    <div className="slideinout animate__animated animate__slideOutLeft animate__slow"></div>
                </div>
                <div>
                    <Row className="row-styles">
                        <Col xs={3}>
                            <div className="decorboxs" ></div>
                        </Col>
                        <Col>
                            {this.state.screen_width > 576?
                            <h1 style={{paddingTop: 10}}>Legfrissebb hírek</h1> :
                            <h4 style={{paddingTop: 20}}>Legfrissebb hírek</h4>}
                        </Col>
                    </Row>
                    <Row className="row-styles justify-content-sm-center">
                        <Col xs={12} sm={3}>{newscards[0]}</Col>
                        <Col xs={12} sm={3}>{newscards[1]}</Col>
                    </Row>
                    <Row className="row-styles" style={{ backgroundColor: "red"}}>
                        <Col xs={3}>
                            <div className="decorboxs" style={{ backgroundColor: "black" }}></div>
                        </Col>
                        <Col>
                            {this.state.screen_width > 576?
                            <h1 style={{paddingTop: 10, color: "white" }}>Mérkőzések</h1> :
                            <h4 style={{paddingTop: 20, color: "white" }}>Mérkőzések</h4>}
                        </Col>
                    </Row >
                    {this.state.result_images.length > 0? <Row className="row-styles justify-content-sm-center" style={{ backgroundColor: "red"}}>
                        <Col xs={12} sm={3}><Image className="result-img" src={this.state.result_images[0].image} rounded /></Col>
                        <Col xs={12} sm={3}><Image className="result-img" src={this.state.result_images[1].image} rounded /></Col>
                    </Row> : <></>}
                </div>
            </div>
        );
    }
}

export default HomePage;