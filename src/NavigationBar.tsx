import * as React from 'react';
import { direct } from './Routes';
import {Navbar, Nav } from 'react-bootstrap'

interface IState{
    activenav: boolean[],
}

class NavigationBar extends React.Component<{},IState> {
    constructor(props: any)
    {
        super(props);
        this.state = {
            activenav: [false, false, false, false, false, false],
        };
    }

    handleChange = (newValue: number) => {
        let newactivenav: boolean[] = [false, false, false, false, false, false];
        newactivenav[newValue] = true;
        this.setState({
            activenav: newactivenav,
        })
    };


    public render(){
        return(
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
          <Navbar className="navbar-bg" collapseOnSelect expand="lg" variant="dark">
          <Navbar.Brand href="/" onClick={(e:any) => this.handleChange(0)}>Generation Games</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link active={this.state.activenav[1]} as="div" onClick={(e:any) => {this.handleChange(1); direct("sports")}} key="nav-sports">Sportágak</Nav.Link>
                <Nav.Link active={this.state.activenav[2]} as="div" onClick={(e:any) => {this.handleChange(2); direct("organisers")}} key="nav-organisers">Szervezők</Nav.Link>
                <Nav.Link active={this.state.activenav[3]} as="div" onClick={(e:any) => {this.handleChange(3); direct("registration")}} key="nav-registration">Regisztráció</Nav.Link>
                <Nav.Link active={this.state.activenav[4]} as="div" onClick={(e:any) => {this.handleChange(4); direct("sponsors")}} key="nav-sponsors">Szponzorok</Nav.Link>
                <Nav.Link active={this.state.activenav[5]} as="div" onClick={(e:any) => {this.handleChange(5); direct("gallery")}} key="nav-gallery">Galéria</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        );}
}

export default NavigationBar;