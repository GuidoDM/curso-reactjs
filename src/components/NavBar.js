
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import CarWidget from './CarWidget';

const NavBar = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Yury´s Boutique</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Inicio</Nav.Link>
                    <Nav.Link href="#action2">Chamarras</Nav.Link>
                    <Nav.Link href="#action3">Shorts</Nav.Link>
                    <NavDropdown title="Jeans" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Pescadores</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Capri</NavDropdown.Item>
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>*/}
                    </NavDropdown>
                    {/* <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link>  */}
                </Nav>
                {/* <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    /> */}
                    <Button variant="outline-success"><CarWidget /></Button>
                {/* </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar