import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import logo from '../images/logo-green.png';
import './Header.css';

class Header extends Component {
    render () {
        return (
            <Row className="show-grid header">
				<Col md={12}>
					<img src={logo} className="app-logo" alt="logo" />
				</Col>
				<Col md={12}>
					<h1 className="main-title">The best place to find information about movies</h1>
				</Col>
            </Row>
        )
    }
}

export default Header;