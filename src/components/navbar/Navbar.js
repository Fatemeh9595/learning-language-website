import "./Navbar.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';



function MyNavbar(){

  const expand ="md"

  return(
      <>
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container fluid>
            <Navbar.Brand href="./#/" ><p style={{fontFamily:"Nerko One" , fontSize:"70px"}} className="myPinkColor px-5 animate__animated animate__bounce" >lingolift</p></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <p>Languages</p>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-5" >
                  <NavDropdown
                      title="English"
                      id={`en-offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="./#/english-grammer">
                      Grammer
                    </NavDropdown.Item>
                    <NavDropdown.Item href="./#/english-vocabulary">
                      Vocabulary
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                      title="German"
                      id={`ge-offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="./#/german-grammer">Grammar</NavDropdown.Item>
                    <NavDropdown.Item href="./#/german-vocabulary">
                      Vocabulary
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown
                      title="French"
                      id={`fr-offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="./#/french-grammer">Grammar</NavDropdown.Item>
                    <NavDropdown.Item href="./#/french-vocabulary">
                      Vocabulary
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </>
  )
}



export default MyNavbar