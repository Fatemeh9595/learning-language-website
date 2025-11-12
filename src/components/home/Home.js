import MyTab from "../myTab/MyTab";
import MyNavbar from "../navbar/Navbar";
import "./Home.css";
import learningPic from "../../assets/images/teach.svg";
import readingPic from "../../assets/images/read.svg";
import { Container, Row, Col } from "react-bootstrap";
import MyFoot from "../myFoot/MyFoot";
import FeedBackForm from "../feedBackForm/FeedBackForm";
import CountUp from "react-countup";

// NEW: Motion
import { motion } from "motion/react";

/** Helpers to mimic your old animations **/

// Flip in on Y axis (approx for animateIn='flipInY')
const FlipInY = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, rotateX: -90 }}
    whileInView={{ opacity: 1, rotateX: 0 }}
    transition={{ duration: 0.6, ease: "easeOut", delay }}
    viewport={{ once: true, amount: 0.2 }}
    style={{ transformPerspective: "800px" }}
  >
    {children}
  </motion.div>
);

// Bounce in (approx for animateIn='bounce')
const BounceIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: -20, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ type: "spring", stiffness: 160, damping: 14, delay }}
    viewport={{ once: true, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

function Home() {
  return (
    <>
      <MyTab />
      <MyNavbar />
      <Container>
        <Row style={{ alignItems: "center" }} className="p-5 g-5">
          <Col className="col-12 col-lg-6">
            <h2
              style={{
                color: "blue",
                padding: "10px",
                paddingLeft: "0",
                margin: "20px",
                marginLeft: "0",
                fontSize: "25px",
              }}
            >
              Welcome to <span>LingoLift !</span>
            </h2>
            <p style={{ textAlign: "justify" }}>
              Unlock the power of language with Lingolift! Whether you're just
              starting your journey in English, German, or French or looking to
              refine your skills, you've come to the right place. At Lingolift,
              we believe learning a new language should be fun, engaging, and
              accessible for everyone. Why Choose Lingolift? Personalized
              Learning Experience: Our platform tailors lessons to your unique
              learning style and pace, ensuring you progress smoothly and
              confidently. Personalized Learning Experience: Our platform
              tailors lessons to your unique learning style and pace, ensuring
              you progress smoothly and confidently. Personalized Learning
              Experience: Our platform tailors lessons to your unique learning
              style and pace, ensuring you progress smoothly and confidently.
            </p>
          </Col>
          <Col className="col-12 col-lg-5 offset-lg-1">
            {/* alt text improved for a11y */}
            <img src={learningPic} className="img-fluid" alt="Student learning illustration" />
          </Col>
        </Row>

        <Row style={{ alignItems: "center" }} className="pt-5 mt-5 p-5 g-5">
          <Col className="col-12 col-lg-6">
            <img src={readingPic} className="img-fluid" alt="Student reading illustration" />
          </Col>
          <Col className="col-lg-5 offset-lg-1">
            <h2
              style={{
                color: "blue",
                padding: "10px",
                paddingLeft: "0",
                margin: "20px",
                marginLeft: "0",
                fontSize: "25px",
              }}
            >
              How to Properly Use These Websites :
            </h2>
            <p className="howUseWeb" style={{ textAlign: "justify" }}>
              Firstly, you need to set a specific time for your learning and
              stick to it. For example, make sure to dedicate at least one hour
              daily to learning and under no circumstances remove this hour from
              your daily routine, as learning is more effective through frequent
              but short sessions.
            </p>
            <p className="howUseWeb"> Make sure to repeat the words and sentences from the websites out loud to yourself.</p>
            <p className="howUseWeb">Find the best learning method for you to learn English.</p>
            <p className="howUseWeb">
              What is your weakness in the language? (Grammar, vocabulary
              memorization, etc.?) Focus on that.
            </p>
          </Col>
        </Row>
      </Container>

      <Container>
        <div className="p-5 g-5 text-center">
          <h1 className="myPinkColor pb-5">The number of our students :</h1>
          <CountUp className="fw-bold h1 text-primary" end={1547} start={0} duration={2.75} separator="" />
        </div>
      </Container>

      <Container fluid>
        <Row className="recommendedWebsites text-center mt-5 pt-5 mx-auto w-100">
          <Col>
            <h2
              className="bg-body-tertiary p-5"
              style={{
                fontSize: "50px",
                fontWeight: "bold",
                overflowY: "hidden",
              }}
            >
              Top Websites to Practice English Online :
            </h2>
          </Col>
        </Row>

        {/* Section 1 */}
        <Row className="d-flex align-items-center m-5 p-5">
          <Col sm={12} xl={6}>
            <FlipInY>
              <p className="fs-4 p-2 m-4" style={{ textAlign: "justify" }}>
                <span className="famousWeb">
                  <br />
                  <br />{" "}
                  <a className="famousWeb" href="https://www.duolingo.com/">
                    1 -Duolingo
                  </a>{" "}
                </span>
                offers a fun and engaging way to learn English. Through its
                game-like interface, users can practice vocabulary, grammar, and
                pronunciation in a variety of contexts. The platform adapts to
                your learning pace, making it perfect for beginners and advanced
                learners alike.
              </p>
            </FlipInY>
          </Col>
          <Col sm={12} xl={6}>
            <BounceIn>
              <img
                style={{ width: "500px", height: "200px" }}
                className="img-fluid m-4 pt-2 mb-0"
                src="https://cdn-images-1.medium.com/v2/resize:fit:800/0*Sv34Fa2E0360PEhZ.jpg"
                alt="Duolingo app promo"
              />
            </BounceIn>
          </Col>
        </Row>
        <hr />

        {/* Section 2 */}
        <Row className="d-flex align-items-center m-5 p-5">
          <Col sm={12} xl={6}>
            <FlipInY>
              <p className="fs-4 p-2 m-4" style={{ textAlign: "justify" }}>
                <span className="famousWeb">
                  <br />
                  <br />
                  <a className="famousWeb" href="https://www.bbc.co.uk/learningenglish/">
                    2- BBC Learning English
                  </a>{" "}
                </span>
                is a comprehensive resource offering free audio, video, and text
                materials. From grammar lessons to vocabulary practice, it
                provides a wealth of information to help you improve your English.
                Their content is updated regularly, covering a wide range of
                topics that cater to all learning levels.
              </p>
            </FlipInY>
          </Col>
          <Col sm={12} xl={6}>
            <BounceIn>
              <img
                style={{ width: "500px", height: "200px" }}
                className="img-fluid m-4 pt-2 mb-0"
                src="https://allesl.com/wp-content/uploads/2018/05/bbc-learning-english.png"
                alt="BBC Learning English screenshot"
              />
            </BounceIn>
          </Col>
        </Row>
        <hr />

        {/* Section 3 */}
        <Row className="d-flex align-items-center m-5 p-5">
          <Col sm={12} xl={6}>
            <FlipInY>
              <p className="fs-4 p-2 m-4" style={{ textAlign: "justify" }}>
                <span className="famousWeb">
                  <br />
                  <br /> <a className="famousWeb" href="https://quizlet.com/it">3- Quizlet</a>{" "}
                </span>
                is a versatile tool that allows users to create flashcards,
                quizzes, and games to memorize English vocabulary and grammar. It
                also offers pre-made study sets covering a variety of topics,
                making it an excellent resource for personalized learning.
              </p>
            </FlipInY>
          </Col>
          <Col sm={12} xl={6}>
            <BounceIn>
              <img
                style={{ width: "500px", height: "200px" }}
                className="img-fluid m-4 pt-2 mb-0"
                src="https://academic-englishuk.com/wp-content/uploads/2020/01/Quizlet-AEUK-980x578.png"
                alt="Quizlet screenshot"
              />
            </BounceIn>
          </Col>
        </Row>
        <hr />

        {/* Section 4 */}
        <Row className="d-flex align-items-center m-5 p-5 ">
          <Col sm={12} xl={6}>
            <FlipInY>
              <p className="fs-4 p-2  m-4" style={{ textAlign: "justify" }}>
                <span className="famousWeb">
                  <br />
                  <br /> <a className="famousWeb" href="https://tandem.net/">4- Tandem</a>{" "}
                </span>
                connects language learners with native speakers around the world
                for language exchange. This app is perfect for practicing
                conversational English in a natural and engaging way. You can
                chat, make voice calls, or even video call to enhance your
                speaking and listening skills.
              </p>
            </FlipInY>
          </Col>
          <Col sm={12} xl={6}>
            <BounceIn>
              <img
                style={{ width: "500px", height: "200px" }}
                className="img-fluid m-4 pt-2 mb-0"
                src="https://upload.wikimedia.org/wikipedia/en/8/81/Tandem_logo.png"
                alt="Tandem logo"
              />
            </BounceIn>
          </Col>
        </Row>
        <hr />

        <FeedBackForm />
      </Container>

      <MyFoot />
      {/* <BooksData/> */}
    </>
  );
}

export default Home;
