import * as React from "react";
import * as Realm from "realm-web";
import { Button, Col, Form, Image, Row } from "react-bootstrap";
import { EditorValue } from 'react-rte';
import RichTextEditor from 'react-rte';
import "./Admin.css"

var blockStyleFunctions = require('../../node_modules/react-rte/lib/lib/blockStyleFunctions.js');

const REALM_APP_ID = "obuda_webpage-fvpft";
const app: Realm.App = new Realm.App({ id: REALM_APP_ID });

declare global {
    interface Window {
        cloudinary: any;
    }
}

interface IState {
    image_url: string,
    title: string,
    editor_value: EditorValue,
}

class NewsAdmin extends React.Component<{}, IState>{
    constructor(props: any) {
        super(props)
        this.state = {
            image_url: "",
            title: "",
            editor_value: RichTextEditor.createEmptyValue(),
        }
    }

    uploadNews() {
        const mongodb = app.currentUser?.mongoClient("mongodb-atlas");
        if (!mongodb) return;
        const news_collection = mongodb.db("obuda_webpage").collection("news");
        if (this.state.image_url !== "" && this.state.title !== "") {
            console.log(this.state);
            let result = news_collection.insertOne({
                title: this.state.title,
                text: this.state.editor_value.toString('html', { blockStyleFn: blockStyleFunctions.getTextAlignStyles }),
                image: this.state.image_url,
                date: new Date().getTime(),
            })
            console.log(result);
        }
        else alert("Minden mező kitöltése kötelező");
    }

    showWidget() {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: "dzonzfwfn",
            uploadPreset: "rsuxatsi_obuda_upload",
            multiple: false,
            cropping: true,
            showSkipCropButton: false,
            croppingAspectRatio: 16 / 9,
            croppingShowDimensions: true,
            singleUploadAutoClose: true
        },
            (error: any, result: any) => {
                if (result.event === "success") this.setState({ image_url: result.info.url })
            })
        widget.open();
    }

    onChange(value: EditorValue) {
        this.setState({ editor_value: value });
    }

    render() {
        return (
            <div>
                <Row className="admin-row">
                    <Col className="admin-col">
                    <Form.Control value={this.state.title} onChange={(e: any) => this.setState({title: e.target.value})} placeholder="Cím"/>
                    </Col>
                </Row>
                <Row className="admin-row">
                    <Col className="admin-col">
                        {this.state.image_url !== "" ? <Image width="100%" src={this.state.image_url} /> : ""}
                    </Col>
                    <Col>
                        <Button onClick={() => this.showWidget()}>Képfeltöltés</Button>
                    </Col>
                </Row>
                <Row className="admin-row">
                    <Col className="admin-col">
                        <RichTextEditor
                            className="react-rte"
                            value={this.state.editor_value}
                            onChange={(value: EditorValue) => this.onChange(value)}
                            blockStyleFn={blockStyleFunctions.getTextAlignClassName}
                        />
                    </Col>
                </Row>
                <Row className="admin-row">
                    <Col className="admin-col">
                        <Button onClick={() => this.uploadNews()}>Cikk feltöltése</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default NewsAdmin;