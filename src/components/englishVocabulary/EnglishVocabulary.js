import MyFoot from "../myFoot/MyFoot";
import MyTab from "../myTab/MyTab";
import MyNavbar from "../navbar/Navbar";
import { Button, Col, Container , Row } from "react-bootstrap";
import EnglishVocabularyInUseBook from "../../assets/books/English Vocabulary In Use.pdf";
import EnglishVocabularyInUseImage from "../../assets/images/english-vocabulary-in-use.jpg";

function EnglishVocabulary(){
  return(
    <>
      <MyTab />
      <MyNavbar/>
      <Container>
        <Row className="p-5 g-5 mt-5">
          <h2
            className="animate__animated animate__backInRight fw-bold text-center"
            style={{
              color: "rgb(107, 107, 206)",
              padding: "10px",
              paddingLeft: "0",
              margin: "20px",
              marginLeft: "0",
              fontSize: "35px",
            }}
          >
            Boost Your Vocabulary:
          </h2>
          <p style={{width:"800px" , textAlign:"justify"}} className="m-auto mt-5">
            "Unlock the power of words with our handpicked selection of books designed to elevate your vocabulary. Whether you're a student, a professional, or simply a language enthusiast, these books will help you expand your word knowledge, sharpen your communication skills, and build confidence in any conversation. Dive into the world of language mastery and watch your vocabulary grow, one book at a time."
          </p>
        </Row>

        <Row style={{ alignItems: "center" }} className="p-5 g-5">
          <h2
            className="animate__animated animate__backInLeft text-center m-auto mt-5"
            style={{
              color: "rgb(107, 107, 206)",
              padding: "10px",
              paddingLeft: "0",
              margin: "20px",
              marginLeft: "0",
              fontSize: "25px",
              width:"700px"
            }}
          >
            Discover this must-read book to enhance your English language skills.
          </h2>
        </Row>

        <Row>
          <Col className="col-12 col-md-6 text-center">
            <img
              style={{width:"320px" , height:"400px"}}
              className="mt-5 img-fluid"
              src={EnglishVocabularyInUseImage}
              alt="Cover of English Vocabulary in Use"
            />
          </Col>
          <Col className="col-12 col-md-6">
            <h2 className="mt-5" style={{overflowY:"hidden", fontFamily:"Nerko One"}}>English Vocabulary InUse</h2>
            <p className="mt-5 fw-bold">Writter : <span className="pt-3 text-primary fw-bold">Michael McCarthy Felicity O'Dell</span></p>
            <a href={EnglishVocabularyInUseBook} target="_blank" rel="noreferrer">
              <Button className="mb-5 mt-5">Download The Book</Button>
            </a>
          </Col>
        </Row>
      </Container>
      <MyFoot/>
    </>
  )
}

export default EnglishVocabulary;
