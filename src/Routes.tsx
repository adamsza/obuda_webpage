import * as React from 'react';
//import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./NavigationBar";
import { Router, Switch, Route, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import App from './App';
import PageNotFound from './PageNotFound';
import HomePage from './Homepage/Homepage';

const history = createBrowserHistory();
export const direct = (url: string) =>{
    history.push(url);
}

const Routes: React.FC = (props: any) => {
    return(
        <Router history={history}>
        <div>
            <Navbar key="navbar" {...props}/>
            <Switch>
                <Redirect exact={true} from="/" to="/login" />
                <Route path="/" component={HomePage} key="route-home"/>
                <Route path="/sports" component={SportsPage} key="route-sports"/>
                <Route path="/organisers" component={OrganisersPage} key="route-organisers"/>
                <Route path="/registration" component={RegistrationPage} key="route-registration"/>
                <Route path="/sponsors" component={SponsorsPage} key="route-sponsors"/>
                <Route path="/gallery" component={GalleryPage} key="route-gallery"/>
                <Route component={PageNotFound} />
            </Switch>
        </div>
        </Router>
    );
};

export default Routes;