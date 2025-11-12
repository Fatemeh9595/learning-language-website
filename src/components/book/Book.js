import MyTab from "../myTab/MyTab";
import { useParams } from "react-router-dom";
import { booksData } from "../../data";
import MyNavbar from "../navbar/Navbar";
import { Button, Col, Container, Row } from "react-bootstrap";
import MyFoot from "../myFoot/MyFoot";

function Book() {
  const { bookId } = useParams();
  // Ensure strict equality by normalizing types
  const bookInfo = booksData.find((book) => String(book.id) === String(bookId));

  if (!bookInfo) {
    return (
      <div>
        <MyTab />
        <MyNavbar />
        <Container className="py-5"><h2>Book not found</h2></Container>
        <MyFoot />
      </div>
    );
  }

  return (
    <div>
      <MyTab />
      <MyNavbar />
      <Container>
        <Row>
          <Col className="col-12 col-md-6 text-center">
            <img
              style={{ width: "320px", height: "400px" }}
              className="mt-5 img-fluid"
              src={bookInfo.img}
              alt={bookInfo.title ? `${bookInfo.title} cover` : "Book cover"}
            />
          </Col>
          <Col className="col-12 col-md-6">
            <h2 className="mt-5" style={{ overflowY: "hidden", fontFamily: "Nerko One" }}>
              {bookInfo.title}
            </h2>
            <p className="mt-5 fw-bold">
              Writter : <span className="pt-3 text-primary fw-bold">{bookInfo.writter}</span>
            </p>
            <p className="mt-3">
              <span className="fw-bold">Story :</span> {bookInfo.story}
            </p>
            <a href={bookInfo.download} target="_blank" rel="noreferrer">
              <Button className="mb-5 mt-5">Download The Book</Button>
            </a>
          </Col>
        </Row>
      </Container>
      <MyFoot />
    </div>
  );
}

export default Book;
