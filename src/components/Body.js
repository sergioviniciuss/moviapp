import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Body extends Component {
    render () {
        return (
            <Grid>
                <Row className="show-grid">
					<Col md={12}>
						search
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