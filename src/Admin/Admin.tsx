import * as React from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
import { direct } from "../Routes";
import "./Admin.css"
import ChampionshipAdmin from "./ChampionshipAdmin";
import NewsAdmin from "./NewsAdmin";

class Admin extends React.Component {

    loggedin() {
        //if (loggedinuser?.profile.email === "obudaultimate@gmail.com") return true;
        //else return false;
        return true;
    }

    notLoggedIn(){
        direct("");
        return <div></div>
    }

    render() {
        return (
            this.loggedin() ?
                <Container fluid="lg" className="tabcontainer">
                <Tabs defaultActiveKey="cikk" id="tabs">
                    <Tab eventKey="cikk" title="Cikkírás">
                        <NewsAdmin/>
                    </Tab>
                    <Tab eventKey="kepek" title="Képfeltöltés">
                        <ChampionshipAdmin/>
                    </Tab>
                </Tabs>
                </Container>
                : this.notLoggedIn()
        );
    }
}

export default Admin;