import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Header() {
    return (
        <header>
            
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">GSJA Mertiguna Sintang</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/renungan">Renungan</Nav.Link>
            <Nav.Link href="/jadwal">Jadwal Pelayanan</Nav.Link>
            <Nav.Link href="/about">Tentang Kami</Nav.Link>
            <NavDropdown title="Layanan" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/layanan/jemaat_baru">Jemaat Baru</NavDropdown.Item>
              <NavDropdown.Item href="/layanan/baptis">
                Pembaptisan
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/layanan/pernikahan">
                Pernikahan
              </NavDropdown.Item>
              <NavDropdown.Item href="/layanan/kematian">
                Kematian
              </NavDropdown.Item>
              <NavDropdown.Item href="/layanan/persembahan">
                Persembahan
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button style={{padding: '5px', margin: '5px'}} variant="outline-primary">Search</Button>
          </Form>
          <Nav.Link href="/api/user/login">Sign In</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </header>
    );
}

    
