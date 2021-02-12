import * as React from "react";
import { Container } from "react-bootstrap";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import "./Contact.css"

class Contact extends React.Component{

    render(){
        return(
            <Container fluid className="container-style">
                <div><b>Telefon:</b> +36 30 477 3883</div>
                <div><b>E-mail:</b> obudaultimate@gmail.com</div>
                <div><FaFacebook/> <a href="https://www.facebook.com/obudaultimate">facebook.com/obudaultimate</a></div>
                <div><FaInstagram/> <a href="https://instagram.com/obudaultimate">instagram.com/obudaultimate</a></div>
            </Container>
        );
    }
}

export default Contact;