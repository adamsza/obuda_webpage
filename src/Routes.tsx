import * as React from 'react';
import * as Realm from "realm-web";
import Navbar from "./NavigationBar";
import { Router, Switch, Route } from "react-router";
import { createBrowserHistory } from "history";
import HomePage from './Homepage/Homepage';
import Association from './Association/Association';
import News from './News/News';
import Trainings from './Trainings/Trainings';
import Contact from './Contact/Contact';
import Shop from './Shop/Shop';
import Tournament from './NewYearCup/Tournament';
import Championship from './Championship/Championship';
import Players from './Players/Players';
import Team from './Team/Team';
import SingleNews from './News/SingleNews';
import Admin from './Admin/Admin';
import Login from './Admin/Login';
import Registration from './NewYearCup/Registration';
import Results from './NewYearCup/Results';

const history = createBrowserHistory();
export const direct = (url: string) =>{
    history.push("/"+url);
}

const REALM_APP_ID = "obuda_webpage-fvpft";
const app: Realm.App = new Realm.App({ id: REALM_APP_ID });

const loginAnonymous = async () => {
    const user: Realm.User = await app.logIn(Realm.Credentials.apiKey("h2aETrddCeFcGPCFmRW090tOVoWEJ20d9xaJAIh01pptMG5q4YotoXg5NhKaYr7L"));
    loggedinuser = user;
  };

export var loggedinuser = app.currentUser;

const Routes: React.FC = (props: any) => {
    if(loggedinuser === null) loginAnonymous();
    return(
        <Router history={history}>
        <div>
            <Navbar key="navbar" {...props}/>
            <Switch>
                <Route exact path="/" component={HomePage} key="route-home"/>
                <Route path="/hirek"
                render={({match: {url}}) => (
                    <>
                        <Route path={`${url}/`} component={News} exact key="route-news"/>
                        <Route path={`${url}/:date`} component={SingleNews} key="route-singlenews"/>
                    </>
                )}/>
                <Route path="/bajnoksag" component={Championship} key="route-championship"/>
                <Route path="/rolunk" component={Association} key="route-association"/>
                <Route path="/edzesek" component={Trainings} key="route-trainings"/>
                <Route path="/csapat" component={Team} key="route-team"/>
                <Route path="/jatekosok" component={Players} key="route-players"/>
                <Route path="/kapcsolat" component={Contact} key="route-contact"/>
                <Route path="/shop" component={Shop} key="route-shop"/>
                <Route path="/newyearcup"
                render={({match: {url}}) => (
                    <>
                        <Route path={`${url}/tournament`} component={Tournament} exact key="route-newyearcup-tournament"/>
                        <Route path={`${url}/registration`} component={Registration} key="route-newyearcup-registration"/>
                        <Route path={`${url}/results`} component={Results} key="route-newyearcup-results"/>
                        <Route path={`${url}/merchandise`} component={Shop} key="route-newyearcup-merchandise"/>
                    </>
                )}/>
                <Route path="/admin" component={Admin} key="route-admin"/>
                <Route path="/b3l3p3s" component={Login} key="route-belepes"/>
                <Route component={HomePage} />
            </Switch>
        </div>
        </Router>
    );
};

export default Routes;