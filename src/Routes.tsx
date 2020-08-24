import * as React from 'react';
//import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./NavigationBar";
import { Router, Switch, Route, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import PageNotFound from './PageNotFound';
import HomePage from './Homepage/Homepage';
import Sports from './Sports/Sports';
import Organisers from './Organisers/Organisers';
import Registration from './Registration/Registration';
import Sponsors from './Sponsors/Sponsors';
import Gallery from './Gallery/Gallery';

const history = createBrowserHistory();
export const direct = (url: string) =>{
    history.push(url);
}

const Routes: React.FC = (props: any) => {
    //<Redirect exact={true} from="asd" to="/" />
    return(
        <Router history={history}>
        <div>
            <Navbar key="navbar" {...props}/>
            <Switch>
                <Route exact path="/" component={HomePage} key="route-home"/>
                <Route path="/sports" component={Sports} key="route-sports"/>
                <Route path="/organisers" component={Organisers} key="route-organisers"/>
                <Route path="/registration" component={Registration} key="route-registration"/>
                <Route path="/sponsors" component={Sponsors} key="route-sponsors"/>
                <Route path="/gallery" component={Gallery} key="route-gallery"/>
                <Route component={HomePage} />
            </Switch>
        </div>
        </Router>
    );
};

export default Routes;