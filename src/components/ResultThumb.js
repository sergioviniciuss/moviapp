import React, { Component } from 'react';
import { Thumbnail, Col, Button, ButtonToolbar, Overlay, Popover } from 'react-bootstrap';
import { API_IMG_DOMAIN } from '../config.js';
import UNAVAILABLE_IMAGE from '../images/image-unavailable.png';
import './ResultThumb.css';


class ResultThumb extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleClick = e => {
            this.setState({ target: e.target, show: !this.state.show });
        };

        this.state = { show: false };
    }
    render () {
        const { 
            mediaType,
            title, 
            originalTitle, 
            image, 
            imagePoster, 
            rating, 
            voteAverage, 
            description,
            releaseDate,
            personImage,
            personName,
            personPopularity,
            personKnownFor
        } = this.props;
        let year = "";
        if (!!releaseDate) {
            year = `Released in ${releaseDate.split('-')[0]}`
        }
        if( mediaType !== "person") {
            return (
                <Col xs={12} md={3}>
                    <Thumbnail src={image ? API_IMG_DOMAIN + image : imagePoster ? API_IMG_DOMAIN + imagePoster: UNAVAILABLE_IMAGE} alt={title ? title: originalTitle}>
                        <h3 className="result-thumb-title">{title? title: originalTitle ? originalTitle : "Title not available"}</h3>
                        <p className="result-thumb-desc">{description ? description : "Description not available"}</p>
                        <p className="result-thumb-date">
                            {year}
                        </p>
                        <p className="result-thumb-rating">
                            {voteAverage}<i className="star"></i>
                        </p>
                    </Thumbnail>
                </Col>
            )
        } else {
            return (
                <Col xs={12} md={3}>
                    <Thumbnail src={personImage ? API_IMG_DOMAIN + personImage : UNAVAILABLE_IMAGE} alt={personName ? personName: "actor/actress"}>
                        <h3 className="result-thumb-title">{personName ? personName: "Name not found"}</h3>
                        <p className="result-thumb-popularity">
                        {Math.round(personPopularity*100)/100}<i className="star"></i>
                        </p>
                        <ButtonToolbar>
                            <Button bsStyle="success" onClick={this.handleClick}>
                                Known for
                            </Button>
                            <Overlay
                                show={this.state.show}
                                target={this.state.target}
                                placement="bottom"
                                container={this}
                                containerPadding={20}
                            >
                                <Popover id="popover-contained" title="KNOWN FORr">
                                    {
                                        personKnownFor.map((item) => 
                                            <p className="result-thumb-knownfor" key={item.id}>{item.title}</p>
                                        )
                                    }
                                </Popover>
                            </Overlay>
                        </ButtonToolbar>
                    </Thumbnail>
                </Col>
            )
        }
    }
}

export default ResultThumb;