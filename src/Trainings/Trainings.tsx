import * as React from "react";
import { Container } from "react-bootstrap";

interface IState{
    screen_width: number,
}

class Trainings extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            screen_width: window.innerWidth,
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateWidth);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWidth);
    }

    updateWidth = () => {
        this.setState({screen_width: window.innerWidth});
    }

    render() {
        return (
            <div>
                <Container fluid className="container-style">
                    <h3>FELNŐTT</h3>
                    <div>Goldball Park</div>
                    <div>Kedd 18:30-20:30</div>
                    <div>Csütörtök 18:30-20:30</div>
                </Container>
                <Container fluid="md">
                    <iframe title="goldball" width="100%" height={this.state.screen_width > 576 ? "600" : "300"} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Budapest,%20Goldball%20Park+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </Container>
                <Container fluid className="container-style">
                    <h3>U11, U13, U15</h3>
                    <div>Angyalföldi Sportközpont</div>
                    <div>Kedd 15:30-17:00</div>
                    <div>Csütörtök 15:30-17:00</div>
                </Container>
                <Container fluid="md">
                <iframe title="angyalfold" width="100%" height={this.state.screen_width > 576 ? "600" : "300"} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Budapest,%20Angyalf%C3%B6ldi%20Sportcentrum+()&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </Container>
                <Container fluid className="container-style"/>
            </div>
        );
    }
}

export default Trainings;