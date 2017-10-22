import React, { Component } from 'react';
import { Thumbnail, Col } from 'react-bootstrap';
import { API_IMG_DOMAIN } from '../config.js';
import './MostRatedThumbs.css';

class MostRatedThumbs extends Component {
    render () {
        const { 
            title, 
            originalTitle, 
            image, 
            imagePoster,
            releaseDate
        } = this.props;
        let year = "";
        if (!!releaseDate) {
            year = `${releaseDate.split('-')[0]}`
        }
        return (
            <Col xs={6} md={3} className="thumb">
				<img 
					src={image ? API_IMG_DOMAIN + image : imagePoster ? 
							API_IMG_DOMAIN + imagePoster: UNAVAILABLE_IMAGE} 
					alt={title ? title: originalTitle} 
				/>
				<div className="overlay-info">
					<h3 className="result-thumb-title">
                    <strong className="text-highlight">{year}</strong> | {title? title: originalTitle ? originalTitle : "Title not available"}
					</h3>
				</div>
            </Col>
        )
    }
}

export default MostRatedThumbs