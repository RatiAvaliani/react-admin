import {Navbar, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom"
import user  from './../image/user.png';

function Menu() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        src={user}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link className="nav-link" role="button" to="/">მთავარი</Link>
                        <Link className="nav-link" role="button" to="/shoes">ფეხსაცმელი</Link>
                        <Link className="nav-link" role="button" to="#link">ტანსაცმელი</Link>
                        <Link className="nav-link" role="button" to="#link">ჩანთები</Link>
                        <Link className="nav-link" role="button" to="#link">საათები</Link>
                        <Link className="nav-link" role="button" to="#link">ქამრები</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Menu;