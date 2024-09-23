import "./MyTab.css"
import Nav from 'react-bootstrap/Nav';
import {HashLink} from "react-router-hash-link";





function MyTab(){
    return(
        <div className="box m-auto">
            <Nav className="m-5" defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="./#/" style={{fontWeight:"bold", color:"rgb(69, 69, 130)" }}>Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="./#/our-books" style={{fontWeight:"bold" , color:"rgb(69, 69, 130)" }}>Our Books</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <HashLink to="/#myFooter" className="nav-link" style={{fontWeight:"bold" , color:"rgb(69, 69, 130)" }}>Contact with us</HashLink>
                </Nav.Item>
            </Nav>
        </div>
    )
}

export default MyTab