import React, { Component } from 'react';
import { Row, Col, Grid } from 'react-bootstrap';
import logo from '../images/logo-green.png';
import './Header.css';

class Header extends Component {
    render () {
        return (
            <Grid className="full-width header">
                <Row className="show-grid">
                    <Col md={12}>
                        <img src={logo} className="app-logo" alt="logo" />
                    </Col>
                    <Col md={12}>
                        <h1 className="main-title">The best place to find information about your favorite movies</h1>
                    </Col>
                </Row>
            </Grid>
        )
    }
}

export default Header;