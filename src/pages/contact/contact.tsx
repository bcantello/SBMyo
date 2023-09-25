import React, {ReactElement} from "react";
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";
import './contact.scss';

export default function Contact(): ReactElement {
    return (
        <>
            <NavBar/>
            <div>This is the Contact page</div>
            <Footer/>
        </>
    );
}