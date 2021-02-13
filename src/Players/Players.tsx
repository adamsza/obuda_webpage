import * as React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { loggedinuser } from "../Routes";
import ScrollAnimation from 'react-animate-on-scroll';
import "./Players.css"

interface IState{
    players: any[];
    screen_width: number,
}

class Players extends React.Component<{}, IState>{
    constructor(props: any) {
        super(props);
        this.state = {
            players: [],
            screen_width: window.innerWidth,
        }
    }

    componentDidMount() {
        const mongodb = loggedinuser?.mongoClient("mongodb-atlas");
        if(!mongodb) return;
        const players_collection = mongodb.db("obuda_webpage").collection("players");
        players_collection.find()
            .then(items => {
                this.setState({players: items});
            });
        window.addEventListener('resize', this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth);
    }

    updateWidth = () => {
        this.setState({screen_width: window.innerWidth});
    }

    render(){
        let playercards: JSX.Element[] = [];
        this.state.players.forEach(player => {
            playercards.push(
                <Card>
                    <Card.Img variant="top" src="https://instagram.fbud5-1.fna.fbcdn.net/v/t51.2885-15/e35/123969728_116536766925511_2178813945839768847_n.jpg?_nc_ht=instagram.fbud5-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=HUCW70bM86kAX8kkwuP&tp=1&oh=8ad3e8394c4126738b525c374599b943&oe=6043358A"/>
                    <Card.Body>
                        <Card.Title>{player.name}</Card.Title>
                        <Card.Subtitle>{player.number}</Card.Subtitle>
                    </Card.Body>
                </Card>
            );
        });
        let playerrows: JSX.Element[] = [];
        for(let i = 0; i < playercards.length/3; i++)
        {
            playerrows.push(
                <Row className="row-style">
                    <Col><ScrollAnimation delay={i*0} animateIn="fadeInUp" animateOnce>{playercards[i*3+0]}</ScrollAnimation></Col>
                    <Col><ScrollAnimation delay={i*50} animateIn="fadeInUp" animateOnce>{playercards[i*3+1]}</ScrollAnimation></Col>
                    <Col><ScrollAnimation delay={i*100} animateIn="fadeInUp" animateOnce>{playercards[i*3+2]}</ScrollAnimation></Col>
                </Row>
            );
        }

        return(
            <Container fluid="lg" >
                {this.state.screen_width > 576? playerrows : playercards}
            </Container>
        );
    }
}

export default Players;