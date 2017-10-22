import React, { Component } from 'react';
import { Grid, Row, Col, Panel, Form, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';
import {API_KEY, API_SEARCH_URL} from '../config'
import './Body.css';


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
		this.getSearchResults();
	}
	getSearchResults() {
		axios.get(`${API_SEARCH_URL}${this.state.searchedWord}`)
        .then(res => {
            if (!!res && res.hasOwnProperty('data')) {
				const data = res.data;
				console.log(data);
                this.setState(data);
            }
        })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                // http.ClientRequest in node.js
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log('Error', error.message);
            }
			console.log(error.config);
        });
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