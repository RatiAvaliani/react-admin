import {Button, Modal} from "react-bootstrap";
import React from "react";
import './../css/Global.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import './../css/Category.css'
import { MDBDataTableV5 } from 'mdbreact';

function disable (id) {

}

function redirect () {

}

function Categories () {
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (_this) => {
        console.log(_this);
        return setShow(true);
    }
    const columns = [
        {
            label: 'დასახელება',
            field: 'title',
            width: 100
        },
        {
            label: 'ამ ჯგუფშია',
            field: 'inCategory',
            width: 150
        },
        {
            label: 'დეაქტივაცია',
            field: 'deactivation',
            width: 20
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
    ];

    const [datatable, setDatatable] = React.useState({
        columns: columns,
        rows: [
            {
                title: 'Warren Cap Ox',
                inCategory: '120',
                deactivation:  <i className="fa fa-minus-square" onClick={() => disable(1)}></i>,
                edit: <i className="fa fa-pen-square" onClick={() => handleShow({title: 'Warren Cap Ox', id: 1})}></i>,
                gotToLink: <i className="fa fa-link" onClick={() => redirect(1)}></i>
            },
        ],
    });

    return <>
        <MDBDataTableV5 hover entriesOptions={[5, 20, 25]} entries={5} pagesAmount={4} data={datatable} fullPagination />

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>;
}

export default Categories;