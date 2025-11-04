import { Button, Col, Container , Row } from "react-bootstrap"
import GermanGrammerBook from "../../assets/books/german-grammer-book.pdf"
import GermanGrammeImage from "../../assets/images/german-grammer.jpg"
import MyTab from "../myTab/MyTab"
import MyNavbar from "../navbar/Navbar"
import MyFoot from "../myFoot/MyFoot"
import grammer from "../../assets/images/grammer.svg"
import "./GermanGrammer.css"



function GermanGrammer(){
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
                 Grammar is the system of rules that governs how words are structured and used in a language to convey meaning. It includes the organization of words into sentences, the correct use of parts of speech (such as nouns, verbs, and adjectives), and the application of tenses, punctuation, and sentence structure. Grammar helps ensure that communication is clear and consistent, allowing speakers and writers to express ideas in a way that others can understand.
                 </p>
              </Col>
              <Col className="col-12 col-lg-5 offset-lg-1">
                 <img src={grammer} className="img-fluid" 
                  alt="image"
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
                   >German grammar guide</h2>
                   <p style={{ textAlign: "justify" }}>
                      Do you have a question about the correct usage of German punctuation or how to structure a sentence with verbs? If so, you've come to the right place. These pages offer a complete guide to German grammar, covering the rules of usage in a clear and straightforward manner. Each grammatical rule is explained in simple German with numerous examples, and where necessary, counter-examples. The grammatical rules provided in this guide are categorized below. German grammar can be complex at times, but with the help of this guide, you will be able to review the rules and confidently speak or write in German.
                    </p>
                </Col>
                <Col></Col>
            </Row>
            <Row style={{marginBottom:"50px"}}>
              <h2
                 className="animate__animated animate__backInRight"
                 style={{
                  color: "rgb(107, 107, 206)",
                  paddingLeft: "0",
                  marginLeft: "0",
                  fontSize: "25px",
                  textAlign:"center",
                  marginTop:"50px",
                }}
              >
               Comprehensive Summary of German Verb Grammar :
              </h2>
            </Row>
            <Row>
               <p className="germanSummaryGrammerBox shadow text-center m-auto p-5 mb-5" style={{ textAlign: "justify" }}>
                 <b>1. Verb Conjugation</b> <br />
                 <b>Person and Number :</b> Verbs change based on the subject (I, you, he/she/it, we, they). <br />
                 <b>Person and Number :</b> gehen (to go) _ ich gehe, du gehst, er geht.<br />
                 <b>Tenses :</b> Six tenses indicate time.<br />
                 <b>Present :</b> ich gehe (I go)<br />
                 <b>Past Simple :</b> ich ging (I went)<br />
                 <b>Present Perfect :</b> ich bin gegangen (I have gone)<br />
                 <b>Future I :</b> ich werde gehen (I will go)<br />
                 <b>Moods:</b><br />
                 <b>Indicative:</b> Standard statements/questions.<br />
                 <b>Imperative:</b> Commands (Geh! _ Go!)<br />
                 <b>Subjunctive I/II:</b> Hypotheticals/wishes.<br />
                 <b>2. Regular and Irregular Verbs</b><br />
                 <b>Regular Verbs:</b> Follow a predictable pattern.<br />
                 <b>Example:</b> spielen (to play) _ ich spiele, du spielst.<br />
                 <b>Irregular Verbs:</b> Have unique forms.<br />
                 <b>Example:</b> gehen (to go) _ ich gehe, du gehst.<br />
                 <b>3. Separable and Inseparable Verbs</b><br />
                 <b>Separable Verbs:</b> Prefix separates from the root.<br />
                 <b>Example:</b> ankommen (to arrive) _ ich komme an.<br />
                 <b>Inseparable Verbs:</b> Prefix stays attached.<br />
                 <b>Example:</b> verstehen (to understand) _ ich verstehe.<br />
                 <b>4. Modal Verbs</b><br />
                 Modify the main verb to express necessity or ability.<br />
                 Example: können (can) _ Ich kann schwimmen (I can swim).<br />
                 <b>5. Infinitive Constructions</b><br />
                 Infinitive with "zu": Express purpose.<br />
                 <b>Example:</b> Ich habe vergessen, das Buch zu lesen (I forgot to read the book).<br />
                 <b>Infinitive Clauses:</b> Used with modal verbs.<br />
                 <b>Example:</b> Er hat vor, nach Berlin zu fahren (He plans to go to Berlin).<br />
                 <b>6. Verb Placement</b><br />
                 <b>Main Clauses:</b> Verb is in the second position.<br />
                 <b>Example:</b> Ich lese ein Buch (I am reading a book).<br />
                 <b>Subordinate Clauses:</b> Verb is at the end.<br />
                 <b>Example:</b> Ich glaube, dass er das Buch liest (I believe he is reading the book).<br />
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
                       }}>Discover this must-read book to enhance your German Grammer skills."</h2>
              </Row>
              <Row>
                    <Col className="col-12 col-md-6 text-center">
                       <img style={{width:"320px" , height:"400px"}} className="mt-5 img-fluid" src={GermanGrammeImage} />
                    </Col>
                    <Col className="col-12 col-md-6">
                       <h2 className="mt-5" style={{overflowY:"hidden", fontFamily:"Nerko One"}}>Basic German : A grammer and workbook</h2>
                       <p className="mt-5 fw-bold">Writter : <span className="pt-3 text-primary fw-bold">Heiner Schenke and Karen Seago</span></p>
                       <a href={GermanGrammerBook} target='_blank'>
                          <Button className="mb-5 mt-5" >Download The Book</Button>
                       </a>
                    </Col>
              </Row>
          </Container>
           <MyFoot/>
        </>
    )
}


export default GermanGrammer