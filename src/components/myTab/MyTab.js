import "./MyTab.css"
import Nav from 'react-bootstrap/Nav';





function MyTab(){
    return( 
    <div className="box m-auto">
      <Nav className="m-5" defaultActiveKey="/home" as="ul">
       <Nav.Item as="li">
         <Nav.Link href="/" style={{fontWeight:"bold", color:"rgb(69, 69, 130)" }}>Home</Nav.Link>
       </Nav.Item>
       <Nav.Item as="li">
         <Nav.Link href="/our-books" style={{fontWeight:"bold" , color:"rgb(69, 69, 130)" }}>Our Books</Nav.Link>
       </Nav.Item>
       <Nav.Item as="li">
         <Nav.Link href="#myFooter" style={{fontWeight:"bold" , color:"rgb(69, 69, 130)" }}>Contact with us</Nav.Link>
       </Nav.Item>
       </Nav>
     </div>
    )
}

export default MyTab