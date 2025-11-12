import { Button, Col, Container , Row } from "react-bootstrap";
import EnglishGrammerInUseBook from "../../assets/books/English-Grammar-in-Use.pdf";
import EnglishGrammerInUseImage from "../../assets/images/english-grammer-in-use.jpg";
import MyTab from "../myTab/MyTab";
import MyNavbar from "../navbar/Navbar";
import MyFoot from "../myFoot/MyFoot";
import Table from 'react-bootstrap/Table';
import grammer from "../../assets/images/grammer.svg";

function EnglishGrammer(){
  return(
    <>
      <MyTab />
      <MyNavbar/>
      <Container>
        <Row style={{ alignItems: "center" }} className="p-5 g-5">
          <Col className="col-12 col-lg-6">
            <h2
              className="animate__animated animate__backInLeft"
              style={{
                color: "rgb(107, 107, 206)",
                padding: "10px",
                paddingLeft: "0",
                margin: "20px",
                marginLeft: "0",
                fontSize: "25px",
              }}
            >
              What Is Grammar?
            </h2>
            <p style={{ textAlign: "justify" }}>
              Grammar is the system of rules that governs how words are structured and used in a language to convey meaning. It includes the organization of words into sentences, the correct use of parts of speech (such as nouns, verbs, and adjectives), and the application of tenses, punctuation, and sentence structure. Grammar helps ensure that communication is clear and consistent, allowing speakers and writers to express ideas in a way that others can understand. In English, grammar also dictates how words agree in number and tense, how they are modified, and how sentences are punctuated.
            </p>
          </Col>
          <Col className="col-12 col-lg-5 offset-lg-1">
            <img
              src={grammer}
              className="img-fluid"
              alt="Illustration representing grammar rules"
            />
          </Col>
        </Row>

        <Row style={{ alignItems: "center" }} className="p-5 g-5">
          <Col className="col-12 col-lg-6">
            <h2
              className="animate__animated animate__backInRight"
              style={{
                color: "rgb(107, 107, 206)",
                padding: "10px",
                paddingLeft: "0",
                margin: "20px",
                marginLeft: "0",
                fontSize: "25px",
              }}
            >
              English grammar guide
            </h2>
            <p style={{ textAlign: "justify" }}>
              Do you have a question about the correct usage of the semicolon or how to place adverbs in a sentence? If so, you've come to the right place. These pages are a complete English grammar guide filled with the rules of English usage. Each grammatical rule is explained in plain English with several examples, and when needed, counter-examples. The grammatical rules covered by this guide are categorized below. English grammar is not always easy to understand, but by using this guide you should be able to remind yourself of the rules of English usage and speak or write English with confidence.
            </p>
          </Col>
          <Col></Col>
        </Row>

        <Row style={{marginBottom:"100px"}}>
          <h2
            className="animate__animated animate__backInRight"
            style={{
              color: "rgb(107, 107, 206)",
              paddingLeft: "0",
              marginLeft: "0",
              fontSize: "25px",
              textAlign:"center",
              marginTop:"150px",
            }}
          >
            A Comprehensive Overview of English Verb Grammar :
          </h2>
        </Row>

        <Row style={{marginBottom:"100px"}}>
          <Table style={{marginTop:"100px" , width:"1000px" , textAlign:"center" , margin:"auto"}} striped bordered hover>
            <thead>
              <tr>
                <th> Category</th>
                <th>Description</th>
                <th>Examples</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Nouns</td><td>Words that name people, places, things, or ideas</td><td>car, house, love, freedom, teacher</td></tr>
              <tr><td>Pronouns</td><td>Words that replace nouns</td><td>he, she, it, they, we, I</td></tr>
              <tr><td>Verbs</td><td>Words that express actions or states</td><td>run, eat, is, become, drive, swim</td></tr>
              <tr><td>Adjectives</td><td>Words that describe nouns or pronouns</td><td>big, happy, red, tall, beautiful, fast</td></tr>
              <tr><td>Adverbs</td><td>Words that describe verbs, adjectives, or other adverbs</td><td>quickly, very, well, silently, carefully</td></tr>
              <tr><td>Prepositions</td><td>Words that show relationships between words</td><td>on, in, under, between, during, near</td></tr>
              <tr><td>Conjunctions</td><td>Words that connect clauses, sentences, or words</td><td>and, but, or, because, although, if</td></tr>
              <tr><td>Interjections</td><td>Words used to express emotions or reactions</td><td>wow, oh, ouch, hey, yikes</td></tr>
              <tr><td>Articles</td><td>Words that define a noun as specific or unspecific</td><td>the, a, an</td></tr>
              <tr><td>Determiners</td><td>Words that specify which noun is being referred to</td><td>this, that, these, those, many, few</td></tr>
              <tr><td>Modal Verbs</td><td>Verbs used to indicate possibility, necessity, or ability</td><td>can, may, should, must, would</td></tr>
              <tr><td>Contractions</td><td>Shortened forms of words</td><td>can't (cannot), won't (will not), I'm (I am)</td></tr>
              <tr><td>Phrasal Verbs</td><td>Verbs combined with prepositions or adverbs</td><td>look after, take off, give up, break down</td></tr>
            </tbody>
          </Table>
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
            Discover this must-read book to enhance your English Grammer skills.
          </h2>
        </Row>

        <Row>
          <Col className="col-12 col-md-6 text-center">
            <img
              style={{width:"320px" , height:"400px"}}
              className="mt-5 img-fluid"
              src={EnglishGrammerInUseImage}
              alt="Cover of English Grammar in Use"
            />
          </Col>
          <Col className="col-12 col-md-6">
            <h2 className="mt-5" style={{overflowY:"hidden", fontFamily:"Nerko One"}}>English Grammer In Use</h2>
            <p className="mt-5 fw-bold">Writter : <span className="pt-3 text-primary fw-bold">Raymond Murphy</span></p>
            <a href={EnglishGrammerInUseBook} target="_blank" rel="noreferrer">
              <Button className="mb-5 mt-5">Download The Book</Button>
            </a>
          </Col>
        </Row>
      </Container>
      <MyFoot/>
    </>
  )
}

export default EnglishGrammer;
