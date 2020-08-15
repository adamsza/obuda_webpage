import * as React from 'react';
import { direct } from './Routes';
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavDropdown,} from 'react-bootstrap'

interface IState{
    value: number,
}

class NavigationBar extends React.Component<{},IState> {
    /*constructor(props: any)
    {
        super(props);
        this.state = {
            value: 0,
        };
    }

    handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        this.setState({
            value: newValue,
        })
    };*/

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
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="#home">Generation Games</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as="div" key="nav-sports"><Link style={{color: 'inherit', textDecoration: 'inherit'}} to="sports">Sportágak</Link></Nav.Link>
              <Nav.Link as="div" key="nav-organisers"><Link style={{color: 'inherit', textDecoration: 'inherit'}} to="organisers">Szervezők</Link></Nav.Link>
              <Nav.Link as="div" key="nav-registration"><Link style={{color: 'inherit', textDecoration: 'inherit'}} to="registration">Regisztráció</Link></Nav.Link>
              <Nav.Link as="div" key="nav-sponsors"><Link style={{color: 'inherit', textDecoration: 'inherit'}} to="sponsors">Szponzorok</Link></Nav.Link>
              <Nav.Link as="div" key="nav-gallery"><Link style={{color: 'inherit', textDecoration: 'inherit'}} to="gallery">Galéria</Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        );}
}

export default NavigationBar;