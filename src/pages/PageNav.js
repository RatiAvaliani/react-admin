import {Col, Nav} from 'react-bootstrap';

function PageNav ({pages}) {
    return (
        <Col lg={2}>
            <Nav className="flex-column left-menu">
                <Nav.Link href="/asdasd">asasd</Nav.Link>


                {

                    pages.map((data) => {
                        {
                            console.log(data.title)
                        }
                        <Nav.Link key={data.path} href="/{data.path}">{data.title}</Nav.Link>
                    })
                }
            </Nav>
        </Col>
    );
}

export default PageNav;
