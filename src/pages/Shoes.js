import {Nav, Row, Col} from 'react-bootstrap';
import PageNav from './PageNav';
import './../css/leftMenu.css'

const pages = [
    {
        "path" :"category",
        "title" : "კატეგორიები"
    },
    {
        "path" : "size",
        "title" : "ზომები"
    },
    {
        "path" : "width",
        "title" : "სიგანეები"
    },
    {
        "path" : "brand",
        "title": "ბრენდები"
    },
    {
        "path" : "color",
        "title" : "ფერები"
    },
    {
        "path" : "styles",
        "title" : "სტილები"
    },
    {
        "path" : "materials",
        "title" : "მასალა"
    },
    {
        "path" : "theme",
        "title" : "თემები"
    }
];

function Shoes () {
    return (
        <Row>
            <PageNav pages={pages}/>
            <Col lg="10">

            </Col>
        </Row>
    );
}

export default Shoes;
