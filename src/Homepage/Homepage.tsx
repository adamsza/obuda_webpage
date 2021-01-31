import * as React from "react";
import { Button, Card, Carousel, Container } from "react-bootstrap";
import "./Homepage.css";

class HomePage extends React.Component {

    render() {
        return (
            <Container fluid="lg">
                <Card className="card" bg="danger" text="white">
                    <Card.Body>
                        <Carousel >
                            <Carousel.Item>
                                <img
                                    src="https://scontent.fbud5-1.fna.fbcdn.net/v/t1.0-9/131898876_3375175822609356_6291267915081647752_o.jpg?_nc_cat=108&ccb=2&_nc_sid=a26aad&_nc_ohc=rBYGNmJA0RsAX-L5Mkj&_nc_ht=scontent.fbud5-1.fna&oh=62bfd3ea02e495bb5d4c6939eed00872&oe=6036F1AD"
                                    width="100%"
                                    alt="First slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src="https://scontent.fbud5-1.fna.fbcdn.net/v/t1.0-9/131520552_3375175825942689_6107725236570548471_o.jpg?_nc_cat=105&ccb=2&_nc_sid=a26aad&_nc_ohc=I_vB4rtesEkAX9SvJLk&_nc_ht=scontent.fbud5-1.fna&oh=d911320866b5ef4f7ba147d50afb79bd&oe=60342806"
                                    width="100%"
                                    alt="Second slide"
                                />
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                    src="https://scontent.fbud5-1.fna.fbcdn.net/v/t1.0-9/131669008_3375175829276022_7398204791139212364_o.jpg?_nc_cat=101&ccb=2&_nc_sid=a26aad&_nc_ohc=unVLBfpyC1AAX_NMQSS&_nc_oc=AQnhuJNGgJloGp0w7vyIrZTVpzTzbY3HokejKO_p0FxlmSSviDRUGPb_3YPNqmTEq54&_nc_ht=scontent.fbud5-1.fna&oh=788a4ce4c4e8a831661b5df733e152a7&oe=603683B9"
                                    width="100%"
                                    alt="Third slide"
                                />
                            </Carousel.Item>
                        </Carousel>
                        <Card.Title>Cím</Card.Title>
                        <Card.Text>
                            Valami nagyon sok szöveg
                            <p>-bekezés</p>
                            -másik
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <div className="fb-like" data-href={window.location.href} data-width="" data-layout="standard" data-action="like" data-size="large" data-share="true"></div>
                    </Card.Footer>
                </Card>
            </Container>
        );
    }
}

export default HomePage;