import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Addmenu from './AddMenu';

import { useState } from 'react';
import AddMenu from './AddMenu';
import { Button, Form, FormControl } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';



function NavbarComp() {

//     const [menuDisplay, setmenuDisplay] = useState(false);

//     const handleDisplayMenu = () => {
//         setmenuDisplay(true);
//     }

  return (

//     <Navbar className="navbar navbar-dark bg-dark">

//           <Navbar.Brand href="#home">Your Logo</Navbar.Brand>

//           <Navbar.Toggle aria-controls="basic-navbar-nav" />

//           <Navbar.Collapse id="basic-navbar-nav">

//             <Nav className="mr-auto">




//               <NavLink to = "/menu" className="nav-link">Menu</NavLink>

//               <NavLink to="/Category" className="nav-link">Category</NavLink>

//               <Nav.Link href="#dish">Dish</Nav.Link>

//             </Nav>

//             <Form>

//           <div className="ml-auto">

//             <FormControl type="text" placeholder="Search" className="mr-sm-2" />

//             <Button variant="outline-primary">Search</Button>

//           </div>

//         </Form>

//           </Navbar.Collapse>

//         </Navbar>

    <div>
    
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>My Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href='/'>Home</Nav.Link>
            
            <NavDropdown title="Add" id="collasible-nav-dropdown">
              <NavDropdown.Item href='/AddMenu'>Add Menu</NavDropdown.Item>
              <NavDropdown.Item href='/AddCategory'>
                Add Category
              </NavDropdown.Item>
              <NavDropdown.Item href='/AddDish'>Add Dish</NavDropdown.Item>
              
              
            </NavDropdown>
            <NavDropdown title="Delete" id="collasible-nav-dropdown">
              <NavDropdown.Item href='DeleteCategory'>Delete category</NavDropdown.Item>
              <NavDropdown.Item href='DeleteDish'>
                Delete dish
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Edit" id="collasible-nav-dropdown">
              <NavDropdown.Item href='EditDish'>Edit Dish</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href='/ShowMenu'>Show</Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link>Contact us</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    </div>
    
  );
}

export default NavbarComp;