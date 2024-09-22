import { Button, Col, Container , Row } from "react-bootstrap"
import FrenchGrammerBook from "../../assets/books/modern-french-grammar-a-practical-guide.pdf"
import FrenchGrammeImage from "../../assets/images/frenchGrammer_.jpg"
import MyTab from "../myTab/MyTab"
import MyNavbar from "../navbar/Navbar"
import MyFoot from "../myFoot/MyFoot"
import grammer from "../../assets/images/grammer.svg"
import "./FrenchGrammer.css"



function FrenchGrammer(){
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
                   >French grammar guide</h2>
                   <p style={{ textAlign: "justify" }}>
                     Do you have a question about the correct usage of French punctuation or how to place adverbs in a sentence? If so, you've come to the right place. These pages are a complete French grammar guide filled with the rules of French usage. Each grammatical rule is explained in simple French with multiple examples, and when necessary, counter-examples. The grammatical rules covered by this guide are categorized below. French grammar can sometimes be challenging to master, but with the help of this guide, you should be able to review the rules of French usage and speak or write French with confidence.
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
               Comprehensive Summary of French Verb Grammar :
              </h2>
            </Row>
            <Row>
               <p className="frenchSummaryGrammerBox shadow text-center m-auto p-5 mb-5" style={{ textAlign: "justify" }}>
               French verbs are categorized into three groups: <br /> <b>-er, -ir, and -re</b> verbs. <br /> The conjugation of these verbs changes based on the subject pronoun ( <b>e.g., je, tu, il</b> ) and the tense (present, past, future, etc.). <br />
               Key tenses include: <br />
               <b>Present</b> : Describes actions happening now (e.g., je parle - I speak). <br />
               <b>Passé composé</b> : Used for completed actions, formed with avoir or être plus the past participle (e.g., j'ai parlé - I spoke). <br />
               <b>Imperfect</b> : Describes ongoing or habitual past actions (e.g., je parlais - I was speaking). <br />
               <b>Future</b> : Describes actions that will happen (e.g., je parlerai - I will speak). <br />
               <b>Conditional</b> : Expresses what would happen under certain conditions (e.g., je parlerais - I would speak). <br />
               <b>Subjunctive</b> : Used for doubt, emotion, or necessity in subordinate clauses (e.g., il faut que je parle - it's necessary that I speak). <br />
               French uses auxiliary verbs like avoir and être in compound tenses, with être primarily used for reflexive and motion verbs. <br />
               Irregular verbs such as être, avoir, aller, and faire don't follow regular conjugation patterns and need to be memorized separately. <br />
               Reflexive verbs involve actions the subject does to themselves and use être in compound tenses (e.g., je me suis lavé - I washed myself). <br />
               Verbs can also be negated by wrapping the verb with ne and pas (e.g., je ne parle pas - I do not speak). <br />
               Understanding these verb forms and how they fit into moods like indicative, imperative, conditional, and subjunctive is essential for accurate and fluent French communication. <br />
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
                       }}>Discover this must-read book to enhance your French Grammer skills."</h2>
              </Row>
              <Row>
                    <Col className="col-12 col-md-6 text-center">
                       <img style={{width:"320px" , height:"400px"}} className="mt-5 img-fluid" src={FrenchGrammeImage} />
                    </Col>
                    <Col className="col-12 col-md-6">
                       <h2 className="mt-5" style={{overflowY:"hidden", fontFamily:"Nerko One"}}>Modern French Grammer</h2>
                       <p className="mt-5 fw-bold">Writter : <span className="pt-3 text-primary fw-bold">Margaret Lang and Isabelle Perez</span></p>
                       <a href={FrenchGrammerBook} target='_blank'>
                          <Button className="mb-5 mt-5" >Download The Book</Button>
                       </a>
                    </Col>
              </Row>
          </Container>
           <MyFoot/>
        </>
    )
}


export default FrenchGrammer