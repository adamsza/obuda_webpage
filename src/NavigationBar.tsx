import * as React from 'react';
import { direct } from './Routes';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

interface IState {
    activenav: boolean[],
}

class NavigationBar extends React.Component<{}, IState> {
    constructor(props: any) {
        super(props);
        this.state = {
            activenav: [false, false],
        };
    }

    handleChange = (newValue: number) => {
        let newactivenav: boolean[] = [false, false];
        newactivenav[newValue] = true;
        this.setState({
            activenav: newactivenav,
        })
    };


    public render() {
        return (
            /*<Paper>
            <Grid justify="space-between" container>
                <TabNavigation
                value={this.state.value}
                onChange={this.handleChange}
                indicatorColor="secondary"
                textColor="secondary"
                >
                    <Tab onClick={() => direct("associations")}></Tab>
                    <Tab onClick={() => direct("players")}></Tab>
                </TabNavigation>
          </Grid>
          </Paper>*/
            <Navbar sticky="top" className="navbar-bg" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/" onClick={(e:any) => this.handleChange(0)}>Óbuda Ultimate Team</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                  <Nav.Link className="link" active={this.state.activenav[1]} as="div" onClick={(e:any) => {this.handleChange(1); direct("hirek")}} key="nav-news">Hírek</Nav.Link>
                  <Nav.Link className="link" active={this.state.activenav[2]} as="div" onClick={(e:any) => {this.handleChange(2); direct("bajnoksag")}} key="nav-bajnoksag">Bajnokság</Nav.Link>
                  <NavDropdown title="Egyesület" active={this.state.activenav[3]} id="nav-dropdown">
                    <NavDropdown.Item onClick={(e:any) => {this.handleChange(3); direct("rolunk")}}>Rólunk</NavDropdown.Item>
                    <NavDropdown.Item onClick={(e:any) => {this.handleChange(3); direct("csapat")}}>Csapat</NavDropdown.Item>
                    <NavDropdown.Item onClick={(e:any) => {this.handleChange(3); direct("jatekosok")}}>Játékosok</NavDropdown.Item>
                    <NavDropdown.Item onClick={(e:any) => {this.handleChange(3); direct("edzesek")}}>Edzések</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link className="link" active={this.state.activenav[4]} as="div" onClick={(e:any) => {this.handleChange(4); direct("shop")}} key="nav-shop">Shop</Nav.Link>
                  <Nav.Link className="link" active={this.state.activenav[5]} as="div" onClick={(e:any) => {this.handleChange(5); direct("kapcsolat")}} key="nav-contact">Kapcsolat</Nav.Link>
                  <Nav.Link className="link" active={this.state.activenav[6]} as="div" onClick={(e:any) => {this.handleChange(6); direct("newyearcup")}} key="nav-newyearcup">New Year Cup Tournament</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        );
    }
}

export default NavigationBar;