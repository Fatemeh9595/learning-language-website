import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CardBook.css"
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function CardBook({title, writter, img , id}){
    return(
        <>
          <Container>
               <Card className="card shadow">
                    <Card.Img src={img} />
                    <Card.Body className="d-flex flex-column justify-content-end align-items-center">
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>
                        writter : {writter}
                      </Card.Text>
                      <Button variant="primary">
                        <Link to={`/book/${id}`} className='startReadingBtn'>Start Reading</Link>
                      </Button>
                    </Card.Body>
                 </Card>
          </Container>
        </>
    )
}

export default CardBook