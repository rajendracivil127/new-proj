import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form } from 'react-bootstrap';
import { Dropdown } from 'bootstrap';



function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">eduonix-logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link> */}
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">explore</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Form.Control size="lg" type="text" placeholder="search here" />
            <botton>BsSearch</botton>
            import Dropdown from 'react-bootstrap/Dropdown';


    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Dropdown Button
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">certification program in full stack development </Dropdown.Item>
        <Dropdown.Item href="#/action-2">certification program in bussiness strategy</Dropdown.Item>
        <Dropdown.Item href="#/action-3">certification program in digital marketing</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

            <CPopover
  title="Refer & earn"
  content="Refer upskilling content to your friends and family"
  placement="right"
>
  <CButton color="danger" size="lg">
    Click to toggle popover
  </CButton>
</CPopover>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;