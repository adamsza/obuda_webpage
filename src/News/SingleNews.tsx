import * as React from "react";
import * as Realm from "realm-web";
import {Container, Image} from "react-bootstrap";
import { withRouter } from "react-router";
import "./News.css";
import { loggedinuser } from "../Routes";
import Interweave from "interweave";

const REALM_APP_ID = "obuda_webpage-fvpft";
const app: Realm.App = new Realm.App({ id: REALM_APP_ID });

interface IProps {
    history: any,
    location: any,
    match: any,
}

interface IState {
    news: any,
}

class SingleNews extends React.Component<IProps, IState>{
    constructor(props: any) {
        super(props);
    }

    componentDidMount() {
        const mongodb = loggedinuser?.mongoClient("mongodb-atlas");
        if(!mongodb) return;
        const news_collection = mongodb.db("obuda_webpage").collection("news");
        news_collection.findOne({date: parseInt(this.props.match.params.date)})
            .then(item => {
                this.setState({news: item});
            });
    }

    render() {
        let date = null;
        try{
            date = new Date(this.state.news.date).toLocaleDateString();
        }catch(err){}
        return (
            <div>
                <div style={{ position: "relative" }}>
                    <Image width="100%" src={date && this.state.news.image} />
                    <div className="overlay"></div>
                    <h1 className="title">{date && this.state.news.title}</h1>
                </div>
                <div className="decorbox" />
                <Container fluid="lg">
                    <div className="text-header">
                        <h6>{date}</h6>
                    </div>
                    <Interweave content={date && this.state.news.text}/>
                    <h6 className="text-footer">{date}</h6>
                </Container>
            </div>
        );
    }
}

export default withRouter(SingleNews);