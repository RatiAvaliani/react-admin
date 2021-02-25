import {Col, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";

function PageNav (props) {
    let {page, pages} = props;

    return (
        <Col lg="1" className="p-0 left-menu-top">
            <Nav className="flex-column left-menu">
                {
                    pages.map(
                        (data) => <Link className="nav-link" role="button" key={data.path} to={page + '/' +data.path}>{data.title}</Link>
                    )
                }
            </Nav>
        </Col>
    );
}

export default PageNav;
