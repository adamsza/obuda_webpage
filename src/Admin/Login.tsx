import * as React from "react";
import * as Realm from "realm-web";
import { Button, Container, Form} from "react-bootstrap";
import { loggedinuser } from "../Routes";

const REALM_APP_ID = "obuda_webpage-fvpft";
const app: Realm.App = new Realm.App({ id: REALM_APP_ID });

interface IState{
    email: string,
    pass: string,
}

class Login extends React.Component<{}, IState>{
    constructor(props: any){
        super(props);
        this.state = {
            email: "",
            pass: ""
        }
    }

    async login(){
        await app.logIn(Realm.Credentials.emailPassword(this.state.email, this.state.pass));
        window.location.href = "admin";
    }
    
    render() {
        return (
            <Container fluid="sm">
                <Form.Control value={this.state.email} type="email" onChange={(e) => this.setState({email: e.target.value})}></Form.Control>
                <Form.Control value={this.state.pass} type="password" onChange={(e) => this.setState({pass: e.target.value})}></Form.Control>
                <Button onClick={() => this.login()}>Belépés</Button>
                <Button onClick={() => loggedinuser?.logOut()}>Kilépés</Button>
            </Container>
        );
    }
}

export default Login;