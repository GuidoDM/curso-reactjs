
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import CarWidget from './CarWidget';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                {/* <Navbar.Brand href="#">Yury´s Boutique</Navbar.Brand> */}
                <ul className='navbar-nav'> 
                    <li className='nav-item mx-3'><Link to="/"> Yury´s Boutique </Link></li>
                
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    
                       
                    <li className='nav-item mx-3'><NavLink to="/"> Inicio </NavLink></li> 
                    <li className='nav-item mx-3'><Link to="/categoria/Chamarra">Chamarras</Link></li>
                    {/* <Nav.Link href="#action2">Chamarras</Nav.Link> */}
                    <li className='nav-item mx-3'><NavLink to="/categoria/Short">Shorts</NavLink></li>
                    <li className='nav-item mx-3'>
                    <NavDropdown title="Jeans" id="navbarScrollingDropdown">
                    <ul className='navbar-nav'>     
                    <li className='nav-item mx-3'><NavLink to="/categoria/JeansPescadores">Pescadores</NavLink></li>
                    <li className='nav-item mx-3'><NavLink to="/categoria/JeansCapri">Capri</NavLink></li>
                        {/* <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>*/}
                    </ul>
                    </NavDropdown>
                    </li>
                    {/* <Nav.Link href="#" disabled>
                    Link
                    </Nav.Link>  */}
                    
                </Nav>
                </ul>
                {/* <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    /> */}
                    <Link to="/carrito"> <Button variant="outline-success"><CarWidget /></Button> </Link>
                {/* </Form> */}
               
            
            </Container>
        </Navbar>
    )
}

export default NavBar