import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "../App.css";
import { AiOutlineUser } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { Row,Col } from "react-bootstrap";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid className="mainnav">
        <Row>
          <Col lg={12} md={12} xl={12}>
          <Navbar.Brand href="#">CarJovo</Navbar.Brand>
     
          </Col>
          <Col lg={12} md={12} xl={12}>
          <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className='d-flex'>
            <Form.Control
              type="search"
              placeholder="Search Car"
              // className="me-2"
              aria-label="Search"
            />
            <Button className="searchbutton"><BiSearch/></Button>
          </Form>
        
        <div>
          <AiOutlineUser className="usericon" />
          <span className="login">Login / Register</span>
        </div></Navbar.Collapse>
          </Col>
        </Row>
  
      </Container>
    </Navbar>
    
  );
}

export default NavScrollExample;
