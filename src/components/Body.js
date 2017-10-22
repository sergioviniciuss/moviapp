import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Form, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import './Body.css';


class Body extends Component {
    render () {
        return (
            <Grid>
                <Row className="show-grid">
					<Col md={12} className="center-align">
						<Panel className="main-bg-color custom-panel" header="MOVIE DATA SEARCH">
						<Form inline>
							<FormGroup controlId="formInlineName">
								<ControlLabel>Search for:</ControlLabel>
								{' '}
								<FormControl className="custom-input" type="search" placeholder="movie keywords" />
							</FormGroup>
							{' '}
							<Button bsStyle="success" type="submit">
								Search
							</Button>
						</Form>
						</Panel>
					</Col>
					<Col md={12}>
						search result
					</Col>
                </Row>
            </Grid>
        )
    }
}

export default Body;