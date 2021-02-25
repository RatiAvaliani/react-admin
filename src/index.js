import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './sections/Menu';
import Shoes from './pages/Shoes';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Category from "./pages/Category";
import Container from 'react-bootstrap/Container';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

ReactDOM.render(
    <Router>
        <Menu />
        <Container fluid>
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/shoes" exact component={Shoes}></Route>
                <Route path="/shoes/category" exact component={Category}></Route>
            </Switch>
        </Container>
    </Router>,
    document.getElementById('root')
);

