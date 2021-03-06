import * as React from "react";
import { Button, Col, Nav, Row, Tab } from "react-bootstrap";
import "./Admin.css"
import { loggedinuser } from "../Routes";

class ChampionshipAdmin extends React.Component {

    uploadPhoto(url: string, image_name: string) {
        const mongodb = loggedinuser?.mongoClient("mongodb-atlas");
        if (!mongodb) return;
        if(image_name === "eredmeny"){
            const result_images_collection = mongodb.db("obuda_webpage").collection("result_images");
            result_images_collection.insertOne({
                image: url,
                date: new Date().getTime(),
            });
         }
        else if(["menetrend", "tabella", "statisztika"].includes(image_name)){
            const single_images_collection = mongodb.db("obuda_webpage").collection("single_images");
            single_images_collection.updateOne(
                {name: image_name},
                {$set: { image: url}}
            );
        }
    }

    showWidget(image_name: string) {
        let widget = window.cloudinary.createUploadWidget({
            cloudName: "dzonzfwfn",
            uploadPreset: "rsuxatsi_obuda_upload",
            multiple: false,
            folder: "obuda_webpage/" + image_name,
        },
            (error: any, result: any) => {
                if (result.event === "success") this.uploadPhoto(result.info.url, image_name);
            })
        widget.open();
    }

    render() {
        return (
            <Tab.Container defaultActiveKey="first">
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first"><h6>Menetrend</h6></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second"><h6>Eredmények</h6></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third"><h6>Tabella</h6></Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="fourth"><h6>Statisztikák</h6></Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Button onClick={() => this.showWidget("menetrend")}>Kép csere</Button>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                                <Button onClick={() => this.showWidget("eredmeny")}>Kép hozzáadás</Button>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                                <Button onClick={() => this.showWidget("tabella")}>Kép csere</Button>
                            </Tab.Pane>
                            <Tab.Pane eventKey="fourth">
                                <Button onClick={() => this.showWidget("statisztika")}>Kép csere</Button>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        );
    }
}

export default ChampionshipAdmin;