import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Menu() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/">
                            <Nav.Link href="/">მთავარი</Nav.Link>
                        </Link>
                        <Link to="/shoes">
                            <Nav.Link href="#home">ფეხსაცმელი</Nav.Link>
                        </Link>
                        <Link to="/">
                            <Nav.Link href="#link">ტანსაცმელი</Nav.Link>
                        </Link>
                        <Link to="/">
                            <Nav.Link href="#link">ჩანთები</Nav.Link>
                        </Link>
                        <Link to="/">
                            <Nav.Link href="#link">საათები</Nav.Link>
                        </Link>
                        <Link to="/">
                            <Nav.Link href="#link">ქამრები</Nav.Link>
                        </Link>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Menu;