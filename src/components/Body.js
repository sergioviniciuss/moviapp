import React, { Component } from 'react';
import { Thumbnail, Grid, Row, Col, Panel, Form, ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import axios from 'axios';
import { API_SEARCH_URL, API_URL_DISCOVER_MOST_RANKED, SUGGESTIONS_ITEMS_QTY } from '../config'
import './Body.css';
import MostRatedThumbs from './MostRatedThumbs';
import ResultThumb from './ResultThumb';
import Alert from './Alert';


class Body extends Component {
	constructor(props) {
		super(props);
		this.state = {
			searchedWord: "",
			results: [],
			suggestions: [],
			showAlert: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(event) {
		event.preventDefault();
		this.getSearchResults();
	}
	getSuggestions() {
		axios.get(API_URL_DISCOVER_MOST_RANKED)
        .then(res => {
            if (!!res && res.hasOwnProperty('data')) {
				const data = res.data;
				this.setState({
					suggestions: data.results
				})
            }
        })
        .catch(function (error) {
            this.catchAPIErrors(error);
        });
	}
	getSearchResults() {
		axios.get(`${API_SEARCH_URL}${this.state.searchedWord}`)
        .then(res => {
            if (!!res && res.hasOwnProperty('data')) {
				const data = res.data;
				this.setState(data);
				console.log(data.total_results);
				this.setState({
					showAlert: data.total_results > 0 ? false : true
				})
            }
        })
        .catch(function (error) {
			this.catchAPIErrors(error);
        });
	}
	catchAPIErrors(error) {
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
	}
	componentWillMount() {
		this.getSuggestions();
	}
    render () {
		const { results, suggestions, showAlert } = this.state;
        return (
            <Grid>
				<Panel className="main-bg-color custom-panel" header={`${SUGGESTIONS_ITEMS_QTY} MOST POPULAR MOVIES CURRENTLY`}>
					<Row className="show-grid results-row suggestions">
						{
							suggestions.slice(0, SUGGESTIONS_ITEMS_QTY).map((item) => 
								<MostRatedThumbs 
									key={item.id} 
									title={item.title}
									originalTitle={item.original_name}
									image={item.backdrop_path}
									imagePoster={item.poster_path}
									releaseDate={item.release_date}
								/>
							)
						}
					</Row>
				</Panel>
				<Panel className="main-bg-color custom-panel" header="MOVIE DATA SEARCH">
					<Row className="show-grid">
						<Col md={12}>
							<Alert 
								showAlert={showAlert} 
								type="danger" 
								title="No results found" 
								message={`Oops.. We couldn't retrieve any information. Please try different keywords.`} />
						</Col>
                    </Row>
					<Row className="show-grid">
						<Col md={12} className="center-align">
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
						</Col>
					</Row>
					<Row className="show-grid results-row">
						{
							results.map((item) => 
								<ResultThumb 
									key={item.id} 
									title={item.title}
									originalTitle={item.original_name}
									image={item.backdrop_path}
									imagePoster={item.poster_path}
									rating={item.vote_average}
									voteAverage={item.vote_average}
									description={item.overview}
									mediaType={item.media_type}
									releaseDate={item.release_date}

									personImage={item.profile_path}
									personName={item.name}
									personPopularity={item.popularity}
									personKnownFor={item.known_for}
								/>
							)
						}
					</Row>
				</Panel>
            </Grid>
        )
    }
}

export default Body;