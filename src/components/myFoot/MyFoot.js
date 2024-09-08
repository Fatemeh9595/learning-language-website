import { Col, Container, Row } from "react-bootstrap"
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";




function MyFoot(){
    return(
        <div id="myFooter" style={{backgroundColor:"yellow" , backgroundColor:"#f8f9fa"}}>
           <Container>
                 <div className="p-5 m-5">
                     <Row className="g-5">
                        <Col sm={12} xl={6}>
                            <span className="text-primary fs-5 fw-bold" >© 2024 Lingolift.</span>
                            <p className="px-3 w-50">
                            <br />
                              At Lingolift, we believe in the power of language to connect cultures and open doors. 
                            </p>
                        </Col>
                        <Col sm={12} xl={6}> 
                            <h2 className="text-primary fs-5 fw-bold" style={{overflowY : "hidden"}}>Contact with us</h2><br />
                            <p><span className="px-2"><FaPhone /></span>00393515361710</p>
                            <p><span className="px-2"><MdEmail /></span>fatemeh.nadalizadeh1995@gmail.com</p>
                            <p><span className="px-2"><FaLocationDot /></span>Roma , Italy</p>
                        </Col>
                     </Row>
                 </div>
           </Container>
        </div>
        
    )
}


export default MyFoot