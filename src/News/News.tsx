import * as React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { direct, loggedinuser } from "../Routes";
import "./News.css"

interface IState {
    news: any[];
    screen_width: number,
}

class News extends React.Component<{}, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            news: [],
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
                <Card style={this.state.screen_width > 576? {} : {marginBottom: 40}} onClick={() => direct("hirek/" + news.date)}>
                    <Card.Img variant="top" style={{ objectFit: 'cover', aspectRatio: '16/9' }} src={news.image} />
                    <Card.Body style={{ minHeight: '200px' }} className="body-style">
                        <Card.Title>{news.title}</Card.Title>
                        <div className="corner-piece"></div>
                    </Card.Body>
                </Card>
            );
        });
        let newsrows: JSX.Element[] = [];
        for (let i = 0; i < newscards.length / 2; i++) {
            newsrows.push(
                <Row>
                    <Col>{newscards[i * 2 + 0]}</Col>
                    <Col>{newscards[i * 2 + 1]}</Col>
                </Row>
            );
        }

        return (
            <Container fluid="lg" style={{marginTop: 40}}>
                {this.state.screen_width > 576 ? newsrows : newscards}
            </Container>
        );
    }
}

export default News;