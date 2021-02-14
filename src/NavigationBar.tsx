import * as React from 'react';
import { direct } from './Routes';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

interface IState {
    activenav: boolean[],
    expanded: boolean,
    screen_width: number,
}

class NavigationBar extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            activenav: [false, false],
            expanded: false,
            screen_width: window.innerWidth,
        };
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

    handleChange = (newValue: number) => {
        let newactivenav: boolean[] = [false, false];
        newactivenav[newValue] = true;
        this.setState({
            activenav: newactivenav,
            expanded: false,
        })
    };


    public render() {
        return (
            <Navbar sticky="top" className="navbar-bg" expanded={this.state.expanded} expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/" onClick={(e:any) => this.handleChange(0)}>Óbuda Ultimate Team</Navbar.Brand>
            <Navbar.Toggle onClick={(e:any) => this.setState({expanded: !this.state.expanded})} aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link className="link" active={this.state.activenav[1]} as="div" onClick={(e:any) => {this.handleChange(1); direct("hirek")}} key="nav-news">Hírek</Nav.Link>
                  <Nav.Link className="link" active={this.state.activenav[2]} as="div" onClick={(e:any) => {this.handleChange(2); direct("bajnoksag")}} key="nav-bajnoksag">Bajnokság</Nav.Link>
                  <NavDropdown title="Egyesület" active={this.state.activenav[3]} id="nav-dropdown-assoc">
                    <NavDropdown.Item onClick={(e:any) => {this.handleChange(3); direct("rolunk")}}>Rólunk</NavDropdown.Item>
                    <NavDropdown.Item onClick={(e:any) => {this.handleChange(3); direct("csapat")}}>Csapat</NavDropdown.Item>
                    <NavDropdown.Item onClick={(e:any) => {this.handleChange(3); direct("jatekosok")}}>Játékosok</NavDropdown.Item>
                    <NavDropdown.Item onClick={(e:any) => {this.handleChange(3); direct("edzesek")}}>Edzések</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="link" active={this.state.activenav[4]} as="div" onClick={(e:any) => {this.handleChange(4); direct("shop")}} key="nav-shop">Shop</Nav.Link>
                  <Nav.Link className="link" active={this.state.activenav[5]} as="div" onClick={(e:any) => {this.handleChange(5); direct("kapcsolat")}} key="nav-contact">Kapcsolat</Nav.Link>
                  <NavDropdown title="New Year Cup Tournament" active={this.state.activenav[6]} id="nav-dropdown-nyc">
                    <NavDropdown.Item onClick={(e:any) => {this.handleChange(6); direct("newyearcup/tournament")}}>Tournament</NavDropdown.Item>
                    <NavDropdown.Item onClick={(e:any) => {this.handleChange(6); direct("newyearcup/registration")}}>Registration</NavDropdown.Item>
                    <NavDropdown.Item onClick={(e:any) => {this.handleChange(6); direct("newyearcup/results")}}>Results</NavDropdown.Item>
                    <NavDropdown.Item onClick={(e:any) => {this.handleChange(6); direct("newyearcup/merchandise")}}>merchandise</NavDropdown.Item>
                  </NavDropdown>
              </Nav>
              {this.state.screen_width > 992? 
                <Nav>
                    <Nav.Link active={false} href="https://www.facebook.com/obudaultimate" target="_blank"><FaFacebook className="icon"/></Nav.Link>
                    <Nav.Link active={false} href="https://www.instagram.com/obudaultimate/" target="_blank"><FaInstagram className="icon"/></Nav.Link>
                </Nav> : 
            ""}
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default NavigationBar;