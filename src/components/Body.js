import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Form, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import './Body.css';
import SearchForm from './SearchForm';


class Body extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchedWord: ""
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		event.preventDefault();
		console.log("clicked");
		console.log("searchedWord ", this.state.searchedWord);
	}
	getSearchResults() {

	}
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
								<FormControl 
									onChange={(event) => {this.setState({
										searchedWord: event.target.value
									})}} 
									className="custom-input" 
									type="search" 
									placeholder="movie keywords" 
								/>
							</FormGroup>
							{' '}
							<Button bsStyle="success" type="submit" onClick={(e) => this.handleClick(e)}>
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