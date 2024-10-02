import { Container } from "react-bootstrap"
import "./YourBooks.css"
import MyTab from "../myTab/MyTab"
import MyNavbar from "../navbar/Navbar"
import MyFoot from "../myFoot/MyFoot"



function YourBooks(){
    return(
       <>
          <MyTab />
          <MyNavbar/>
          <Container>
              <p>send us your books</p>
          </Container>
          <MyFoot/>
       </>
    )
}





export default YourBooks