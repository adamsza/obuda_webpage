import * as React from 'react';
//import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import Navbar from "./NavigationBar";
import { Router, Switch, Route, Redirect } from "react-router";
import { createBrowserHistory } from "history";
import PageNotFound from './PageNotFound';
import HomePage from './Homepage/Homepage';
import Association from './Association/Association';
import News from './News/News';
import Trainings from './Trainings/Trainings';
import Contact from './Contact/Contact';
import Shop from './Shop/Shop';
import NewYearCup from './NewYearCup/NewYearCup';
import Championship from './Championship/Championship';
import Players from './Players/Players';
import Team from './Team/Team';

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
                <Route path="/hirek" component={News} key="route-news"/>
                <Route path="/bajnoksag" component={Championship} key="route-championship"/>
                <Route path="/rolunk" component={Association} key="route-association"/>
                <Route path="/edzesek" component={Trainings} key="route-trainings"/>
                <Route path="/csapat" component={Team} key="route-team"/>
                <Route path="/jatekosok" component={Players} key="route-players"/>
                <Route path="/kapcsolat" component={Contact} key="route-contact"/>
                <Route path="/shop" component={Shop} key="route-shop"/>
                <Route path="/newyearcup" component={NewYearCup} key="route-newyearcup"/>
                <Route component={HomePage} />
            </Switch>
        </div>
        </Router>
    );
};

export default Routes;