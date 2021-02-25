import {Row, Col} from 'react-bootstrap';
import PageNav from './PageNav';
import Category from "./Category";
import './../css/leftMenu.css'
import './../css/Global.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import { MDBDataTableV5 } from 'mdbreact';
import React from "react";

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

function Pagination () {
    const [datatable, setDatatable] = React.useState({
        columns: [
            {
                label: 'სახელი',
                field: 'name',
                width: 100
            },
            {
                label: 'ფასი',
                field: 'price',
                width: 150
            },
            {
                label: 'მოგება',
                field: 'priceWin',
                width: 150
            },
            {
                label: 'ფასდაკლება',
                field: 'priceOff',
                width: 150
            },
            {
                label: 'დარჩა',
                field: 'left',
                width: 150
            },
            {
                label: 'კატეგორია',
                field: 'category',
                width: 150
            },
            {
                label: 'ზომა',
                field: 'size',
                width: 270,
            },
            {
                label: 'ბრენდი',
                field: 'brand',
                sort: 'asc',
                width: 100,
            },
            {
                label: 'ფერი',
                field: 'color',
                width: 150,
            },
            {
                label: 'სტილი',
                field: 'styles',
                width: 100,
            },
            {
                label: 'მატერია',
                field: 'materials',
                width: 100,
            },
            {
                label: 'დეაქტივაცია',
                field: 'deactivation',
                width: 100,
            },
            {
                label: 'რედაქტირება',
                field: 'edit',
                width: 100,
            },
            {
                label: 'ბმულზე გადასვლა',
                field: 'gotToLink',
                width: 100,
            }
        ],
        rows: [
            {
                name: 'Warren Cap Ox',
                price: '120₾',
                priceOff: '78%',
                left: '24',
                category: 'Stacked heel',
                size: '11.5',
                brand: 'Cole Haan',
                color: 'Black, Ten',
                styles: 'Oxford',
                materials: 'Leather',
                deactivation:  <i className="fa fa-minus-square"></i>,
                edit: <i className="fa fa-pen-square"></i>,
                gotToLink: <i className="fa fa-link"></i>
            },
        ],
    });

    return <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={15} pagesAmount={4} data={datatable} fullPagination />;
}

function Shoes () {
    return (
        <Row>
            <Col lg="12">
                <Row>
                    <Col lg="12" className="block-example border border-bottom-0 border-primary m-0">
                        <h4 className="mt-3">ფეხსაცმელები</h4>
                        <hr/>
                        <Pagination/>
                    </Col>
                    <Col lg="6" className="block-example border border-right-0 border-primary m-0">
                        <h4 className="mt-3">კატეგირიები</h4>
                        <hr/>
                        <Category/>
                    </Col>
                    <Col lg="6" className="block-example border  border-primary m-0">
                        <h4 className="mt-3">ზომები</h4>
                        <hr/>
                        <Category/>
                    </Col>
                    <Col lg="6" className="block-example border border-top-0 border-primary m-0">
                        <h4 className="mt-3">ზომები</h4>
                        <hr/>
                        <Category/>
                    </Col>
                    <Col lg="6" className="block-example border-right border-bottom border-primary m-0">
                        <h4 className="mt-3">სიგანეები</h4>
                        <hr/>
                        <Category/>
                    </Col>
                    <Col lg="6" className="block-example border border-top-0 border-primary m-0">
                        <h4 className="mt-3">სტილები</h4>
                        <hr/>
                        <Category/>
                    </Col>
                    <Col lg="6" className="block-example border-right border-bottom border-primary m-0">
                        <h4 className="mt-3">მასალა</h4>
                        <hr/>
                        <Category/>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
}

export default Shoes;
