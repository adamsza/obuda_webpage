import * as React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import * as Realm from "realm-web";
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
                <Card onClick={() => direct("hirek/" + news.date)}>
                    <Card.Img variant="top" style={{ objectFit: 'cover', aspectRatio: '16/9' }} src="https://instagram.fbud5-1.fna.fbcdn.net/v/t51.2885-15/e35/123969728_116536766925511_2178813945839768847_n.jpg?_nc_ht=instagram.fbud5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=HUCW70bM86kAX8kkwuP&tp=1&oh=8ad3e8394c4126738b525c374599b943&oe=6043358A" />
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
            <Container fluid="lg" >
                {this.state.screen_width > 576 ? newsrows : newscards}
            </Container>
        );
    }
}

export default News;