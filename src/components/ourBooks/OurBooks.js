import { Container , Row , Col} from "react-bootstrap";
import MyTab from "../myTab/MyTab";
import CardBook from "../cardBook/CardBook";
import { useState } from "react";
import MyFoot from "../myFoot/MyFoot";
import { booksData } from "../../data";
import MyNavbar from "../navbar/Navbar";
import "./OurBooks.css"



function OurBooks(){

  const [englishBooks] = useState(booksData)

    return(
     <>  
        <MyTab/>
        <MyNavbar/>
        <Container className="mb-5 pb-5">
           <Row>
            <h2 className="text-center pb-5 pt-5 fs-1" style={{color:"blue" , fontFamily:"Nerko One"}}>
             Enhance Your English Skills Through Storybooks
             </h2>
             <p className="m-auto text-center pb-5 fs-5" style={{fontFamily:"Nerko One" , fontWeight:100 , width:"900px"}}>
                Practicing English through reading is a fantastic way to improve your language skills while enjoying captivating stories. Whether you're a beginner or an advanced learner, reading English storybooks can enhance your vocabulary, comprehension, and overall fluency. On this page, we've curated a selection of English books that are both engaging and educational, suitable for various levels of proficiency. These stories not only entertain but also offer valuable insights into the culture and nuances of the English language, making your learning journey enjoyable and effective.
             </p>
           </Row>
           <Row className="pt-5 g-5">
              {englishBooks.map( englishBook => (
                 <Col key={englishBook.id} className="col-12 col-sm-6 col-md-4 col-xl-3 zoom" >
                    <CardBook {...englishBook} />
                 </Col>
              ))}
           </Row>
        </Container>
        <MyFoot/>
     </>
    )
}

export default OurBooks